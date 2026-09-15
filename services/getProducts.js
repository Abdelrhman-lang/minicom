"use server";

import { db } from "@/config/db/db";

export async function getProducts() {
  try {
    const products = await db.query.productsTable.findMany({
      with: {
        subCategory: true,
      },
    });

    return { success: true, products };
  } catch (error) {
    console.error("GET_PRODUCTS_ERROR:", error);
    return { success: false, error: "Failed to get products" };
  }
}
