let products = document.getElementById("products");
let loading = document.getElementById("loading");
let error = document.getElementById("error");

async function getProducts() {

    try {

        loading.innerText = "Loading products...";

        let response = await fetch("https://dummyjson.com/products?limit=9");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        let data = await response.json();

        loading.style.display = "none";

        data.products.forEach(function(product) {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img src="${product.thumbnail}">
                <h2>${product.title}</h2>
                <p class="price">$${product.price}</p>
            `;

            products.appendChild(card);

        });

    } catch (err) {

        loading.style.display = "none";

        error.innerText = "Something went wrong. Please try again.";

        console.log(err);

    }
}

getProducts();