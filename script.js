const modal = document.getElementById("loginModal");
const btnLogin = document.getElementById("loginBtn");
const spanClose = document.getElementsByClassName("close")[0];
const loginForm = document.getElementById("loginForm");

btnLogin.onclick = function() {
    modal.style.display = "block";
}

spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    
    alert(`Berhasil login sebagai: ${email}\nSelamat berbelanja di EleganTech!`);
    
    btnLogin.innerText = "Profil Akun";
    btnLogin.style.backgroundColor = "#d4af37";
    btnLogin.style.color = "#1a1a1a";
    
    modal.style.display = "none";
    loginForm.reset();
});