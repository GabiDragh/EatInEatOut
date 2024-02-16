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
		for(var i = 0; i < 3; i ++) {
		var recipeId = foodArray[i].id; //use to make the API call for the recipe instructions. 
		var recipeImgUrl = foodArray[i].image;
		var recipeTitle = foodArray[i].title;

		// 1.Create element
		var colDiv = $("<div>");
		var cardDiv = $("<div>");
		var cardBodyDiv = $("<div>");
        var recipeTitleDiv = $("<h5>");
		var recipeImageDiv = $("<img>");
		var linkDiv = $("<a>");

		// 2.Create content
		colDiv.addClass("col-sm-4");
		cardDiv.addClass("card text-center h-100");
        cardBodyDiv.addClass("recipe-card-body d-flex flex-column");
		recipeTitleDiv.addClass("recipe-card-title text-center flex-grow-1").text(recipeTitle);
		recipeImageDiv.attr("src", recipeImgUrl);
		linkDiv.addClass("btn btn-success mt-auto btn-block stretched-link").text("I want to cook this!"); //stick button at the bottom of card!
		linkDiv.attr("href", "#");

		// 3.Append to html
		// $(recipeImageDiv).append(recipeImgUrl);
		// $(recipeTitleDiv).append(recipeTitle);
		// $(linkDiv).append(recipeId);

		cardBodyDiv.append(recipeTitleDiv, linkDiv)
		cardDiv.append(recipeImageDiv, cardBodyDiv);
        console.log(cardDiv);
	    colDiv.append(cardDiv);
        $("#food-search-result").append(colDiv);
    }
 });
// Define variables to store needed recipe array parameters
}

// Call searchFood function

// Add event listener for search button to trigger getRecipe function
document.getElementById("button-addon2").addEventListener("click", function(event) {
	event.preventDefault();
	$(".card-img-top").empty();
	$(".recipe-card-title").empty();
	$("#food-search-result").empty();
	searchFood();
});




//On click recipe button -> getRecipe function - Api call by recipe id to get recipe instructions and ingredient list (each ingredient has the amount and unit parameters - can use inside a unit converter -> look it up!)
// excludeIngredients parameter in API - can trigger when 6mo/1yo/2yo buttons are pressed to exclude certain ingredients from recipes