const express = require('express')

const WebhookController = require('../controllers/WebhookController')
const router = express.Router()

router.get('/health', (req, res) => res.status(200).send('OK'))
router.get('/webhook', WebhookController.tweet)

module.exports = router
