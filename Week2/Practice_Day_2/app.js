for(let i=0; i<12; i++){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        foodDisplay(data.meals[0]);
    })
    .catch(error => console.log(error));
}

const foodDisplay = (data) => {
    // console.log(data.idMeal);
    const foodContainer = document.querySelector('.food-container');
    const foodDiv = document.createElement('div');
    foodDiv.classList.add('col');
    foodDiv.innerHTML = `
        <div class="card" onclick="foodDetails('${data.idMeal}')">
            <img src="${data.strMealThumb}" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.strMeal}</h5>
                <p class="card-text">${data.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
    `;
    foodContainer.appendChild(foodDiv);
}

const foodDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const detailsContainer = document.querySelector('.details-container');
        detailsContainer.innerHTML = '';
        const foodDiv = document.createElement('div');
        foodDiv.innerHTML = `
             <div class="card">
                <img src="${data.meals[0].strMealThumb}" class="card-img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.meals[0].strMeal}</h5>
                    <h6 class="card-text">Ingridents</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group
                        -item">${data.meals[0].strIngredient1}</li>
                        <li class="list-group
                        -item">${data.meals[0].strIngredient2}</li>
                        <li class="list-group
                        -item">${data.meals[0].strIngredient3}</li>
                        <li class="list-group
                        -item">${data.meals[0].strIngredient4}</li>
                        <li class="list-group
                        -item">${data.meals[0].strIngredient5}</li>
                        
                </div>
            </div>
            `;
            detailsContainer.appendChild(foodDiv);
    });
}

// search food
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const foodContainer = document.querySelector('.food-container');

searchButton.addEventListener('click', function(){
    if(searchInput.value == ''){
        return;
    }
    foodContainer.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.meals == null){
            const foodDiv = document.createElement('div');
            foodDiv.innerHTML = `
            <div class="">                
                <h2 class="card-title">No Food Found</h2>
            </div>
            `;
            foodContainer.appendChild(foodDiv);
            return;
        }
        data.meals.forEach(food => {
            foodDisplay(food);
        });
        console.log(data.meals.length);
    })
    .catch(error => console.log(error));
});
