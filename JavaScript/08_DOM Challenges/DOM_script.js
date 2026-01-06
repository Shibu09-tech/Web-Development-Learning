//example 1
document.getElementById("changeTextButton").addEventListener("click",function(){
    let para= document.getElementById("myParagraph");
    para.textContent="The paragraph is changed.";
});

//example 2
document.getElementById("highlightFirstCity").addEventListener('click', function(){
    let citieslist=document.getElementById("citiesList");
    citieslist.firstElementChild.classList.add("highlight");
    
})

//example 3

document.getElementById("changeOrder").addEventListener('click',function(){
    let coffeType= document.getElementById("coffeeType");
    coffeType.textContent="Espresso"
    coffeType.style.backgroundColor="Brown";
    coffeType.style.padding="5px";
})

//example 4
document.getElementById("addNewItem").addEventListener('click',function(){
    let newItem=document.createElement('li')
    newItem.textContent="Eggs"
    document.getElementById("shoppingList").appendChild(newItem);
});

//example 5
document.getElementById("removeLastTask").addEventListener('click',function(){
    let taskList=document.getElementById("taskList");
    taskList.lastElementChild.remove();
});
