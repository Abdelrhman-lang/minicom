import { defineRelations, sql } from "drizzle-orm";
import {
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const categoriesTable = pgTable("categories", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar("category_name").notNull(),
  slug: varchar("slug").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const subCategoriesTable = pgTable("sub_categories", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),

  name: varchar("sub_category_name").notNull(),
  slug: varchar("slug").notNull().unique(),
  categoryId: text("category_id")
    .notNull()
    .references(() => categoriesTable.id),
});

export const productsTable = pgTable("products", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: varchar("product_name").notNull(),
  price: numeric("product_price", { precision: 10, scale: 2 }).notNull(),
  subCategoryId: text("sub_category_id")
    .notNull()
    .references(() => subCategoriesTable.id),
});

// RELATIONS
export const dbRelations = defineRelations(
  { categoriesTable, subCategoriesTable, productsTable },
  (r) => ({
    categoriesTable: {
      subCategories: r.many.subCategoriesTable(),
    },
    subCategoriesTable: {
      category: r.one.categoriesTable({
        from: r.subCategoriesTable.categoryId,
        to: r.categoriesTable.id,
      }),
      products: r.many.productsTable(),
    },
    productsTable: {
      subCategory: r.one.subCategoriesTable({
        from: r.productsTable.subCategoryId,
        to: r.subCategoriesTable.id,
      }),
    },
  }),
);
