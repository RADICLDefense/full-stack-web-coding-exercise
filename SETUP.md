# Setup Guide

This guide will help you get the RADICL full-stack application up and running.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Go** 1.21 or higher ([Download](https://go.dev/dl/))

Verify installations:
```bash
node --version  # Should be v18.x.x or higher
npm --version   # Should be 9.x.x or higher
go version      # Should be go1.21.x or higher
```

## Installation Methods

### Method 1: Automatic Setup (Recommended)

#### On macOS/Linux:
```bash
./start.sh
```

#### On Windows:
```bash
start.bat
```

This script will:
1. Check for required prerequisites
2. Install all dependencies
3. Start all three services concurrently
4. Open the application in your browser

### Method 2: Manual Setup

If you prefer to start services individually:

#### Step 1: Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install Node.js backend dependencies
cd backend/node-service
npm install
cd ../..

# Install Go backend dependencies
cd backend/go-service
go mod tidy
cd ../..
```

#### Step 2: Start Services (in separate terminals)

**Terminal 1 - Node.js Backend:**
```bash
cd backend/node-service
npm run dev
```
Service will be available at: `http://localhost:3001`

**Terminal 2 - Go Backend:**
```bash
cd backend/go-service
go run main.go
```
Service will be available at: `http://localhost:3002`

**Terminal 3 - React Frontend:**
```bash
cd frontend
npm run dev
```
Application will be available at: `http://localhost:5173`

#### Step 3: Verify Setup

Open your browser and navigate to `http://localhost:5173`. You should see:
- Backend service health status for both Node.js and Go
- Interactive buttons to fetch data from each service
- A modern, responsive UI

## Troubleshooting

### Port Conflicts

If you encounter port conflicts, you can change the default ports:

**Node.js Backend:**
Create/edit `backend/node-service/.env`:
```env
PORT=3001
```

**Go Backend:**
Set environment variable:
```bash
export PORT=3002  # macOS/Linux
set PORT=3002     # Windows
```

**Frontend:**
Edit `frontend/vite.config.js` and add:
```javascript
export default defineConfig({
  server: {
    port: 5173
  }
})
```

### Services Not Starting

**Node.js Backend Issues:**
- Make sure you're in the correct directory
- Try deleting `node_modules` and running `npm install` again
- Check for error messages in the terminal

**Go Backend Issues:**
- Verify Go is installed: `go version`
- Run `go mod tidy` to ensure dependencies are correct
- Check for compilation errors

**Frontend Issues:**
- Clear browser cache
- Try running `npm run build` to check for build errors
- Ensure backend services are running first

### CORS Errors

Both backend services are configured to accept requests from any origin during development. If you still encounter CORS errors:
- Verify both backend services are running
- Check browser console for specific error messages
- Ensure you're accessing the frontend via `http://localhost:5173`

## Development Workflow

### Frontend Development
```bash
cd frontend
npm run dev     # Start dev server with HMR
npm run build   # Create production build
npm run lint    # Check code quality
```

### Node.js Backend Development
```bash
cd backend/node-service
npm run dev     # Start with auto-reload (nodemon)
npm start       # Start in production mode
```

### Go Backend Development
```bash
cd backend/go-service
go run main.go              # Run directly
go build -o go-service      # Build binary
./go-service                # Run binary
```

## Testing the Application

### 1. Health Check

Both backends expose a health check endpoint:
```bash
# Node.js health check
curl http://localhost:3001/api/health

# Go health check
curl http://localhost:3002/api/health
```

### 2. Data Endpoints

Test the data endpoints:
```bash
# Node.js data
curl http://localhost:3001/api/node/data

# Go data
curl http://localhost:3002/api/go/data
```

### 3. Frontend Integration

Open `http://localhost:5173` and:
1. Verify both service status indicators show "healthy"
2. Click "Fetch Node Data" - should display Node.js data
3. Click "Fetch Go Data" - should display Go data

## Project Structure Overview

```
radicl-coding-exercises/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx          # Main component
│   │   ├── App.css          # Styles
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── node-service/        # Express.js backend
│   │   ├── src/
│   │   │   └── index.js     # Server code
│   │   └── package.json
│   │
│   └── go-service/          # Go backend
│       ├── main.go          # Server code
│       └── go.mod
│
├── package.json             # Root package with scripts
├── start.sh                 # Auto-start script (Unix)
├── start.bat                # Auto-start script (Windows)
└── README.md                # Project documentation
```

## Next Steps

Now that your project is set up, you can:

1. **Explore the Code**: Navigate through the frontend and backend code
2. **Modify Components**: Try changing the UI in `frontend/src/App.jsx`
3. **Add Endpoints**: Create new API endpoints in either backend
4. **Customize Styling**: Update styles in `frontend/src/App.css`
5. **Add Features**: Implement authentication, database integration, etc.

## Getting Help

If you encounter issues:
1. Check the terminal output for error messages
2. Review the README.md for detailed documentation
3. Ensure all prerequisites are correctly installed
4. Try the manual setup method if automatic setup fails

## Production Deployment

For production deployment:

1. **Frontend**: Run `npm run build` in the frontend directory
2. **Node.js**: Use `npm start` or a process manager like PM2
3. **Go**: Build with `go build` and deploy the binary
4. Configure environment variables for production
5. Set up reverse proxy (nginx) for routing
6. Enable HTTPS with SSL certificates

Happy coding! 🚀

