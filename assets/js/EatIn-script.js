

var formInput = document.getElementsByClassName("form-control").value;
// API call

// Spoontacular API key
var ApiKey = "782ee6e2b6844a61ab8eb474f3479b22"; 

var getRecipeUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" + formInput + "&cuisine=" + formInput;
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
	console.log(JSON.stringify(response.json));
	return response.json();
})
.then (function (recipeData) {
	console.log(recipeData);
});
// try {
// 	const response = await fetch(getRecipeUrl, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// event listener for search button to trigger getRecipe function
//getRecipe function to include name, 
// excludeIngredients parameter in API - can trigger when 6mo/1yo/2yo buttons are pressed to exclude certain ingredients from recipes