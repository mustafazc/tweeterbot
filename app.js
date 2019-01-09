require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const Twit = require('twit')
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const app = express()

const Router = require('./routes/index.js')
const logger = require('./services/LoggingService')

app.use('/', Router)
app.use(morgan((tokens, req, res) => {
  logger.verbose(`${chalk.blue(tokens.method(req, res))} ${chalk.white.dim(tokens.url(req, res))} ${chalk.green(tokens.status(req, res))} ${chalk.green(`${tokens['response-time'](req, res)}ms`)} ${chalk.cyan(tokens.date(req, res))}`)
}))

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))

const tweetStream = T.stream('status/filter', {track: ['nodejs', 'javascript']})

tweetStream.on('tweet', (tweet) => {
  console.log(`Tweet recieved with hashtags: ${tweet}`)
})
