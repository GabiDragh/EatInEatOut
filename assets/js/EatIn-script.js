// Define variable that stores the user input value
var searchInput = $("#foodSearchInput").val();
console.log(searchInput);
// Make API call:
// Define variable to store Spoontacular API key -- not needed, using RAPID API key
var ApiKey = "782ee6e2b6844a61ab8eb474f3479b22"; 


var getRecipeUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" + searchInput;
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '182f8447bfmshf7dd1bd7040250ep1d8722jsnde7531908109',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};
console.log(getRecipeUrl);

function getFoodInfo() {
 fetch (getRecipeUrl, options)
.then (function (response) {
	return response.json();
})
.then (function (recipeData) {
	console.log(recipeData);
    var foodArray = recipeData.results;
	console.log(foodArray);
});
}

// event listener for search button to trigger getRecipe function
document.getElementById("button-addon2").addEventListener("click", getFoodInfo);

// try {
// 	const response = await fetch(getRecipeUrl, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


//getRecipe function to include name, 
// excludeIngredients parameter in API - can trigger when 6mo/1yo/2yo buttons are pressed to exclude certain ingredients from recipes