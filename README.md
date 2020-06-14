# Template for express.js development

## 1. Project Structure

### Current Implementation

```
src
│   app.js          # App entry point
└───api             # Express route controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff
└───jobs            # CRON Jobs definitions
└───loaders         # Split the startup process into modules (TBA)
└───models          # Database models/DAO
└───services        # All the business logic is here
└───subscribers     # Event handlers for async task
```

## 2. Notes
1. Supports ES6 Modules due to usage of Babel Modules
2. Prettier and Eslint Integration not completed
3. No Database Implementation is included in this template