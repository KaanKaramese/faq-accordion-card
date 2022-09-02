const arrow = document.querySelectorAll(".arrow");

arrow.forEach((button) => button.addEventListener("click", function(){
    button.classList.toggle("arrow-active");
    const text = button.parentElement.parentElement.children[1];
    const title = button.parentElement.children[0];
    text.classList.toggle("text-active");
    title.classList.toggle("active");
}))