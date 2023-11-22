const form_group3 = document.querySelector(".form_group3");
selectBtn = form_group3.querySelector(".select_btn");

selectBtn.addEventListener("click", () => {
    form_group3.classList.toggle("active");
});