# PetClinicMock
A web application that simulates a pet clinic. 

## Backend Server
```shell
    cd backend/src
    npm install
    node server.js
```

## Frontend Server
```shell
    cd frontend/petclinicmock_frontend
    npm ci
    npm run serve
```
AWS Amplify Server Build `amplify.yml`:
```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd frontend/petclinicmock_frontend
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: frontend/petclinicmock_frontend/dist
    files:
        - '**/*'
  cache:
    paths:
        - 'frontend/petclinicmock_frontend/node_modules/**/*'
```