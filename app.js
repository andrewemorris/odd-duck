// global variables
let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(2)");

let clicks = 0;
let maxClicksAllowed = 9;


// functional logic
class Product {
  constructor(name, src) {
    console.log("Product: " + name);
    this.displayCount = 0;
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
    Product.allProductsArray.push(this);
    console.log("Product: " + name + " index: " + (Product.allProductsArray.length - 1));
  }

  increment() {
    this.displayCount++;
  }
}
/*
function Product(name, src) {
  console.log("Product: " + name);
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
  Product.allProductsArray.push(this);
}*/

Product.allProductsArray = [];

function getRandomNumber() {
  console.log("getRandomNumber lenght: " + Product.allProductsArray.length);
  return Math.floor(Math.random() * Product.allProductsArray.length);
}

function renderProducts() {
  // call the getRandomNumber
  let product1 = getRandomNumber();
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();

  while (product1 === product2 || product2 === product3 || product1 === product3) {
    product2 = getRandomNumber();
    product3 = getRandomNumber();
  }
  for (let i = 0; i < Product.allProductsArray.length; i++) {
    console.log("product index: " + i);
    console.log("name: " + Product.allProductsArray[i].name);
    console.log("src: " + Product.allProductsArray[i].src);
  }


  console.log("product1: Index = " + product1 + "  " + Product.allProductsArray[product1].name);
  console.log("product2: Index = " + product2 + "  " + Product.allProductsArray[product2].name);
  console.log("product3: Index = " + product3 + "  " + Product.allProductsArray[product3], name);
  console.log("allproductsarry lenght = " + Product.allProductsArray.length);
  image1.src = Product.allProductsArray[product1].src;
  image2.src = Product.allProductsArray[product2].src;
  image3.src = Product.allProductsArray[product3].src;
  image1.alt = Product.allProductsArray[product1].name;
  image2.alt = Product.allProductsArray[product2].name;
  image3.alt = Product.allProductsArray[product3].name;
  Product.allProductsArray[product1].views++;
  Product.allProductsArray[product2].views++;
  Product.allProductsArray[product3].views++;
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("Please click on an image ");
  }
  clicks++;
  let clickProduct = event.target.alt;
  for (let i = 0; i < Product.allProductsArray.length; i++) {
    if (clickProduct === Product.allProductsArray[i].name) {
      Product.allProductsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProductClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener("click", renderResults);
    resultButton.className = "clicks-allowed";
    productContainer.className = "no-voting";
  } else {
    renderProducts();
  }
}

function renderResults() {
  console.log("renderResult");
  let ul = document.querySelector("ul");
  for (let i = 0; i < Product.allProductsArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${Product.allProductsArray[i].name} had ${Product.allProductsArray[i].views} view and was clicked ${Product.allProductsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}


// executable code
new Product("prod1", "https://place-hold.it/100x50/1a8072/ffdead&text=prod1&bold&italic&fontsize=16");
new Product("prod2", "https://place-hold.it/100x50/2a8072/ffdead&text=prod2&bold&italic&fontsize=16");
new Product("prod3", "https://place-hold.it/100x50/3a8072/ffdead&text=prod3&bold&italic&fontsize=16");
new Product("prod4", "https://place-hold.it/100x50/4a8072/ffdead&text=prod4&bold&italic&fontsize=16");
new Product("prod5", "https://place-hold.it/100x50/5a8072/ffdead&text=prod5&bold&italic&fontsize=16");
new Product("prod6", "https://place-hold.it/100x50/6a8072/ffdead&text=prod6&bold&italic&fontsize=16");
new Product("prod7", "https://place-hold.it/100x50/7a8072/ffdead&text=prod3&bold&italic&fontsize=16");
new Product("prod8", "https://place-hold.it/100x50/8a8072/ffdead&text=prod4&bold&italic&fontsize=16");
new Product("prod9", "https://place-hold.it/100x50/9a8072/ffdead&text=prod5&bold&italic&fontsize=16");

renderProducts();

productContainer.addEventListener("click", handleProductClick);