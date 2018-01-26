# Node.js Api Boilerplate with JWT authenticatiom mechanism

Run
```
yarn
yarn dev
```
Go to localhost:3000

POST **/login** to get the Bearer token

Add the Authorization header to your request in this format 
```
Authorization: Bearer <token>
```

GET **/api/protected** to see your encoded data
