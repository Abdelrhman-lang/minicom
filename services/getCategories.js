"use server";
import { db } from "@/config/db/db";

export async function getCategories() {
  try {
    const categories = await db.query.categoriesTable.findMany({
      with: {
        subCategories: true,
      },
    });
    return { success: true, categories };
  } catch (error) {
    console.error("GET_CATEGORIES_ERROR:", error);
    return { success: false, error: "Failed to get categories" };
  }
}
