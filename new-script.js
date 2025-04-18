document.addEventListener("DOMContentLoaded", () => {
    const previews = document.querySelectorAll(".preview");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const exit = document.getElementById("exit");

    previews.forEach(image => {
        image.addEventListener("click", () => {
            popupImg.src = image.getAttribute("data-full");
            popup.classList.add("show");
        });
    });

    exit.addEventListener("click", () => {
        popup.classList.remove("show");
        popupImg.src = "";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("show");
            popupImg.src = "";
        }
    });
});
