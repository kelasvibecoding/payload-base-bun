import pino from 'pino'

/**
 * Pino Logger instance
 * 
 * Features:
 * - Human-readable output in development (pino-pretty)
 * - Structured JSON output in production
 * - Configurable log level via LOG_LEVEL env var
 */
export const loggerOptions = {
  level: process.env.LOG_LEVEL || 'info',
  transport:
    process.env.NODE_ENV === 'development'
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            ignore: 'pid,hostname',
            translateTime: 'SYS:standard',
          },
        }
      : undefined,
}

const logger = pino(loggerOptions)

export default logger
