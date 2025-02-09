
import { query, loadSQL } from "../db";

export const getUsers = async () => {
  const sql = loadSQL("get-users.sql");
  return query(sql);
};

export const getUserById = async (id: number) => {
  const sql = loadSQL("get-user-by-id.sql");
  return query(sql, [id]);
};
