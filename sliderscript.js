
document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll(".destbtn");
    const buttonLine = document.getElementById("buttonLine");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetContainerId = button.getAttribute("data-target");
            const targetContainer = document.getElementById(targetContainerId);
  
            document.querySelectorAll(".varietycontainer").forEach(container => {
                container.style.display = container === targetContainer ? "flex" : "none";
            });

            // Position the line below the active button
            const buttonRect = button.getBoundingClientRect();
            buttonLine.style.width = buttonRect.width + "px";
            buttonLine.style.left = buttonRect.left + "px";
            buttonLine.style.top = buttonRect.bottom + "px";
        });
    });

    // Show the line below the first button by default
    const firstButton = categoryButtons[0];
    const firstButtonRect = firstButton.getBoundingClientRect();
    buttonLine.style.width = firstButtonRect.width + "px";
    buttonLine.style.left = firstButtonRect.left + "px";
    buttonLine.style.top = firstButtonRect.bottom + "px";




    // Show residential container by default and hide others
        const residentialContainer = document.getElementById("Hotelcontainer");
        const otherContainers = document.querySelectorAll(".varietycontainer:not(#Hotelcontainer)");
    
        residentialContainer.style.display = "flex";
        otherContainers.forEach(container => {
            container.style.display = "none";
        });



});
