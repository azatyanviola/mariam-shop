// let cartCount = 0;

// function addToCart(productName) {
//   cartCount++;
//   document.getElementById('cart-count').textContent = cartCount;
//   alert(`${productName} ավելացվեց զամբյուղին։`);
// }

// function filterCategory(category) {
//   const products = document.querySelectorAll('.product');
//   products.forEach(p => {
//     if (category === 'all' || p.dataset.category.includes(category)) {
//       p.style.display = 'block';
//     } else {
//       p.style.display = 'none';
//     }
//   });
// }

// document.getElementById('searchInput').addEventListener('input', function () {
//   const searchTerm = this.value.toLowerCase();
//   const products = document.querySelectorAll('.product');
//   products.forEach(product => {
//     const title = product.querySelector('h3').textContent.toLowerCase();
//     product.style.display = title.includes(searchTerm) ? 'block' : 'none';
//   });
// });


// function goToCart() {
//   window.location.href = 'cart.html';
// }


// function addToCart(name, price) {
//   console.log("Ապրանք:", name, "Գին:", price); // debug
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   cart.push({ name, price });
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// document.querySelectorAll('.add-to-cart').forEach(button => {
//   button.addEventListener('click', () => {
//     const name = button.getAttribute('data-name');
//     const price = parseInt(button.getAttribute('data-price'));
//     addToCart(name, price);
//   });
// });

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount(); // Թարմացնում ենք զամբյուղի քանակը
  alert(`${name} ավելացվեց զամբյուղին։`);
}

function filterCategory(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(p => {
    if (category === 'all' || p.dataset.category.includes(category)) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
}

document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
});

function goToCart() {
  window.location.href = 'cart.html';
}

// Կցում ենք add-to-cart կոճակներին
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));
    addToCart(name, price);
  });
});

// Էջը բեռնելուց թարմացնում ենք զամբյուղի քանակը
updateCartCount();

