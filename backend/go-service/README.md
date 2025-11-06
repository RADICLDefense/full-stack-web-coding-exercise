# Go Backend Service

A REST API service built with Go and Gorilla Mux that connects to a PostgreSQL database.

## Features

- Gorilla Mux router
- CORS enabled
- PostgreSQL database connection using `pgx/v5`
- Environment variable configuration with `godotenv`
- Health check endpoint
- Database-driven API endpoints

## Setup

1. Install dependencies:
```bash
go mod tidy
```

2. Configure environment variables:

Create a `.env` file in the `backend/go-service` directory with the following content:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=radicl_db
DB_USER=radicl_user
DB_PASSWORD=radicl_password
DB_SSLMODE=disable

# Service Port
PORT=3002
```

3. Make sure PostgreSQL is running (via Docker Compose):
```bash
# From the project root
docker-compose up -d
```

4. Run the service:
```bash
go run main.go
```

Or build and run:
```bash
go build -o go-service
./go-service
```

The service will run on `http://localhost:3002`

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/go/hello` - Hello world endpoint
- `GET /api/go/data` - Fetches items from PostgreSQL database where type='go'

## Scripts

- `go run main.go` - Run the service
- `go build` - Build the binary
- `go test ./...` - Run tests

