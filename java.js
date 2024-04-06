const passwordInput = document.getElementById("password")
const passwordConf = document.getElementById("conf_password")
const passwordMsg = document.getElementById("passwordMatch")

passwordInput.addEventListener("keyup", () => {
    if (passwordInput.value === passwordConf.value) {
        passwordMsg.style.display = "none";
    } else {
        passwordMsg.style.display = "block";
        passwordInput.style.border = "solid 2px var(--invalid-color)";
        passwordInput.style.backgroundColor = "rgba(255, 232, 232, 0.712)";
    }
});

passwordConf.addEventListener("keyup", () => {
    if (passwordInput.value === passwordConf.value) {
        passwordMsg.style.display = "none";
    } else {
        passwordMsg.style.display = "block";
        passwordConf.style.border = "solid 2px var(--invalid-color)";
        passwordConf.style.backgroundColor = "rgba(255, 232, 232, 0.712)";
    }
});