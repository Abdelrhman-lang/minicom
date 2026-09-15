import { defineRelations, sql } from "drizzle-orm";
import {
  integer,
  numeric,
  pgTable,
  primaryKey,
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
  slug: varchar("slug").notNull(),
  image: varchar("sub_categorie_image"),
});

export const productsTable = pgTable("products", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: varchar("product_name").notNull(),
  price: numeric("product_price", { precision: 10, scale: 2 }).notNull(),
  image: varchar("product_image"),
  sku: varchar("product_sku"),
  subCategoryId: text("sub_category_id")
    .notNull()
    .references(() => subCategoriesTable.id),
});

// ============ JUNCTION TABLE (many-to-many) ============
export const categoriesToSubCategoriesTable = pgTable(
  "categories_to_sub_categories",
  {
    categoryId: text("category_id")
      .notNull()
      .references(() => categoriesTable.id, { onDelete: "cascade" }),
    subCategoryId: text("sub_category_id")
      .notNull()
      .references(() => subCategoriesTable.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.categoryId, t.subCategoryId] })],
);

// ============ RELATIONS ============
export const dbRelations = defineRelations(
  {
    categoriesTable,
    subCategoriesTable,
    productsTable,
    categoriesToSubCategoriesTable,
  },
  (r) => ({
    categoriesTable: {
      subCategories: r.many.subCategoriesTable({
        from: r.categoriesTable.id.through(
          r.categoriesToSubCategoriesTable.categoryId,
        ),
        to: r.subCategoriesTable.id.through(
          r.categoriesToSubCategoriesTable.subCategoryId,
        ),
      }),
    },
    subCategoriesTable: {
      categories: r.many.categoriesTable({
        from: r.subCategoriesTable.id.through(
          r.categoriesToSubCategoriesTable.subCategoryId,
        ),
        to: r.categoriesTable.id.through(
          r.categoriesToSubCategoriesTable.categoryId,
        ),
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
