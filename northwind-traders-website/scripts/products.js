document.addEventListener("DOMContentLoaded", () => {
    populateCategories();

})

function populateCategories() {
    let apiCategoriesUrl = "http://localhost:3000/categories";
    const selectCategory = document.getElementById("category-select");

    fetch(apiCategoriesUrl)
        .then(response => response.json())
        .then(data => { 
           data.forEach(item => {
            const optionElement = document.createElement("option");
            optionElement.innerText = item.name;
            selectCategory.appendChild(optionElement);
           })
        })
}



