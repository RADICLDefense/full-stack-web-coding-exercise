# Fullstack Developer II - Take-Home Coding Exercise

Welcome! This coding exercise is designed to assess your fullstack development skills for a **Fullstack Developer II** position at RADICL. We're excited to see what you can build!

## Overview

You're starting with a functional full-stack application that includes:
- **Frontend:** React 19 + Vite
- **Backend Services:** Node.js (Express) and Go (Gorilla Mux)
- **Database:** PostgreSQL 16

Your task is to transform this starter application into a **cybersecurity dashboard** that helps security teams monitor and respond to threats.

## Important Notes

- **Use all tools at your disposal** - We encourage you to leverage AI assistants, documentation, Stack Overflow, and any other resources you typically use in your development workflow.
- **Minimum time commitment:** 2 hours (but we encourage you to go above and beyond if you're having fun!)
- **Fork this repository publicly** to your GitHub account and submit the link to your fork along with your deployed application. Complete the **[INTERVIEWEE_RESULTS.md](INTERVIEWEE_RESULTS.md)** file in your fork with your submission details.

## Getting Started

### 1. Fork This Repository

Click the "Fork" button at the top of this repository to create a public fork under your GitHub account.

### 2. Clone and Setup

```bash
# Clone your forked repository
git clone https://github.com/YOUR_USERNAME/radicl-coding-exercises.git
cd radicl-coding-exercises

# Follow the setup instructions in the main README.md
# Quick start:
docker-compose up -d  # Start PostgreSQL
cd backend/node-service && npm install && npm run dev  # Start Node service
cd backend/go-service && go run main.go  # Start Go service
cd frontend && npm install && npm run dev  # Start React frontend
```

For detailed setup instructions, see the main [README.md](README.md).

## The Challenge: Cybersecurity Dashboard

**Context:** You're building a dashboard for a cybersecurity-as-a-service platform. Security operations teams need to monitor threats, analyze attack patterns, and respond to incidents quickly.

Your task is to create a feature-rich dashboard that displays security events and threat intelligence data.

### Sample Dashboard Ideas

Not sure what to build? Here are some feature ideas with the problems they solve:

#### 1. Event Severity Distribution
**Visualization:** Pie or donut chart showing Critical/High/Medium/Low threat distribution

**Problem solved:** Security teams need to quickly prioritize response efforts by understanding the distribution of threat severity levels across all active events.

#### 2. Timeline of Security Events
**Visualization:** Line or area chart showing events over time

**Problem solved:** Identify patterns and trends in security incidents to detect attack campaigns or determine if threats are increasing/decreasing over time.

#### 3. Top Threat Types
**Visualization:** Bar chart showing malware, phishing, DDoS, intrusion attempts, etc.

**Problem solved:** Help security teams understand which attack vectors are most prevalent so they can allocate resources and strengthen defenses appropriately.

#### 4. Affected Systems/Assets Table
**Visualization:** Sortable, filterable data table with risk scores

**Problem solved:** Provide visibility into which systems or assets are under attack or at risk, enabling teams to focus protection efforts on the most critical infrastructure.

#### 5. Real-Time Event Feed
**Visualization:** Scrolling list of latest security events

**Problem solved:** Give security analysts immediate awareness of new threats as they occur, enabling rapid response to emerging incidents.

#### 6. Geographic Threat Map
**Visualization:** Map showing attack origins (if source IP data available)

**Problem solved:** Visualize the geographic origin of attacks to identify coordinated threats from specific regions and inform firewall/blocking rules.

#### 7. Key Metrics Cards
**Visualization:** Dashboard cards showing Total events, Active threats, Systems at risk, Average response time

**Problem solved:** Provide executive-level overview of security posture at a glance, showing key performance indicators for the security operations team.

## Minimum Requirements

You must complete all of these to be considered for the position:

### Database Layer

- Design and implement a database schema for security events/threat data
- Schema should support: events, threats, severity levels, timestamps, affected systems, etc.
- Use enums/constraints for fields like `event_type`, `severity`, `status`
- We've provided 5 sample records to get you started (see `database/init/02-security-data.sql`)
- Feel free to add more records if you want richer visualizations

### Backend Layer

**Choose Node.js OR Go (or implement both for bonus points!)**

- **TypeScript is REQUIRED for Node.js implementation**
- Create RESTful API endpoints to fetch security event data
- Implement filtering and/or sorting capabilities
- Return properly structured JSON responses
- Follow REST best practices

### Frontend Layer

- **TypeScript is REQUIRED for React implementation**
- Install and use a modern UI library:
  - **Tailwind CSS** (utility-first, highly customizable)
  - **Material-UI (MUI)** (comprehensive component library)
  - Or another library of your choice
- Create a cybersecurity-themed dashboard with professional styling
- Display security events in a table or list with sorting/filtering capabilities
- Include **at least one data visualization** (chart/graph) showing threat trends
- Make it responsive and visually polished
- Focus on good UX (loading states, error handling, etc.)

### Deployment

- Deploy your application to a hosting provider (use whatever is most convenient for you!)
- **Recommended options with free tiers:**
  - **Render.com** - Free PostgreSQL + web services (Recommended for full-stack)
  - **Fly.io** - Developer-focused, great for Go services
  - **Vercel** (frontend) + **Supabase/Neon** (PostgreSQL + backends)
- Provide the deployed URL in your submission
- See [Deployment Guide](#deployment-guide) below for platform-specific instructions

## Bonus Ideas (Optional)

These are suggestions to demonstrate excellence, not requirements. Feel free to be creative and add your own ideas!

- Use **both Node.js AND Go services** with different data endpoints
- Advanced visualizations (multiple chart types, interactive dashboards)
- Sophisticated filtering/search functionality (date ranges, multi-select filters)
- Database indexes and query optimization
- API documentation (Swagger/OpenAPI)
- Unit or integration tests
- Additional UI polish:
  - Smooth animations and transitions
  - Loading skeletons
  - Comprehensive error handling
  - Dark mode toggle
- Docker deployment configuration
- **Helpful git commit history that tells the development story** (we love seeing your thought process!)
- Real-time or polling updates for live data
- Export data functionality (CSV, JSON)
- Accessibility features (ARIA labels, keyboard navigation)
- Responsive design that works great on mobile

## Deployment Guide

### Recommended: Render.com (Free Tier)

We recommend **Render.com** for this exercise because it provides an easy all-in-one solution with PostgreSQL, backend services, and frontend hosting all on the free tier.

#### Why Render?
- ✅ 100% free tier includes everything you need
- ✅ Easy setup with GitHub integration
- ✅ Supports PostgreSQL + Node.js + Go + Static sites
- ✅ One-click deploy with included `render.yaml` blueprint
- ✅ Auto-deploys on git push

#### Quick Start with Render

**Option A: Blueprint Deploy (Easiest)**
1. Sign up at [render.com](https://render.com)
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically create all services from `render.yaml`
5. Set any required environment variables in the dashboard

**Option B: Manual Setup**
1. **Create PostgreSQL Database:**
   - Dashboard → "New +" → "PostgreSQL"
   - Name: `radicl-postgres`
   - Plan: Free
   - Note the connection details

2. **Create Node.js Backend Service:**
   - Dashboard → "New +" → "Web Service"
   - Connect your GitHub repo
   - Root Directory: `backend/node-service`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Add environment variables:
     ```env
     DATABASE_URL=[Your PostgreSQL Internal Connection URL]
     PORT=3001
     NODE_ENV=production
     ```

3. **Create Go Backend Service (Optional):**
   - Dashboard → "New +" → "Web Service"
   - Root Directory: `backend/go-service`
   - Build Command: `go build -o service`
   - Start Command: `./service`
   - Add database environment variables

4. **Create Frontend Static Site:**
   - Dashboard → "New +" → "Static Site"
   - Root Directory: `frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Add environment variables:
     ```env
     VITE_NODE_API_URL=https://your-node-service.onrender.com
     VITE_GO_API_URL=https://your-go-service.onrender.com
     ```

5. **Update CORS Settings:**
   - Update your backend code to allow requests from your Render frontend URL
   - Commit and push - Render will auto-deploy

#### Important Notes

⚠️ **Free Tier Limitations:**
- Services spin down after 15 minutes of inactivity
- First request after sleep takes ~30-60 seconds (cold start)
- Wake up your services before your demo/submission!

💡 **Pro Tip:** Keep a tab open with your deployed app or use a free uptime monitor like UptimeRobot to keep it awake.

#### Environment Variables Reference

**Frontend (`frontend/.env`):**
```env
VITE_NODE_API_URL=https://your-node-service.onrender.com
VITE_GO_API_URL=https://your-go-service.onrender.com
```

**Node.js Backend:**
```env
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3001
NODE_ENV=production
ALLOWED_ORIGINS=https://your-frontend.onrender.com
```

**Go Backend:**
```env
DB_HOST=your-postgres-host.onrender.com
DB_PORT=5432
DB_NAME=your-database-name
DB_USER=your-username
DB_PASSWORD=your-password
DB_SSLMODE=require
PORT=3002
```

#### Troubleshooting

**CORS Errors:**
- Check that your backend allows requests from your frontend URL
- Update CORS settings in your backend code and redeploy

**Database Connection Errors:**
- Verify DATABASE_URL or DB_* environment variables are correct
- Ensure using internal connection URL (not external)
- Check SSL mode is set to `require` for Render

**Build Failures:**
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Test build locally: `npm run build`

### Alternative Deployment Options

While we recommend Render, you're free to use any hosting platform you're comfortable with:

- **Railway.app** - All-in-one with $5 free monthly credit
- **Fly.io** - Developer-focused, great for containerized apps  
- **Vercel** (frontend) + **Supabase/Neon** (database) - Hybrid approach
- **Any other platform** that supports Node.js, Go, PostgreSQL, and static sites

**What matters:** Your application must be deployed, accessible, and working. Choose whatever platform makes you most productive!

## Submission

Please complete the provided **INTERVIEWEE_RESULTS.md** file with:

- Your contact information
- Links to your deployed application and GitHub fork
- Summary of features you implemented
- Technologies you chose and why
- Time spent (approximate)
- Challenges you faced and how you solved them
- Any trade-offs or decisions you made
- Future improvements given more time
- Setup instructions for running locally

## Evaluation Criteria

We'll be evaluating based on:

✅ **Code Quality:** Clean, maintainable code across the entire stack
✅ **Architecture:** Proper separation of concerns and project organization
✅ **TypeScript Usage:** Proper typing for Node.js and React portions
✅ **UI/UX:** Functional, polished interface with good user experience
✅ **API Design:** Well-structured RESTful endpoints
✅ **Deployment:** Successfully deployed and accessible application
✅ **Problem Solving:** Your approach to challenges and technical decisions
✅ **Completeness:** All minimum requirements met

## Questions?

If you have any questions about the requirements or setup, please reach out to your recruiting contact.

## Tips for Success

- **Start with the database schema** - A solid foundation makes everything easier
- **Get something working end-to-end quickly** - Then iterate and improve
- **Focus on the minimum requirements first** - Then add bonus features if time permits
- **Test your deployed application** - Make sure it works in production!
- **Write meaningful commit messages** - They tell the story of your development process
- **Don't overcomplicate** - A simple, polished solution is better than a complex, buggy one

Good luck, and happy coding! We're excited to see what you build! 🚀

