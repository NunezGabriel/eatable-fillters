import apiFetch from "./api-fetch";

export async function createOrder(order) {
  return await apiFetch("orders", { body: order });
}

export async function getOrders() {
  return await apiFetch("orders");
}
