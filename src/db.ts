import { Pool } from "pg"

export const dbPool = new Pool({
  host: "localhost",
  port: 5432,
  database: "COMP3005A3Q1",
  user: "postgres",
  password: "gkaurB2004!",
});
