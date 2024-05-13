document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left img');
    const rightArrow = document.querySelector('.right img');
    const cardContainer = document.querySelector('.cards');
    const scrollAmount = 540; // Adjust this value as needed

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount;
        console.log("sdsfs")
    });

    rightArrow.addEventListener("click", ()=>{
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount;
        console.log("xkjnsjgf")
    })
});