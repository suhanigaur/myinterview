/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:BgfXY7ya1Tor@ep-aged-butterfly-a5vg96le.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };