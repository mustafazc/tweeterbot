# tweeterbot
A tweet autoresponder that listens for a trigger hashtag and does a response action.

## Requirements
Node.js
Twitter consumer key and secret 
Twitter access token and secret
MongoDb

## Getting Started
- Add your credentials to the .env file (refer to .env.sample).
- Edit the hashtags to listen for in app.js
- run npm start

### Todo 
- Create a panel to change app configurations (trigger hashtags, response actions, etc.)
- Create a dashboard to view analytics 
- Add logic for responding via actions (like, retweet, reply)
- Add randomized responses based on inputs or location
- Gather, aggregate and visualize interaction data
