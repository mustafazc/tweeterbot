const ProcessTweetService = require('../services/ProcessTweetService')

module.exports.tweet = (tweet) => {
  console.log(`Tweet recieved: ${tweet}`)
  if (!tweet) return Promise.resolve()

  return ProcessTweetService.incomingTweet(tweet)
}
