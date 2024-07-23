## Features Overview

### Dashboard Overview

- **Live Status:** Displays real-time status of your bot, including uptime and any errors.
- **Shard Information:** Monitor the status of individual shards, including their resource usage.

### Shard Management

- **View Shards:** See a list of all active shards with their status.
- **Control Shards:** Restart or stop specific shards as needed.
- **Heartbeats:** Monitor shard heartbeats to ensure connectivity and performance.

### User Management

- **Ban Users:** Admin panel to ban users and provide ban reasons.
- **View Banned Users:** List of banned users with ban details, including reason and ban ID.

### Real-Time Updates

- **WebSocket Connection:** Uses WebSocket for live updates on bot status and shard information.
- **Notification System:** Alerts for critical issues or important updates.

### Dark Mode

- **User Interface:** A modern, dark-themed interface designed for ease of use during extended periods of operation.
- **Customizable Theme:** Easily switch themes or customize colors to match your preferences.

## Project Structure

Here's a brief overview of the project structure:

- `src/` - Contains the source code for the React application.
  - `components/` - Reusable components for the dashboard.
  - `pages/` - React components corresponding to different pages/routes.
  - `styles/` - CSS files and stylesheets for the application.
  - `utils/` - Utility functions and helper scripts.
- `public/` - Public assets, such as the `index.html` file and images.
- `.env` - Environment variables configuration file.
- `package.json` - Project metadata and dependencies.
- `README.md` - This documentation file.

## Troubleshooting

### Common Issues

1. **API Connection Errors:**

   Ensure that the `REACT_APP_API_URL` in your `.env` file is correctly set and that your API server is running.

2. **Build Failures:**

   If you encounter build issues, try clearing the cache and reinstalling dependencies:

   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
