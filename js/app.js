const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createCategories(window) {
  var navMenu = document.querySelector("#menu");

  window.categories.forEach((category) => {
    var newButton = document.createElement("button");
    newButton.textContent = category.name;

    newButton.addEventListener("click", function () {
      displayProducts(category);
    });

    navMenu.appendChild(newButton);
  });
}

function displayProducts(category) {
  var selectedCat = document.querySelector("#selected-category");
  selectedCat.textContent = `${category.name}`;

  var catProducts = document.querySelector("#category-products");
  catProducts.innerHTML = "";

  var filterdProd = window.products.filter(
    (product) => product.categories.includes(category.id) && !product.discontinued
  );

  filterdProd.forEach((product) => {
    var newRow = document.createElement("tr");
    newRow.addEventListener("click", function () {
      console.log({ product });
    });

    var newTitle = document.createElement("td");
    newTitle.textContent = product.title;

    var newDesc = document.createElement("td");
    newDesc.textContent = product.description;

    var newPrice = document.createElement("td");
    newPrice.textContent = product.code;

    newRow.appendChild(newTitle);
    newRow.appendChild(newDesc);
    newRow.appendChild(newPrice);
    catProducts.appendChild(newRow);
  });
}

function toggleHourlyRateInput() {
  var hiringRadio = document.querySelector("#hiringRadio");
  var hourlyRateInput = document.querySelector(".hourlyRateInput");
  
  if (hiringRadio.checked) {
      hourlyRateInput.style.display = 'block';
  } else {
      hourlyRateInput.style.display = 'none';
  }
}

function goToContact() {
  var contactButton = document.querySelector(".contact");
  var contactForm = document.querySelector(".contact-form")

  contactButton.addEventListener('click', function () {
    contactForm.scrollIntoView({behavior: 'smooth'});
  });
}


document.addEventListener("load", goToContact());
document.addEventListener("load", createCategories(window));
document.addEventListener("load", displayProducts(window.categories[0]));
