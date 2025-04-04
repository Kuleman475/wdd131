import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

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
	recipeList.innerHTML = '';

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
	const recipe = getRandomListEntry(recipes);
	renderRecipes([recipe]);
  });


function filterRecipes(query) {
	const filtered = recipes.filter(recipe => {
	const recipeTag = recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
	const recipeDesc = recipe.description.toLowerCase().includes(query.toLowerCase());
    const recipeIng = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()));
    const recipeName = recipe.name.toLowerCase().includes(query.toLowerCase());
	return recipeName || recipeTag || recipeDesc || recipeIng;
    });
	// Sorted List by name
	console.log(filtered);
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
	return sorted;
}



const search = document.querySelector(".search")
search.addEventListener("click", function searchHandler(e) {
	e.preventDefault()
	const searchInput = document.querySelector(".searchInput").value.toLowerCase();
	const filterss = filterRecipes(searchInput);
	renderRecipes(filterss);
});
  
