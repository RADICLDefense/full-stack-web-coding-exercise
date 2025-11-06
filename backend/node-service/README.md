# Node.js Backend Service

A REST API service built with Express.js.

## Features

- Express.js web framework
- CORS enabled
- Environment variable configuration
- Health check endpoint
- Sample API endpoints

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

The service will run on `http://localhost:3001`

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/node/hello` - Hello world endpoint
- `GET /api/node/data` - Sample data endpoint

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm test` - Run tests

