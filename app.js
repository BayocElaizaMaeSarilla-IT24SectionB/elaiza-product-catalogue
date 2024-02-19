fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListElement = document.getElementById("productlist");
    data.forEach(product => {

      const productItem = document.createElement("div");
      productItem.innerHTML = `
        <h2> ${product.product_name} </h2>
        <p>Product Description: ${product.product_description}</p>
        <p>Price: $${product.product_price}</p>
        <p>Date Added: ${product.product_dateAdded}</p>
        <img src="${product.product_image}" alt="${product.product_name} Image">
        <div class="card" style="width: 18rem;">
          <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
        </div>
        <hr>
      `;
      productListElement.appendChild(productItem);
      const addToCartButton = productItem.querySelector('.add-to-cart-btn');
      addToCartButton.addEventListener('click', () => {
        addToCartButton.textContent = 'Done';
      });
    });
  })
  .catch(error => console.error('Error fetching data:', error));