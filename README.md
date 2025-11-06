# RADICL Coding Exercises

A full-stack application demonstrating a modern web architecture with React.js frontend and mixed Node.js and Go backend services.

## Architecture

```
radicl-coding-exercises/
├── frontend/              # React.js + Vite frontend
├── backend/
│   ├── node-service/      # Node.js + Express backend
│   └── go-service/        # Go + Gorilla Mux backend
├── database/              # PostgreSQL initialization scripts
├── docker-compose.yml     # Docker Compose configuration
└── README.md
```

## Technology Stack

### Frontend
- **React 19** - Modern UI library with hooks
- **Vite 7** - Lightning-fast build tool and dev server
- **TanStack Table v8** - Powerful headless table library
- **Recharts** - Composable charting library
- **ESLint** - Code quality and linting

### Backend Services

#### Node.js Service
- **Express** - Fast, minimalist web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration
- **Nodemon** - Development auto-reload

#### Go Service
- **Gorilla Mux** - Powerful HTTP router
- **rs/cors** - CORS middleware
- **net/http** - Standard HTTP server

### Database
- **PostgreSQL 16** - Robust relational database
- **Docker Compose** - Containerized database setup
- **Automatic initialization** - SQL scripts for schema and seed data

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Go 1.21+
- Docker and Docker Compose (for database)
- Terminal access

### 1. Start the PostgreSQL Database

```bash
docker-compose up -d
```

The database will run on `localhost:5432`. See [database/README.md](database/README.md) for detailed configuration.

### 2. Start the Node.js Backend

```bash
cd backend/node-service
npm install
npm run dev
```

The Node.js service will run on `http://localhost:3001`

### 3. Start the Go Backend

```bash
cd backend/go-service
go mod tidy
go run main.go
```

The Go service will run on `http://localhost:3002`

### 4. Start the React Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Node.js Service (Port 3001)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/node/hello` | GET | Hello world message |
| `/api/node/data` | GET | Sample data array |

### Go Service (Port 3002)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/go/hello` | GET | Hello world message |
| `/api/go/data` | GET | Sample data array |

## Development

### Frontend Development
```bash
cd frontend
npm run dev    # Start dev server
npm run build  # Build for production
npm run lint   # Run linter
```

### Node.js Backend Development
```bash
cd backend/node-service
npm run dev    # Start with hot reload
npm start      # Start production mode
```

### Go Backend Development
```bash
cd backend/go-service
go run main.go        # Run in development
go build -o service   # Build binary
./service             # Run binary
```

### Database Development
```bash
docker-compose up -d           # Start database
docker-compose stop            # Stop database
docker-compose down -v         # Remove database and data
docker-compose logs postgres   # View database logs

# Connect to database
docker-compose exec postgres psql -U radicl_user -d radicl_db

# Run SQL file
docker-compose exec -T postgres psql -U radicl_user -d radicl_db < your-script.sql
```

See [database/README.md](database/README.md) for complete documentation.

## Project Structure

### Frontend
```
frontend/
├── src/
│   ├── App.jsx        # Main application component
│   ├── App.css        # Application styles
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── package.json
└── vite.config.js
```

### Node.js Backend
```
backend/node-service/
├── src/
│   └── index.js       # Express server
├── package.json
└── .env.example
```

### Go Backend
```
backend/go-service/
├── main.go            # HTTP server
├── go.mod
└── .env.example
```

## Features

- ✅ Modern React frontend with responsive design
- ✅ Interactive data tables with sorting (TanStack Table)
- ✅ Data visualization with charts (Recharts)
- ✅ RESTful API endpoints in both Node.js and Go
- ✅ PostgreSQL database with Docker Compose
- ✅ Automatic database initialization with sample data
- ✅ CORS enabled for cross-origin requests
- ✅ Health check endpoints for service monitoring
- ✅ Environment-based configuration
- ✅ Hot reload for development
- ✅ Clean, maintainable code structure

## Environment Configuration

Each service can be configured via environment variables. Create a `.env` file in the project root:

```env
# PostgreSQL Database
POSTGRES_DB=radicl_db
POSTGRES_USER=radicl_user
POSTGRES_PASSWORD=radicl_password
POSTGRES_PORT=5432

# Database Connection URLs
DATABASE_URL=postgresql://radicl_user:radicl_password@localhost:5432/radicl_db

# For Go Service
DB_HOST=localhost
DB_PORT=5432
DB_NAME=radicl_db
DB_USER=radicl_user
DB_PASSWORD=radicl_password
DB_SSLMODE=disable
```

### Node.js Service
Create `backend/node-service/.env`:
```env
PORT=3001
DATABASE_URL=postgresql://radicl_user:radicl_password@localhost:5432/radicl_db
```

### Go Service
Create `backend/go-service/.env`:
```env
PORT=3002
DB_HOST=localhost
DB_PORT=5432
DB_NAME=radicl_db
DB_USER=radicl_user
DB_PASSWORD=radicl_password
DB_SSLMODE=disable
```

**⚠️ Security Note:** Default credentials are for development only. Use strong passwords in production!

## Testing the Setup

1. Open your browser to `http://localhost:5173`
2. You should see the RADICL Full Stack Application dashboard
3. The dashboard will show the health status of both backend services
4. Click the "Fetch Node Data" and "Fetch Go Data" buttons to test API integration
5. Once data is fetched, you'll see:
   - **Simple data view** with badges
   - **Interactive charts** (pie, bar, and line charts)
   - **Sortable data table** (click column headers to sort)

## Production Build

### Frontend
```bash
cd frontend
npm run build
# Output will be in frontend/dist/
```

### Node.js Backend
```bash
cd backend/node-service
npm start
```

### Go Backend
```bash
cd backend/go-service
go build -o go-service
./go-service
```

## Troubleshooting

Common issues and quick solutions:

### Port Already in Use
```bash
# Kill process on specific port
lsof -ti:5173 | xargs kill -9  # Frontend
lsof -ti:3001 | xargs kill -9  # Node.js
lsof -ti:3002 | xargs kill -9  # Go
lsof -ti:5432 | xargs kill -9  # PostgreSQL
```

### Dependencies Issues
```bash
# Clean and reinstall all dependencies
rm -rf node_modules package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
rm -rf backend/node-service/node_modules backend/node-service/package-lock.json

npm install
cd frontend && npm install && cd ..
cd backend/node-service && npm install && cd ../..
```

### Database Issues
```bash
# Reset database completely
docker-compose down -v
docker-compose up -d
```

**For detailed troubleshooting**, see [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

## Next Steps

- Add authentication and authorization
- Implement a database layer
- Add unit and integration tests
- Set up Docker containers
- Configure CI/CD pipeline
- Add logging and monitoring
- Implement API versioning

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests!
