import { API_URL } from "./const.js";

export async function getProducts() {

    let response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    let data = await response.json();

    return data.products;
}