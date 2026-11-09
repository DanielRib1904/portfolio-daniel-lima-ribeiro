const faixas = [
    { limite: 18.5, nome: "Abaixo do peso" },
    { limite: 25,   nome: "Peso adequado" },
    { limite: 30,   nome: "Sobrepeso" },
    { limite: 35,   nome: "Obesidade I" },
    { limite: 40,   nome: "Obesidade II" },
    { limite: Infinity, nome: "Obesidade III" }
];

const form = document.getElementById("formulario");
const campoPeso = document.getElementById("campoPeso");
const campoAltura = document.getElementById("campoAltura");
const saida = document.getElementById("saida");
const erro = document.getElementById("erro");

const lerNumero = (texto) => parseFloat(texto.trim().replace(",", "."));
const formatar = (n, casas) => n.toFixed(casas).replace(".", ",");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const peso = lerNumero(campoPeso.value);
    let altura = lerNumero(campoAltura.value);

    // aceita altura em centímetros (ex: 175)
    if (altura > 3) altura = altura / 100;

    if (!(peso > 0) || !(altura > 0)) {
        saida.hidden = true;
        erro.textContent = "Informe valores válidos de peso e altura.";
        erro.hidden = false;
        return;
    }

    erro.hidden = true;
    mostrarResultado(peso / (altura * altura), altura);
});

function mostrarResultado(imc, altura) {
    const indice = faixas.findIndex((f) => imc < f.limite);

    document.getElementById("valorImc").textContent = formatar(imc, 1);
    document.getElementById("textoClasse").textContent = faixas[indice].nome;

    // posição do marcador: IMC de 15 a 45 mapeado de 0% a 100%
    const pos = Math.min(Math.max((imc - 15) / 30, 0), 1) * 100;
    document.getElementById("marcador").style.left = pos + "%";

    const min = 18.5 * altura * altura;
    const max = 24.9 * altura * altura;
    document.getElementById("faixaIdeal").textContent =
        "Para a sua altura, a faixa de peso adequado vai de " +
        formatar(min, 1) + " kg a " + formatar(max, 1) + " kg.";

    document.querySelectorAll("#corpoTabela tr").forEach((linha) => {
        linha.classList.toggle("ativa", Number(linha.dataset.id) === indice);
    });

    saida.hidden = false;
}

document.getElementById("btnLimpar").addEventListener("click", () => {
    form.reset();
    saida.hidden = true;
    erro.hidden = true;
    document.querySelectorAll("#corpoTabela tr").forEach((l) => l.classList.remove("ativa"));
    campoPeso.focus();
});