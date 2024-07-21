
function validarTexto(textarea) {
    let texto = textarea.value;
    // Elimina caracteres no permitidos y convierte a minúsculas
    texto = texto.replace(/[^a-z]/g, '').toLowerCase();
    textarea.value = texto;
}

function encriptar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(outputText);
}

function desencriptar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarResultado(outputText);
}

function mostrarResultado(texto) {
    document.getElementById('resultPanel').style.display = 'none';
    document.getElementById('resultText').style.display = 'block';
    document.getElementById('outputText').innerText = texto;
    const copyButton = document.querySelector('.copy');
    copyButton.disabled = false;
    copyButton.classList.remove('hidden');
}

function copiar() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText);
    alert('Texto copiado al portapapeles');
}
