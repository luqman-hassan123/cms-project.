const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors } = format;
const fs = require('fs');
const path = require('path');

// Ensure logs directory exists
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
// Define custom log format
const logFormat = printf(({ level, message, timestamp, stack, filePath, methodName }) => {
    const fileInfo = filePath && methodName ? ` [${filePath} -> ${methodName}]` : '';
    return `${timestamp} [${level.toUpperCase()}]: ${message}${fileInfo} ${stack || ''}`;
  });
// Create the logger
const logger = createLogger({
  level: 'info', // Default log level
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), // Include stack traces
    logFormat
  ),
  transports: [
    new transports.File({ filename: path.join(logDir, 'combined.log') }),
    new transports.File({ filename: path.join(logDir, 'error.log'), level: 'error' }),
  ],
});
// Add console transport for non-production environments
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        logFormat
      ),
    })
  );
}
// Utility functions for easier logging
const logInfo = (message, { filePath = 'Unknown file', methodName = 'Unknown method', ...meta } = {}) => {
    logger.info(message, { filePath, methodName, ...meta });
  };
  const logError = (message, { filePath = 'Unknown file', methodName = 'Unknown method', ...meta } = {}) => {
    logger.error(message, { filePath, methodName, ...meta });
  };
module.exports = {
  logger,
  logInfo,
  logError,
};
