# DEV MANUAL

Hello Dev! Thanks for deploying this application! In here I will describe how to deploy this application. 

Navigate back to readme [here](../README.md).

## Assumptions

This document will assume that a *nix system will be deploying this frontend and backend, and that the npm package is compile-able and accessible. 

## Running Application

### Frontend

To run this application, navigate to the frontend directory and run `npm i` to install dependencies for the frontend then run `npm run start`.

### Backend

To run the backend, navigate to the backend directory, run `npm i`, then run `node server.js` to start listening.

## API Endpoints

| Endpoint | Function |
|-|-|
| /healthcheck | Will return 'healthy if backend is healthy' |
| /options | Will return a list of all the available endpoints of CVE application data |
| /gitlab | Returns all gitlab cves |
| /github | Returns all gitlab cves |
| /homeassistant | Returns all gitlab cves |
| /kubernetes | Returns all gitlab cves |

## Known Bugs

- There are no node test scripts attached to this project
- No env file for the frontend and backend
- Frontend is static on port 3001, backend is port 3000

## Roadmap

Next steps for this project is to 
- Add env files to make the application more system agnostic
- Containerize front/backend
- Write tests
- Write github actions to automate tests and containerization
- Update spotify frame to use api key for better playback experience

