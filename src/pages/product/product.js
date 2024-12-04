async function renderProduct() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/products/records"
  );

  const data = await response.json();

  const tag = /* html */ `
    <div class="container">
      <ul>
        ${data.items
          .map(
            (item) => `
          <li>${item.brand}</li>
          
          `
          )
          .join("")}
      </ul>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", tag);
}

renderProduct();
