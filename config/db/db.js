import { drizzle } from "drizzle-orm/neon-http"; // أو حسب الـ driver بتاعك
import { dbRelations } from "./schema";

export const db = drizzle(process.env.DATABASE_URL, { relations: dbRelations });
