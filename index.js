// 1. Déclaration des variables

let randomFoodBtn = document.getElementById('randomFoodBtn')
let food = document.querySelector('.food')
let sentence = document.querySelector('.sentence')
let oldFood
let loaderDiv = document.querySelector('.loaderDiv')

    //Tableau contenant les différents mets à généré !
let foods = ['Riz', 'Maccaronie', 'Pâte', 'CousCous', 'Piron', 'Atassi', 'Bouillie', 'Attieke', 'Frites', 'Alloco', 'Shawarma', 'Pizza', 'Panini', 'Haricot', 'Pain', 'Akassa']

/* let foods = ['Big Bunny'] */

    //définis un tableau vide qui contiendra les emails tirés aléatoirement sans répétition et ses index
let foodTab = []
let index

    //avoir valeur de l'attribut "value" du Btn de regeneration
let randomFoodBtnValue = randomFoodBtn.getAttribute('value')

//au clique du btn de regénération de mets
randomFoodBtn.addEventListener('click', function(){   

    sentence.innerHTML = "Le mets du jour"
    food.style.display = "none"

    loaderDiv.setAttribute('id', 'loader')

    if(randomFoodBtn.getAttribute('value') == 0){

        //regenerer un index aleatoire compris entre 0 et la taille du tableau
        index = Math.floor(Math.random() * foods.length) 

        //ajouter cet index au dernier element du tableau vide
        foodTab.push(index)

        setTimeout(() => {

            loaderDiv.style.display = "none";
            food.style.display = "inherit";
            food.innerHTML = foods[index]
            loaderDiv.setAttribute('id', '')
            
        }, 1500);

        randomFoodBtn.setAttribute('value', '1')

        oldFood = foods[index]

        let FoodItems = JSON.parse(localStorage.getItem('foodItem'))

        if(FoodItems === null){
            foodList = []
        }
        else{
            foodList = FoodItems;
        }

        foodList.push(foods[index])
        localStorage.setItem('foodItem',JSON.stringify(foodList))
        
    }else{
        loaderDiv.style.display = "inherit";
        
        do{
            index = Math.floor(Math.random() * foods.length) 

            foodTab.push(index)

        }while(oldFood == foods[index]) 

        setTimeout(() => {

            loaderDiv.style.display = "none";
            food.style.display = "inherit";
            food.innerHTML = foods[index]

        }, 1500);

        oldFood = foods[index]

        foodList.push(foods[index])
        localStorage.setItem('foodItem',JSON.stringify(foodList))
        
    }
})

function showCurrentFood() {
    let FoodItems = JSON.parse(localStorage.getItem('foodItem'))

    if(FoodItems === null){
        foodList = []
    }
    else{
        foodList = FoodItems;
    }

    currentFood = foodList[foodList.length-1]

    return currentFood
}
showCurrentFood()


window.addEventListener("DOMContentLoaded", (event) => {
    sentence.innerHTML = "Le dernier mets généré" 
    food.innerHTML = showCurrentFood()
});






