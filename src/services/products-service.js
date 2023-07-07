import apiFetch from "./api-fetch";

export async function getproducts() {
  return await apiFetch("products");
}