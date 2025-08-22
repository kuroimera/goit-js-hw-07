const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((item) => {
  const title = item.querySelector(".first-task-title").textContent;
  console.log("Category:", title);

  const cardCategories = item.querySelectorAll(".card-categorie").length;
  console.log("Elements:", cardCategories);
});
