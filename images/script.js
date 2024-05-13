


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
