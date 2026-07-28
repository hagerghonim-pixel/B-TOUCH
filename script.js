const products = [

{
    name: "MTK",
    image: "images/MTK.png",
    description: "9-inch • 2GB RAM • 32GB Storage",
    link: "MTK.html"
},


{
    name: "T133 Android Screen",
    image: "images/T133.png",
    description: "9-inch  • 4GB RAM • 64GB Storage",
    link: "T133.html"
},

{
    name: "Diamond P13 Android Screen",
    image: "images/p13.png",
    description: "10.1-inch • 2GB RAM • 64GB Storage",
    link: "p13.html"
},

{
    name: "Diamond P13  Android Screen",
    image: "images/p13..png",
    description: "10.8-inch • 2GB RAM • 32GB Storage",
    link: "p13..html"
},

{
    name: "Diamond P13  Android Screen",
    image: "images/p13...png",
    description: "10.8-inch • 2GB RAM • 32GB Storage",
    link: "p13...html"
},

{
    name: "Diamond T133  Android Screen",
    image: "images/D T133.png",
    description: "10.1-inch • 4 GB RAM •64 GB Storage",
    link: "D T133.html "
},

{
    name: "Diamond T6  Android Screen",
    image: "images/D T6.png",
    description: "10.1-inch • 4GB RAM • 64GB Storage",
    link: "D T6.html"
},

{
    name: "T133 Android Screen",
    image: "images/T133..png",
    description: "12.3-inch • 4GB RAM • 64GB Storage",
    link: "T133..html"
},

{
    name: "T133 Android Screen",
    image: "images/T133...png",
    description: "13-inch • 4GB RAM • 64GB Storage",
    link: "T133...html"
}

];

const productsContainer = document.getElementById("products-grid");

products.forEach(product => {

productsContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.description}</p>

<a href="${product.link}" class="product-btn">View Details</a>

</div>

</div>

`;

});