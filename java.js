const passwordInput = document.getElementById("password")
const passwordConf = document.getElementById("conf_password")
const passwordMsg = document.getElementById("passwordMatch")

passwordInput.addEventListener("keyup", () => {
    if (passwordInput.value === passwordConf.value) {
        passwordMsg.style.display = "none";
    } else {
        passwordMsg.style.display = "block";
    }
});

passwordConf.addEventListener("keyup", () => {
    if (passwordInput.value === passwordConf.value) {
        passwordMsg.style.display = "none";
    } else {
        passwordMsg.style.display = "block";
    }
});