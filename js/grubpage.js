// JavaScript pour la page GrubPage
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    let selectedIndex = 0;

    updateSelection();

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowUp" && selectedIndex > 0) {
            selectedIndex--;
            updateSelection();
        } else if (event.key === "ArrowDown" && selectedIndex < menuItems.length - 1) {
            selectedIndex++;
            updateSelection();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter")
            window.location.href = "nanopage.html";
    });

    function updateSelection() {
        menuItems.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add("selected");
            } else {
                item.classList.remove("selected");
            }
        });
    }
});
