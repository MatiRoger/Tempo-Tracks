const closeIcon = document.getElementById("eyeClose");
const openIcon = document.getElementById("eyeOpen");

const showPassword = () => {

    if (userPassword.type === "password"){
        userPassword.type = "text";
        openIcon.style.display = "inline-block";
        closeIcon.style.display = "none";
    } else {
        userPassword.type = "password"
        openIcon.style.display = "none";
        closeIcon.style.display = "inline-block";
    }
};

const userAuth = (event) => {
    event.preventDefault();
    const userEmail = document.getElementById("userEmail").value;
    const userPassword = document.getElementById("userPassword").value;

    const storageUsers = JSON.parse(localStorage.getItem("users"));
    const errorAuthentication = document.getElementById("errorAuthentication");

    const userAuthentication = storageUsers.find((user) => {
        if (user.email === userEmail && user.password === userPassword) {
            return user;
        }
    })

    if (userAuthentication) {
        localStorage.setItem(("userAuth"), JSON.stringify(userAuthentication));
        errorAuthentication.style.display = "none";
        window.location.href = '../index.html'
    } else {
        errorAuthentication.style.display = "block";
        return;
    }

};







// http://127.0.0.1:5500/pages/registerPage.html