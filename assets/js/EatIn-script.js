function searchFood() {
// Define variable that stores the user input value
var search = $("#search-input").val();
console.log(search);
// var searchInputValue = searchInput.value;
// console.log(searchInputValue); //this doesn't log!

// Make API call:
// Define variable to store Spoontacular API key -- not needed, using RAPID API key
var ApiKey = "782ee6e2b6844a61ab8eb474f3479b22"; 

// Rapid API key
var getRecipeUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" + search + "&cuisine=" + search;
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '182f8447bfmshf7dd1bd7040250ep1d8722jsnde7531908109',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};
console.log(getRecipeUrl);

 fetch (getRecipeUrl, options)
.then (function (response) {
	return response.json();
})
.then (function (recipeData) {
	console.log(recipeData);
    var foodArray = recipeData.results;
	console.log(foodArray);
});

// var recipeid = foodArray.id;


// 1.create element
// 2.add content
// 3.append

}
// Call searchFood function
searchFood();
// Add event listener for search button to trigger getRecipe function
document.getElementById("button-addon2").addEventListener("click", searchFood);


//On click recipe button -> getRecipe function - Api call by recipe id to get recipe instructions and ingredient list (each ingredient has the amount and unit parameters - can use inside a unit converter -> look it up!)
// excludeIngredients parameter in API - can trigger when 6mo/1yo/2yo buttons are pressed to exclude certain ingredients from recipes