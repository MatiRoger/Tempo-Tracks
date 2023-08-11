const createUser = (event) => {
    event.preventDefault();
    const userEmail = document.getElementById("email").value;
    const userName = document.getElementById("name").value.toLowerCase();
    const userLastName = document.getElementById("lastName").value.toLowerCase();
    const userPassword = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const conditions = document.getElementById("conditions").checked;

    const emailRegex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    if (userName.length < 3) {
        alert("ingrese un nombre valido");
        return;
    }

    if (userLastName.length < 3) {
        alert("ingrese un apellido valido");
        return;
    }

    if (!emailRegex.test(userEmail)) {
        alert("debe ingresar un email valido")
        return;
    }

    if (!passwordRegex.test(userPassword)) {
        alert("debe ingresar una contraseña valida")
        return;
    }

    if (userPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden")
        return;
    }

    if (!conditions) {
        alert("Debes aceptar nuestros terminos y condiciones")
    }

    const newUser = {
        email: userEmail,
        name: userName,
        lastName: userLastName,
        password: userPassword,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    window.location.href = "#"
}
