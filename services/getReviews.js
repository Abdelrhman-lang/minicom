"use server";

import { db } from "@/config/db/db";
import { reviewsTable } from "@/config/db/schema";
import { desc } from "drizzle-orm";

export async function getReviews() {
  try {
    const reviews = await db
      .select()
      .from(reviewsTable)
      .orderBy(desc(reviewsTable.createdAt));

    return { success: true, reviews };
  } catch (error) {
    console.error("GET_REVIEWS_ERROR:", error);
    return { success: false, error: "Failed to get reviews" };
  }
}
