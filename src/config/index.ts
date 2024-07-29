import 'dotenv/config'

export const dev = {
  app: {
    port: Number(process.env.PORT),
    defaultImagePath: process.env.DEFAULT_IMAGE_PATH,
    jwtUserKey: process.env.JWT_SECRET,
    smtpUsername: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
    frontendport: process.env.FRONTEND_PORT,
  }, 
  db: {
    url: process.env.MONGODB_URL,
  },
}
