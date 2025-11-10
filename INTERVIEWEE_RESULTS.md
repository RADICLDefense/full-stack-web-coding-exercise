# Coding Exercise - Results & Submission

## Your Information

**Name:** [Your Full Name]

**GitHub Username:** [@your-username]

**Deployed Application URL:** [https://your-deployed-app.onrender.com or similar]

**Repository Fork URL:** [https://github.com/your-username/radicl-coding-exercises]

**Date Submitted:** [YYYY-MM-DD]

---

## Implementation Summary

### Features Implemented

*List the main features you built. Be specific!*

**Example:**
- Security events dashboard with real-time event feed
- Interactive severity distribution pie chart using Recharts
- Sortable and filterable events table with 500+ sample events
- Top 5 threat types bar chart
- Responsive design using Tailwind CSS
- Node.js REST API with TypeScript for event data
- PostgreSQL database with indexed queries

**Your Features:**
- [Feature 1]
- [Feature 2]
- [Feature 3]
- ...

### Technology Choices

*Explain your key technology decisions and why you made them.*

**Example:**
- **UI Library:** Chose Tailwind CSS for its flexibility and rapid prototyping capabilities
- **Backend Service:** Implemented Node.js with TypeScript for type safety and Express familiarity
- **Charts:** Used Recharts for its React integration and declarative API
- **Deployment:** Deployed to Render because it provided seamless PostgreSQL + backend + frontend hosting on the free tier

**Your Choices:**
- **UI Library:** [Your choice and reasoning]
- **Backend Service(s):** [Node.js/Go/Both and why]
- **Charting Library:** [Your choice and reasoning]
- **Deployment Platform:** [Your choice and reasoning]
- **Other Notable Choices:** [Any other significant technical decisions]

### Time Spent

**Total Time:** Approximately [X] hours

**Breakdown (optional):**
- Database schema design: [X hours]
- Backend API development: [X hours]
- Frontend UI/UX: [X hours]
- Data visualization: [X hours]
- Deployment and testing: [X hours]

### Challenges & Solutions

*Describe any significant challenges you encountered and how you solved them.*

**Example:**
1. **Challenge:** CORS issues when connecting frontend to backend in production
   - **Solution:** Configured proper CORS headers in Express and added allowed origins for deployed URLs

2. **Challenge:** PostgreSQL connection pooling errors in production
   - **Solution:** Adjusted connection pool settings and implemented proper connection cleanup

**Your Challenges:**
1. **Challenge:** [Describe the problem]
   - **Solution:** [How you solved it]

2. **Challenge:** [Another challenge]
   - **Solution:** [Your solution]

### Trade-offs & Decisions

*Discuss any trade-offs you made or design decisions worth noting.*

**Example:**
- Chose to implement only Node.js backend to focus on polishing the UI rather than spreading time across both backends
- Used client-side filtering for the table instead of backend pagination to simplify implementation
- Focused on desktop-first design but ensured mobile responsiveness for key views

**Your Trade-offs:**
- [Trade-off 1]
- [Trade-off 2]
- [Trade-off 3]

### Future Improvements

*What would you add or improve given more time?*

**Example:**
- Add WebSocket support for true real-time event updates
- Implement backend pagination and more sophisticated filtering
- Add user authentication and role-based access control
- Include automated tests (Jest for frontend, Supertest for API)
- Add more advanced visualizations (geographic threat map, trend analysis)
- Implement database query optimization with proper indexes

**Your Ideas:**
- [Improvement 1]
- [Improvement 2]
- [Improvement 3]
- ...

---

## Setup Instructions

### Prerequisites

*List what evaluators need to have installed.*

- Node.js 18+ and npm
- Go 1.21+ (if you used Go service)
- Docker and Docker Compose
- [Any other requirements]

### Local Development Setup

```bash
# 1. Clone your repository
git clone [your-fork-url]
cd radicl-coding-exercises

# 2. Start PostgreSQL database
docker-compose up -d

# 3. [Add any additional setup steps you need]
# Example: Install dependencies, run migrations, seed data, etc.

# 4. Start backend service(s)
cd backend/node-service
npm install
npm run dev  # Runs on http://localhost:3001

# OR/AND for Go service:
cd backend/go-service
go mod tidy
go run main.go  # Runs on http://localhost:3002

# 5. Start frontend
cd frontend
npm install
npm run dev  # Runs on http://localhost:5173
```

### Environment Variables

*Provide a template for any required environment variables.*

**Backend Node.js Service** (`backend/node-service/.env`):
```env
PORT=3001
DATABASE_URL=postgresql://radicl_user:radicl_password@localhost:5432/radicl_db
# Add any other variables you need
```

**Backend Go Service** (`backend/go-service/.env`) - *if applicable*:
```env
PORT=3002
DB_HOST=localhost
DB_PORT=5432
DB_NAME=radicl_db
DB_USER=radicl_user
DB_PASSWORD=radicl_password
DB_SSLMODE=disable
# Add any other variables you need
```

**Frontend** (if needed):
```env
VITE_API_URL=http://localhost:3001
# Add any other variables you need
```

### Database Setup

*If you added custom migrations or seed scripts, explain them here.*

```bash
# The database will auto-initialize with the scripts in database/init/
# If you added custom scripts, mention them:
# - 01-init.sql (original)
# - 02-security-data.sql (security events schema and seed data)
# - [any additional scripts you created]
```

### Accessing the Application

Once everything is running:
- **Frontend:** http://localhost:5173
- **Node.js API:** http://localhost:3001
- **Go API:** http://localhost:3002 (if implemented)

### Deployment Access

**Deployed Application:** [Your deployed URL]

*If evaluators need any credentials or special instructions to access the deployed version, include them here.*

---

## Additional Notes

*Any other information you'd like to share with evaluators.*

[Your notes here - optional]

---

## Thank You!

Thank you for reviewing my submission. I enjoyed working on this challenge and look forward to discussing my implementation with you!

