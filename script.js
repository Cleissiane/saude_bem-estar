// Função para alternar o menu hamburguer em telas pequenas
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('expanded');
  }
  
  // Função para calcular o IMC
  function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoIMC = document.getElementById('resultadoIMC');
  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultadoIMC.textContent = 'Por favor, insira valores válidos.';
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao = '';
  
    if (imc < 18.5) {
      classificacao = 'Baixo peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }
  
    resultadoIMC.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  }