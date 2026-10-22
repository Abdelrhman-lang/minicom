"use server";

import { db } from "@/config/db/db";
import { cartItemsTable, cartsTable } from "@/config/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq, gt, sql } from "drizzle-orm";

// =============================== ADD TO CART ================================================
export async function addToCart(productId, quantity = 1) {
  const { userId } = await auth();

  if (!userId) return { success: false, error: "Unauthorized" };

  if (!productId || !Number.isInteger(quantity) || quantity < 1) {
    return { success: false, error: "Invaild data" };
  }

  try {
    // INITIAL CART FOR THE USRE IF DOESNOT HAVE ONE
    await db.insert(cartsTable).values({ userId }).onConflictDoNothing();

    // GET CART IF Exist
    const [cart] = await db
      .select()
      .from(cartsTable)
      .where(eq(cartsTable.userId, userId));

    // Add Product TO CART OR INCRESSE THE QUANTITY
    await db
      .insert(cartItemsTable)
      .values({
        cartId: cart.id,
        productId: productId,
        quantity: quantity,
      })
      .onConflictDoUpdate({
        target: [cartItemsTable.cartId, cartItemsTable.productId],
        set: { quantity: sql`${cartItemsTable.quantity} + ${quantity}` },
      });

    return { success: true };
  } catch (error) {
    console.error("ADD_TO_CART_ERROR:", error);
    return { success: false, error: "Failed to add to cart" };
  }
}

// ================================= GET CART =================================
export async function getCart() {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  try {
    const cart = await db.query.cartsTable.findFirst({
      where: { userId },
      with: {
        items: {
          with: { product: true },
        },
      },
    });

    return { success: true, items: cart?.items ?? [] };
  } catch (error) {
    console.error("GET_CART_ERROR:", error);
    return { success: false, error: "Failed to get cart" };
  }
}

// ================================= DELETE ITEM FROM CARD ===============================
export async function deleteItemFromCart(itemId) {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };
  if (!itemId) return { success: false, error: "Invalid data" };

  try {
    const [cart] = await db
      .select()
      .from(cartsTable)
      .where(eq(cartsTable.userId, userId));

    if (!cart) return { success: false, error: "Cart not found" };

    await db
      .delete(cartItemsTable)
      .where(
        and(eq(cartItemsTable.id, itemId), eq(cartItemsTable.cartId, cart.id)),
      );

    return { success: true };
  } catch (error) {
    console.error("REMOVE_FROM_CART_ERROR:", error);
    return { success: false, error: "Failed to remove item" };
  }
}

// ====================================== INCREMENT QUANTITY ====================================================
export async function incrementQuantity(itemId) {
  const { userId } = await auth();

  if (!userId) return { success: false, error: "Unauthorized" };
  if (!itemId) return { success: false, error: "Invalid data" };

  try {
    const [cart] = await db
      .select()
      .from(cartsTable)
      .where(eq(cartsTable.userId, userId));

    if (!cart) return { success: false, error: "Cart not found" };

    await db
      .update(cartItemsTable)
      .set({ quantity: sql`${cartItemsTable.quantity} + 1` })
      .where(
        and(eq(cartItemsTable.id, itemId), eq(cartItemsTable.cartId, cart.id)),
      );

    return { success: true };
  } catch (error) {
    console.error("INCREMENT_QUANTITY_ERROR:", error);
    return { success: false, error: "Failed to increase quantity" };
  }
}

// =================================================== DECREMENT QUANTITY ==============================================
export async function decrementQuantity(itemId) {
  const { userId } = await auth();

  if (!userId) return { success: false, error: "Unauthorized" };
  if (!itemId) return { success: false, error: "invalid data" };

  try {
    const [cart] = await db
      .select()
      .from(cartsTable)
      .where(eq(cartsTable.userId, userId));

    if (!cart) return { success: false, error: "Cart not found" };

    await db
      .update(cartItemsTable)
      .set({ quantity: sql`${cartItemsTable.quantity} - 1` })
      .where(
        and(
          eq(cartItemsTable.id, itemId),
          eq(cartItemsTable.cartId, cart.id),
          gt(cartItemsTable.quantity, 1),
        ),
      );

    return { success: true };
  } catch (error) {
    console.error("DECREMENT_QUANTITY_ERROR:", error);
    return { success: false, error: "Failed to decrease quantity" };
  }
}
