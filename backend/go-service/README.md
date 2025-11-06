# Go Backend Service

A REST API service built with Go and Gorilla Mux.

## Features

- Gorilla Mux router
- CORS enabled
- Environment variable configuration
- Health check endpoint
- Sample API endpoints

## Setup

1. Install dependencies:
```bash
go mod tidy
```

2. Configure environment variables:
```bash
cp .env.example .env
```

3. Run the service:
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
- `GET /api/go/data` - Sample data endpoint

## Scripts

- `go run main.go` - Run the service
- `go build` - Build the binary
- `go test ./...` - Run tests

