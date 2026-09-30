import { getProducts } from "./service.js";
import { createProduct } from "./helper.js";

let productsContainer = document.getElementById("products");
let loading = document.getElementById("loading");
let error = document.getElementById("error");

let search = document.getElementById("search");
let category = document.getElementById("category");

let allProducts = [];

async function loadProducts() {

    try {

        loading.innerText = "Loading products...";

        allProducts = await getProducts();

        loading.innerText = "";

        displayProducts();

    } catch (err) {

        loading.innerText = "";
        error.innerText = "Something went wrong.";

        console.log(err);
    }
}


function displayProducts() {

    productsContainer.innerHTML = "";

    let searchText = search.value.toLowerCase();
    let selectedCategory = category.value;

    let filteredProducts = allProducts.filter(function(product) {

        let matchesSearch =
            product.title.toLowerCase().includes(searchText);

        let matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });


    filteredProducts.forEach(function(product) {

        let productElement = createProduct(product);

        productsContainer.appendChild(productElement);

    });
}


search.addEventListener("input", function() {
    displayProducts();
});


category.addEventListener("change", function() {
    displayProducts();
});


loadProducts();