import { create } from 'zustand'

const NODE_API_URL = 'http://localhost:3001'
const GO_API_URL = 'http://localhost:3002'

export const useAppStore = create((set, get) => ({
  // State
  nodeHealth: null,
  goHealth: null,
  nodeData: null,
  goData: null,
  allData: [],
  loading: true,

  // Actions
  fetchHealthStatus: async () => {
    set({ loading: true })
    try {
      const [nodeRes, goRes] = await Promise.all([
        fetch(`${NODE_API_URL}/api/health`).catch(err => ({ error: err.message })),
        fetch(`${GO_API_URL}/api/health`).catch(err => ({ error: err.message }))
      ])

      let nodeHealthData = { error: 'Service unavailable' }
      let goHealthData = { error: 'Service unavailable' }

      if (nodeRes.json) {
        nodeHealthData = await nodeRes.json()
      }

      if (goRes.json) {
        goHealthData = await goRes.json()
      }

      set({
        nodeHealth: nodeHealthData,
        goHealth: goHealthData
      })
    } catch (error) {
      console.error('Error fetching health status:', error)
    }
    set({ loading: false })
  },

  fetchNodeData: async () => {
    try {
      const response = await fetch(`${NODE_API_URL}/api/node/data`)
      const data = await response.json()
      set({ nodeData: data.data })
      get().updateAllData()
    } catch (error) {
      console.error('Error fetching Node data:', error)
      set({ nodeData: [] })
    }
  },

  fetchGoData: async () => {
    try {
      const response = await fetch(`${GO_API_URL}/api/go/data`)
      const data = await response.json()
      set({ goData: data.data })
      get().updateAllData()
    } catch (error) {
      console.error('Error fetching Go data:', error)
      set({ goData: [] })
    }
  },

  updateAllData: () => {
    const { nodeData, goData } = get()
    const combined = []
    if (nodeData) combined.push(...nodeData)
    if (goData) combined.push(...goData)
    set({ allData: combined })
  },

  fetchAllData: async () => {
    await Promise.all([get().fetchNodeData(), get().fetchGoData()])
  },
}))

