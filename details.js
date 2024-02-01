async function getDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const data = await response.data;
  console.log(data);
  const { title, brand, category, description, images, price } = data;

  document.querySelector(".title").textContent = title;

  const result = images
    .map(function (ele) {
      return `
      <img src="${ele}" alt="Product Image"> 
      `;
    })
    .join("");
  document.querySelector(".phone").innerHTML = result;
  document.querySelector(".brand").textContent = brand;
  document.querySelector(".category").textContent = category;
  document.querySelector(".description").textContent = description;
  document.querySelector(".price").textContent = price;
}

getDetails();
