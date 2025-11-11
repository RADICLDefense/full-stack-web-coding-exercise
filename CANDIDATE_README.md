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
- **Create a PRIVATE repository** for your work - DO NOT fork this repository publicly. See setup instructions below.
- **Grant us collaborator access** to your private repository when submitting. Complete the **[INTERVIEWEE_RESULTS.md](INTERVIEWEE_RESULTS.md)** file with your submission details.
- **CRITICAL:** Keep the [README.md](README.md) updated with any setup changes. We will run your application locally, and accurate setup instructions are required.

## Getting Started

### 1. Clone This Repository

**Important:** Clone this repository directly - do NOT fork it. This keeps your work private and prevents other candidates from seeing your solution.

```bash
# Clone this repository to your local machine
git clone https://github.com/ORIGINAL_OWNER/radicl-coding-exercises.git radicl-coding-exercises
cd radicl-coding-exercises

# Remove the existing git remote
git remote remove origin
```

### 2. Create Your Private Repository

1. Go to GitHub and create a **new private repository** (e.g., `radicl-exercise-yourname`)
2. **Do NOT initialize it** with a README, .gitignore, or license (we already have those)
3. Copy the repository URL from GitHub

### 3. Push to Your Private Repository

```bash
# Add your new private repository as the remote origin
git remote add origin https://github.com/YOUR_USERNAME/your-private-repo-name.git

# Push your code to your private repository
git push -u origin main
```

### 4. Start Developing

```bash
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

### Two Approaches to Consider

You have flexibility in how you approach this challenge:

**Approach A: Breadth - Multiple Dashboard Components**
- Create samples of several different dashboard visualizations (e.g., charts, tables, metrics cards)
- Demonstrate your ability to build varied UI components and integrate different visualization types
- Show versatility across the full stack

**Approach B: Depth - One Comprehensive Component + Backend Skills**
- Focus on designing **one polished, feature-rich dashboard component** with excellent UX
- **Demonstrate comprehensive backend skills** by leveraging **both** services:
  - **Go service:** Handles data processing, aggregation, complex queries, or transformations
  - **Node.js service:** Renders the processed data to the frontend, handles API composition, or serves as the frontend gateway
- Show depth in architecture, API design, and backend engineering

**Both approaches are equally valued!** Choose the one that best showcases your strengths and interests.

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

### Executive-Level Dashboard Ideas

These visualizations focus on business value, ROI, and communicating security effectiveness to leadership:

#### 8. Attack Surface Reduction Trend & Summary
**Visualization:** Combined dashboard showing trend line of attack surface reduction over time, plus summary cards for key metrics: exposed endpoints eliminated, vulnerabilities patched, unnecessary services disabled, access points hardened

**Problem solved:** Executives need to see that security investments are actively reducing organizational risk exposure. This visualization tells a complete story: not just what threats were blocked, but how the organization's overall attack surface is shrinking through proactive security measures. Shows both current security posture (summary metrics) and trajectory of improvement (trend), validating that security spending delivers measurable, sustained business value.

#### 9. Cost Avoidance / ROI Metrics
**Visualization:** Dollar value cards showing "Potential Breach Costs Avoided" or "ROI on Security Investment"

**Problem solved:** CFOs and executives need to justify security spending. This quantifies the financial impact of prevented breaches based on industry average breach costs.

#### 10. Compliance Status Dashboard
**Visualization:** Status indicators for compliance frameworks (SOC 2, ISO 27001, GDPR, HIPAA) with percentage completion

**Problem solved:** For regulated industries, executives need immediate visibility into compliance status to avoid penalties and maintain certifications. Shows security as a business enabler, not just cost center.

#### 11. Mean Time to Detect & Respond (MTTD/MTTR)
**Visualization:** Trend chart showing improving response times, with industry benchmark comparison

**Problem solved:** Demonstrates operational excellence and efficiency improvements. Faster response times mean less potential damage from attacks, which translates to lower business risk.

## Minimum Requirements

You must complete all of these to be considered for the position:

### Database Layer

- Design and implement a database schema for data displayed in dashboard
- We've provided 5 sample records to get you started (see `database/init/02-security-data.sql`)
- Feel free to change based on the features you chose to develop
- **IMPORTANT:** If you add new SQL initialization scripts, document them in the [README.md](README.md) database section so your project can be setup correctly by another engineer

### Backend Layer

**Choose Node.js OR Go (or implement both for bonus points!)**

- **TypeScript is REQUIRED for Node.js implementation**
- Create RESTful API endpoints to fetch data
- Return properly structured JSON responses
- Follow REST best practices

### Frontend Layer

- **TypeScript is REQUIRED for React implementation**
- Install and use a modern UI library at your discretion:
  - **Tailwind CSS** (utility-first, highly customizable)
  - **Material-UI (MUI)** (comprehensive component library)
  - Or another library of your choice
- Create a cybersecurity-themed dashboard with professional styling
- Include **at least one data visualization** (chart/graph) showing data from the db
- Bonus: Make it responsive down to 1366 X 768, minimum is 1080P
- Bonus: Focus on good UX (loading states, error handling, etc.)

### Documentation & Setup Instructions

- **CRITICAL:** Update the [README.md](README.md) if you make ANY changes that affect local setup:
  - ✅ New SQL initialization scripts or seed data
  - ✅ New dependencies or libraries installed
  - ✅ New environment variables required
  - ✅ New services or ports
  - ✅ Database schema changes
  - ✅ Build command changes
- Include clear, step-by-step setup instructions
- Document any prerequisites or configuration steps
- Test your instructions on a fresh clone to ensure they work
- **We need to be able to run your application locally** - incomplete or incorrect setup instructions will negatively impact your evaluation

## Bonus Ideas (Optional)

These are suggestions to demonstrate excellence, not requirements. Feel free to be creative and add your own ideas!

- **Deploy your application** to a hosting provider (Render.com, Vercel, Fly.io, etc.)
  - See [Deployment Guide](#deployment-guide) below for platform-specific instructions
  - Provide the deployed URL in your submission
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
- Deployment configuration
- **Helpful git commit history that tells the development story** (we love seeing your thought process!)
- Real-time or polling updates for live data
- Export data functionality (CSV, JSON)

## Deployment Guide (Optional Bonus)

While deployment is not required, deploying your application can demonstrate additional skills and make it easier for us to review your work.

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

**What matters:** If you choose to deploy (bonus points!), your application should be accessible and working. Choose whatever platform makes you most productive!

## Submission

### Grant Collaborator Access

When you're ready to submit:

1. Go to your private repository on GitHub
2. Navigate to **Settings** → **Collaborators and teams** (or **Manage Access**)
3. Click **Add people** or **Invite a collaborator**
4. Add the following GitHub usernames with **Read** access:
   - `INTERVIEWER_GITHUB_USERNAME_1` (replace with actual username)
   - `INTERVIEWER_GITHUB_USERNAME_2` (if applicable)
5. We'll receive an email invitation and can review your code while keeping it private

### Complete Your Submission Details

Please complete the provided **INTERVIEWEE_RESULTS.md** file with:

- Your contact information
- Link to your private GitHub repository (required)
- Confirmation that you've granted collaborator access to the interviewer(s)
- Link to your deployed application (optional, but recommended)
- Summary of features you implemented
- Technologies you chose and why
- Time spent (approximate)
- Challenges you faced and how you solved them
- Any trade-offs or decisions you made
- Future improvements given more time
- **Clear, complete setup instructions for running locally** (REQUIRED - we will run your application locally)

### Notify Your Recruiting Contact

Send an email to your recruiting contact with:
- Link to your private repository
- Confirmation that collaborator access has been granted
- Any additional context you'd like to share

## Evaluation Criteria

We'll be evaluating based on:

✅ **Code Quality:** Clean, maintainable code across the entire stack
✅ **Architecture:** Proper separation of concerns and project organization
✅ **TypeScript Usage:** Proper typing for Node.js and React portions
✅ **UI/UX:** Functional, polished interface with good user experience
✅ **API Design:** Well-structured RESTful endpoints
✅ **Documentation:** Clear, complete, and accurate setup instructions that work
✅ **Problem Solving:** Your approach to challenges and technical decisions
✅ **Completeness:** All minimum requirements met

**Bonus Points:**
⭐ **Deployment:** Successfully deployed and accessible application
⭐ **Testing:** Unit or integration tests
⭐ **Additional Features:** Creative bonus features that enhance the application

## Questions?

If you have any questions about the requirements or setup, please reach out to your recruiting contact.

## Tips for Success

- **Keep your repository private** - This protects your work and prevents other candidates from seeing your solution
- **Start with the database schema** - A solid foundation makes everything easier
- **Get something working end-to-end quickly** - Then iterate and improve
- **Focus on the minimum requirements first** - Then add bonus features if time permits
- **Update the README.md as you go** - Document new SQL scripts, dependencies, or setup steps immediately
- **Test your setup instructions** - Clone your repo in a fresh directory and follow your own instructions
- **Write meaningful commit messages** - They tell the story of your development process
- **Don't overcomplicate** - A simple, polished solution is better than a complex, buggy one
- **Grant collaborator access early** - Don't wait until the last minute; test that we can access your repository

Good luck, and happy coding! We're excited to see what you build! 🚀

