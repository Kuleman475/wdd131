import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));


function recipeTemplate(recipe) {
	return `<figure class="recipe">
	  <img src="${recipe.image}" alt="image of ${recipe.name}" />
	  <figcaption>
		<ul class="recipe__tags">
		  ${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}
		</ul>
		<h2><a href="${recipe.url}">${recipe.name}</a></h2>
		<p class="recipe__ratings">
		  <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
			${'⭐'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5 - Math.floor(recipe.rating))}
		  </span>
		</p>
		<p class="recipe__description">
		  ${recipe.description}
		</p>
	  </figcaption>
	</figure>`;
  }
  


function renderRecipes(recipes) {
	const recipeList = document.querySelector('.recipeCard');
	console.log(recipeList)
	recipes.forEach(recipe => {
	  // Generate the HTML for each recipe
	  const recipeHtml = recipeTemplate(recipe);
	  
	  // Insert the generated HTML into the page
	  const recipeElement = document.createElement('div');
	  recipeElement.classList.add('recipe-container');
	  recipeElement.innerHTML = recipeHtml;
	  recipeList.appendChild(recipeElement);
	});
  }
  
  document.addEventListener('DOMContentLoaded', () => {
	renderRecipes(recipes);
  });


  const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));


function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  console.log([recipe] + "POPCODP")
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();
  
