const textArea = document.getElementById("textArea");
const finalMessage = document.getElementById("encriptedText");
const encriptedButton = document.getElementById("encriptedButton");
const desencriptedButton = document.getElementById("desencriptedButton");
const copyButton = document.getElementById("copyButton");
const image = document.getElementById("image");
const complementText = document.getElementById("complementText");

const encryptor = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function validateInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function encrypt(text) {
    encryptor.forEach(pair => {
        text = text.replaceAll(pair[0], pair[1]);
    });
    return text;
}

function decrypt(text) {
    encryptor.forEach(pair => {
        text = text.replaceAll(pair[1], pair[0]);
    });
    return text;
}

function displayMessage(message) {
    finalMessage.textContent = message;
    copyButton.style.display = "block";
    image.style.display = "none";
    complementText.style.display = "none";
}

encriptedButton.addEventListener("click", () => {
    const text = textArea.value;
    if (!validateInput(text)) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return;
    }
    const encryptedText = encrypt(text);
    displayMessage(encryptedText);
});

desencriptedButton.addEventListener("click", () => {
    const text = textArea.value;
    if (!validateInput(text)) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return;
    }
    const decryptedText = decrypt(text);
    displayMessage(decryptedText);
});

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(finalMessage.textContent)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error("Error al copiar al portapapeles", err);
        });
});
