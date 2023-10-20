
let input = document.getElementById("input")
let displayFoodItems = document.getElementById("root")


let foodServer = `https://www.themealdb.com/api/json/v1/1/search.php?s=`

//
async function serverData(foodName) {
    // foodName = "honey"
    try {
        let res = await fetch(foodServer + foodName)
        let resObj = await res.json()
        let newData = resObj.meals
        displayFoodData(newData)
        console.log(newData)   
    }
    catch (error) {
        console.log("fetch not suessces full".error)
    }
}

function displayFoodData(newData) {

    displayFoodItems.innerHTML = "";
    if (newData) {
        newData.forEach(({ strMeal, strCategory, strArea, strInstructions, strMealThumb }) => {
            let foodCard = document.createElement("div")
            foodCard.className = "card"
            let foodImgElement = document.createElement("img")
            foodImgElement.src = strMealThumb
            
            let foodNameElement = document.createElement("h2")
            foodNameElement.textContent = strMeal
            
            let foodAreaElement = document.createElement("p")
            foodAreaElement.textContent = strArea
            
            let foodCatagory = document.createElement("p")
            foodCatagory.textContent = strCategory;
            
            let foodIntro = document.createElement("p")
            foodIntro.textContent = strInstructions
    
            foodCard.append(foodImgElement,
                foodNameElement,
                foodAreaElement,
                foodCatagory,
                foodIntro
                )
                displayFoodItems.append(foodCard)
            });
        } else {
        displayFoodItems.innerHTML = "Food not mach, Retry"
        input.value = ""
    }
    
}
//fetch function inkoed////    
serverData(input.value)

// Search Engein
let flag = false;
input.addEventListener("input",function(){
    setTimeout(()=>{
        flag = true;
        serverData(input.value)
    },1000)
})


