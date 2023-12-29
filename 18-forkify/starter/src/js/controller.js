import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipe() {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) load recipe
    await model.loadRecipe(id);
    console.log(model.state.recipe);
    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
}

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipe),
);
