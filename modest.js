 let modal = document.querySelector(".modal");
 let contBtn = document.querySelector(".contact-btn");
 let sendBtn = document.querySelector(".modal-send_btn")

 function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
}
function showModal(){
    modal.classList.remove("hide");
    modal.classList.add("show");
}

contBtn.addEventListener("click", showModal);
sendBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
   if (e.target === modal) {
       closeModal();
    }
});

new Splide( '.splide' ).mount();

