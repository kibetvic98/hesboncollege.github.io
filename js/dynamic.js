
const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar-menu');
const navlogo = document.querySelector('#navbar-logo')

//display mobile menu
const mobileMenu = () => {
   menu.classList.toggle('is-active');
   menulinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
   }
}
const togglepassword = document.querySelector("#togglepassword");
const password = document.querySelector("#password");

togglepassword.addEventListener("click", function (e){
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classlist.toggle("fa-eye");
});