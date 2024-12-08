/** @type{ import {import("drizzle-kit").Config}} */
export default{
    schema:"./app/utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:inAyBHx7hTr6@ep-shy-mountain-a5gebszh.us-east-2.aws.neon.tech/neondb?sslmode=require'
    }
}
