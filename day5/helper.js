export function createProduct(product) {

    let div = document.createElement("div");

    div.className = "card";

    div.innerHTML = `
        <img src="${product.thumbnail}">

        <h2>${product.title}</h2>

        <p class="price">$${product.price}</p>

        <p class="category">${product.category}</p>
    `;

    return div;
}