async function getData() {
  const response = await axios.get("https://dummyjson.com/products");
  const data = await response.data;
  console.log(data);
  const products = data.products;

  const result = products
    .map(function (product) {
      return `
      <div>
          <h2>${product.title}</h2>
          <img src="${product.images[0]}"/>
          <a href="details.html?id=${product.id}">details</a>
      </div>
      `;
    })
    .join("");

  document.querySelector(".products .row").innerHTML = result;
}

getData();
