const closeIcon = document.getElementById("eyeClose");
const openIcon = document.getElementById("eyeOpen");
const closeIcon2 = document.getElementById("eyeClose2");
const openIcon2 = document.getElementById("eyeOpen2");
const userPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

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

const showPassword2 = () => {

    if (confirmPassword.type === "password"){
        confirmPassword.type = "text";
        openIcon2.style.display = "inline-block";
        closeIcon2.style.display = "none";
    } else {
        confirmPassword.type = "password"
        openIcon2.style.display = "none";
        closeIcon2.style.display = "inline-block";
    }
};

const createUser = (event) => {
    event.preventDefault();

    const newUser = {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value.toLowerCase(),
        lastName: document.getElementById("lastName").value.toLowerCase(),
        password: document.getElementById("password").value,
    };

    const errores = {
        errorPassword: document.getElementById("errorPassword"),
        errorConfirmPassword: document.getElementById("errorConfirmPassword"),
        errorName: document.getElementById("errorName"),
        errorLastName: document.getElementById("errorLastName"),
        errorConditions: document.getElementById("errorConditions")
    }

    const confirmPassword = document.getElementById("confirmPassword").value;
    const conditions = document.getElementById("conditions").checked;
    const emailRegex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const passwordRegex =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])(?!.*\s).{8,}$/;

    if (newUser.name.length < 3) {
        errores.errorName.style.display = "block"
    } else {
        errores.errorName.style.display = "none"
    }

    if (newUser.lastName.length < 3) {
        errores.errorLastName.style.display = "block"
    } else {
        errores.errorLastName.style.display = "none"
    }

    if (!emailRegex.test(newUser.email)) {
        alert("debe ingresar un email valido")
        return;
    }

    if (!passwordRegex.test(newUser.password)) {
        errores.errorPassword.style.display = "block"
    } else {
        errores.errorPassword.style.display = "none"
    }

    if (newUser.password !== confirmPassword) {
        errores.errorConfirmPassword.style.display = "block"
    } else {
        errores.errorConfirmPassword.style.display = "none"
    }

    if (!conditions) {
        errores.errorConditions.style.display = "block"
        return
    }

    const storageUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    const userAlreadyExist = storageUsers.find((user) =>{
        return user.email === newUser.email
    });

    let users = storageUsers;

    if (userAlreadyExist) {
        alert("Ya existe un usuario registrado con este email, por favor ingrese otro.")
        return;
    } else {
        users.push(newUser)
    }

    localStorage.setItem("users", JSON.stringify(users));

     window.location.href = "http://127.0.0.1:5500/pages/loginPage.html"
}