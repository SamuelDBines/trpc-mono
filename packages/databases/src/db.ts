import fs from "fs";
import path from "path";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load database credentials from .env

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
};

export const loadSQL = (filename: string): string => {
  return fs.readFileSync(path.join(__dirname, "../../sql", filename), "utf-8");
};


export default pool;
