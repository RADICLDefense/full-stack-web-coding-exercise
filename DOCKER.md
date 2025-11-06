# Docker Quick Reference

This document provides quick reference commands for working with Docker and Docker Compose in this project.

## Prerequisites

Make sure Docker and Docker Compose are installed:

```bash
docker --version
docker-compose --version
```

## Basic Commands

### Start the Database

```bash
# Start in detached mode (background)
docker-compose up -d

# Start and view logs
docker-compose up
```

### Stop the Database

```bash
# Stop but keep containers
docker-compose stop

# Stop and remove containers (keeps data)
docker-compose down

# Stop, remove containers AND delete all data
docker-compose down -v
```

### View Status

```bash
# List running containers
docker-compose ps

# View health status
docker-compose ps
```

### View Logs

```bash
# View all logs
docker-compose logs

# Follow logs (real-time)
docker-compose logs -f

# View logs for specific service
docker-compose logs postgres

# Follow logs with tail
docker-compose logs -f --tail=100 postgres
```

## Database Operations

### Connect to Database

```bash
# Connect using psql
docker-compose exec postgres psql -U radicl_user -d radicl_db

# One-liner query
docker-compose exec postgres psql -U radicl_user -d radicl_db -c "SELECT * FROM users;"
```

### Database Backup & Restore

```bash
# Create backup
docker-compose exec postgres pg_dump -U radicl_user radicl_db > backup_$(date +%Y%m%d_%H%M%S).sql

# Restore from backup
docker-compose exec -T postgres psql -U radicl_user -d radicl_db < backup.sql

# Backup with custom format (recommended for large databases)
docker-compose exec postgres pg_dump -U radicl_user -Fc radicl_db > backup.dump
docker-compose exec -T postgres pg_restore -U radicl_user -d radicl_db < backup.dump
```

### Run SQL Scripts

```bash
# Run a SQL file
docker-compose exec -T postgres psql -U radicl_user -d radicl_db < path/to/script.sql

# Run SQL file from inside container
docker-compose exec postgres psql -U radicl_user -d radicl_db -f /docker-entrypoint-initdb.d/01-init.sql
```

## Troubleshooting

### Reset Database Completely

```bash
# Stop and remove everything
docker-compose down -v

# Start fresh
docker-compose up -d

# Verify it's working
docker-compose ps
```

### View Container Details

```bash
# Inspect container
docker-compose exec postgres env

# Check PostgreSQL version
docker-compose exec postgres postgres --version

# Check if database is ready
docker-compose exec postgres pg_isready -U radicl_user
```

### Access Container Shell

```bash
# Open bash shell in container
docker-compose exec postgres bash

# Once inside, you can use standard Linux commands
ls -la /var/lib/postgresql/data
cat /docker-entrypoint-initdb.d/01-init.sql
exit
```

### Check Disk Usage

```bash
# View volume size
docker volume ls
docker system df -v

# Clean up unused volumes
docker volume prune
```

### Port Conflicts

If port 5432 is already in use:

1. Change port in `.env`:
   ```env
   POSTGRES_PORT=5433
   ```

2. Restart the service:
   ```bash
   docker-compose down
   docker-compose up -d
   ```

3. Update connection strings to use the new port

### Performance Monitoring

```bash
# View resource usage
docker stats radicl-postgres

# View running processes in container
docker-compose exec postgres ps aux

# Check active connections
docker-compose exec postgres psql -U radicl_user -d radicl_db -c "SELECT * FROM pg_stat_activity;"
```

## Advanced Operations

### Create Additional Databases

```bash
# Connect to PostgreSQL
docker-compose exec postgres psql -U radicl_user -d radicl_db

# Create new database
CREATE DATABASE test_db;

# Create new user
CREATE USER test_user WITH PASSWORD 'test_password';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;
```

### Database Maintenance

```bash
# Vacuum database
docker-compose exec postgres psql -U radicl_user -d radicl_db -c "VACUUM ANALYZE;"

# Reindex
docker-compose exec postgres psql -U radicl_user -d radicl_db -c "REINDEX DATABASE radicl_db;"

# Check database size
docker-compose exec postgres psql -U radicl_user -d radicl_db -c "SELECT pg_size_pretty(pg_database_size('radicl_db'));"
```

### Export/Import Specific Tables

```bash
# Export single table
docker-compose exec postgres pg_dump -U radicl_user -d radicl_db -t users > users_backup.sql

# Import single table
docker-compose exec -T postgres psql -U radicl_user -d radicl_db < users_backup.sql

# Export data only (no schema)
docker-compose exec postgres pg_dump -U radicl_user -d radicl_db -t users --data-only > users_data.sql
```

### Network Inspection

```bash
# List networks
docker network ls

# Inspect the project network
docker network inspect radicl-coding-exercises_radicl-network

# See which containers are on the network
docker network inspect radicl-coding-exercises_radicl-network --format='{{range .Containers}}{{.Name}} {{end}}'
```

## Docker Compose File Customization

### Override Configuration

Create `docker-compose.override.yml` for local customizations:

```yaml
version: '3.8'

services:
  postgres:
    ports:
      - "5433:5432"  # Use different port
    environment:
      POSTGRES_MAX_CONNECTIONS: 200
```

This file is automatically loaded and merged with `docker-compose.yml`.

### Using Different Environments

```bash
# Use specific compose file
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Use different env file
docker-compose --env-file .env.production up -d
```

## Useful Aliases

Add these to your `.bashrc` or `.zshrc`:

```bash
# Docker Compose shortcuts
alias dc='docker-compose'
alias dcup='docker-compose up -d'
alias dcdown='docker-compose down'
alias dclogs='docker-compose logs -f'
alias dcps='docker-compose ps'

# PostgreSQL shortcuts
alias dbconnect='docker-compose exec postgres psql -U radicl_user -d radicl_db'
alias dblogs='docker-compose logs -f postgres'
alias dbstatus='docker-compose exec postgres pg_isready'
```

## Common Workflows

### Daily Development Workflow

```bash
# Morning: Start database
docker-compose up -d

# Check it's healthy
docker-compose ps

# Work on your project...

# Evening: Stop database (optional)
docker-compose stop
```

### Testing Database Changes

```bash
# 1. Backup current state
docker-compose exec postgres pg_dump -U radicl_user radicl_db > before_changes.sql

# 2. Make your changes
docker-compose exec postgres psql -U radicl_user -d radicl_db < new_schema.sql

# 3. Test your changes

# 4. If something breaks, restore
docker-compose down -v
docker-compose up -d
docker-compose exec -T postgres psql -U radicl_user -d radicl_db < before_changes.sql
```

### Clean Slate Development

```bash
# Complete reset
docker-compose down -v
docker volume prune -f
docker-compose up -d

# Verify initialization ran
docker-compose logs postgres | grep "database system is ready to accept connections"
```

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## Getting Help

```bash
# Docker Compose help
docker-compose --help
docker-compose up --help

# PostgreSQL help (inside container)
docker-compose exec postgres psql --help
docker-compose exec postgres pg_dump --help
```

