import fs from "fs";
import path from "path";
import { query } from "./db";

const migrationsDir = path.join(__dirname, "../../sql", "migrations");

// Get list of migration files in order
const getMigrationFiles = (): string[] => {
  return fs.readdirSync(migrationsDir)
    .filter(file => file.endsWith(".sql"))
    .sort(); // Ensure files are executed in order
};

// Run migrations one by one
const runMigrations = async () => {
  const migrationFiles = getMigrationFiles();

  for (const file of migrationFiles) {
    const filePath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(filePath, "utf-8");

    console.log(`Running migration: ${file}`);
    await query(sql);
  }

  console.log("✅ All migrations applied successfully.");
};

runMigrations().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
