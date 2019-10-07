# LAB - 

## Project Name

### Author: Student/Group Name

### Links and Resources
* [submission PR](https://github.com/alexspencer-401-advanced-javascript/mongo-aggregation/pull/1)
* [travis](https://travis-ci.com/alexspencer-401-advanced-javascript/mongo-aggregation/builds/130827270)

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
- scripts: 
    - "lint": "eslint .",
    - "pretest": "npm run lint",
    - "jest": "jest --runInBand --verbose",
    - "test": "npm run jest",
    - "test:coverage": "npm run test -- --coverage",
    - "test:watch": "npm run jest -- --watchAll",
    - "test:verbose": "npm run test -- --verbose",
    - "start": "node server.js",
    - "start:watch": "nodemon server.js"  
