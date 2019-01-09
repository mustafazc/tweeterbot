const { createLogger, format, transports } = require('winston')

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({ // TODO Comment this to show no logs in console
      level: 'debug',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    })
  ]
})

module.exports = logger
