// Here i will write the logics related to


let toggle = document.getElementById("toggle");
let menu = document.getElementById("navbar-sticky");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // Toggle the 'hidden' class
    console.log("skjhdgfk")
});


  document.addEventListener("DOMContentLoaded", function() {
    const selectCont = document.querySelector('.select-cont');
    const toggleElements = document.querySelector('.togglelements');
  
    selectCont.addEventListener('click', function() {
      if (toggleElements.classList.contains('hidden')) {
        toggleElements.classList.remove('hidden');
      } else {
        toggleElements.classList.add('hidden');
      }
    });
  });




  document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left img');
    const rightArrow = document.querySelector('.right img');
    const cardContainer = document.querySelector('.cards');
    const scrollAmount = 400; // Adjust this value as needed
     const cardsToShow = 3;

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount * cardsToShow;
        console.log("sdsfs")
    });

    rightArrow.addEventListener("click", ()=>{
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount * cardsToShow; 
        console.log("xkjnsjgf")
    })
});
















  

//   document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("blinkbtn")) {
//         document.querySelectorAll(".blinkbtn").forEach(btn => {
//             btn.parentElement.classList.remove("afterclick");
//         });
//         event.target.parentElement.classList.add("afterclick");
//     }
// });



function showhide(i){
    const varietycontainerAll = document.querySelectorAll(".varietycontainer");
    varietycontainerAll.forEach(container => {
        container.style.display = "none";
    });
    varietycontainerAll[i].style.display = "flex";
}



//here is the code to change the Slider 


function showhide(i){
    const slidercontainerAll = document.querySelectorAll(".slidercont");
    slidercontainerAll.forEach(container => {
        container.style.display = "none";
    });
    slidercontainerAll[i].style.display = "inline-flex";
    console.log("The second slider button os clicked");
}


//<---- Here is the Code to Write the Change implemnet the active  the button ---> 


const buttons=document.querySelectorAll('.destbtn')

buttons.forEach











// Here will be the Code to Change the Slider













// Here is the code for the  secomnd carasoulde















document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.firstarrow img');
    const rightArrow = document.querySelector('.secondarrow img');
    const cardContainer = document.querySelector('.hiddencards');
    const scrollAmount = 400; // Adjust this value as needed
     const cardsToShow = 3;

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount * cardsToShow;
        console.log("sdsfs")
    });

    rightArrow.addEventListener("click", ()=>{
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount * cardsToShow; 
        console.log("xkjnsjgf")
    })
});
