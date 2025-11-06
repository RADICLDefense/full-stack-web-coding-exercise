package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type HealthResponse struct {
	Status    string `json:"status"`
	Service   string `json:"service"`
	Timestamp string `json:"timestamp"`
}

type HelloResponse struct {
	Message string `json:"message"`
	Version string `json:"version"`
}

type DataItem struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
}

type DataResponse struct {
	Data []DataItem `json:"data"`
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(HealthResponse{
		Status:    "healthy",
		Service:   "go-service",
		Timestamp: time.Now().Format(time.RFC3339),
	})
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(HelloResponse{
		Message: "Hello from Go service!",
		Version: "1.0.0",
	})
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	data := DataResponse{
		Data: []DataItem{
			{ID: 1, Name: "Item A", Type: "go"},
			{ID: 2, Name: "Item B", Type: "go"},
			{ID: 3, Name: "Item C", Type: "go"},
		},
	}
	json.NewEncoder(w).Encode(data)
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3002"
	}

	r := mux.NewRouter()

	// Routes
	r.HandleFunc("/api/health", healthHandler).Methods("GET")
	r.HandleFunc("/api/go/hello", helloHandler).Methods("GET")
	r.HandleFunc("/api/go/data", dataHandler).Methods("GET")

	// CORS
	handler := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"Content-Type", "Authorization"},
	}).Handler(r)

	addr := fmt.Sprintf(":%s", port)
	log.Printf("Go service running on port %s\n", port)
	log.Fatal(http.ListenAndServe(addr, handler))
}

