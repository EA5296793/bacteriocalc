// ===== Recuento de parásitos =====
function calcularRecuento() {
  const parasitos = parseInt(document.getElementById('parasitos').value) || 0;
  const leucocitos = parseInt(document.getElementById('leucocitos').value) || 200;
  const alta = document.getElementById('altaParasitemia').checked;

  let resultado = 0;
  if (alta) {
    resultado = (parasitos / 100) * leucocitos;
  } else {
    resultado = (parasitos * 8000) / leucocitos;
  }

  document.getElementById('resultadoMalaria').innerText = 
    `Resultado: ${resultado.toFixed(2)} parásitos/µL`;
}

// ===== Corrección de Leucocitos =====
function corregirLeucocitos() {
  const blastos = parseInt(document.getElementById('blastos').value) || 0;
  const totalLeucocitos = parseInt(document.getElementById('totalLeucocitos').value) || 0;

  const correccion = totalLeucocitos * (100 / (100 + blastos));

  document.getElementById('resultadoLeucocitos').innerText =
    `Corrección: ${correccion.toFixed(2)} leucocitos/µL`;
}

// ===== Contador de células =====
let conteo = {
  neutrofilos: 0,
  linfocitos: 0,
  monocitos: 0,
  eosinofilos: 0,
  basofilos: 0,
};
let total = 0;
const limite = 100;

function contar(tipo) {
  if (total >= limite) return;

  conteo[tipo]++;
  total++;
  actualizarDisplay();
}

function reiniciarContador() {
  conteo = { neutrofilos: 0, linfocitos: 0, monocitos: 0, eosinofilos: 0, basofilos: 0 };
  total = 0;
  actualizarDisplay();
}

function actualizarDisplay() {
  let display = document.getElementById('display');
  let html = `
    <p><strong>Neutrófilos:</strong> ${conteo.neutrofilos} (${((conteo.neutrofilos/Math.max(total,1))*100).toFixed(1)}%)</p>
    <p><strong>Linfocitos:</strong> ${conteo.linfocitos} (${((conteo.linfocitos/Math.max(total,1))*100).toFixed(1)}%)</p>
    <p><strong>Monocitos:</strong> ${conteo.monocitos} (${((conteo.monocitos/Math.max(total,1))*100).toFixed(1)}%)</p>
    <p><strong>Eosinófilos:</strong> ${conteo.eosinofilos} (${((conteo.eosinofilos/Math.max(total,1))*100).toFixed(1)}%)</p>
    <p><strong>Basófilos:</strong> ${conteo.basofilos} (${((conteo.basofilos/Math.max(total,1))*100).toFixed(1)}%)</p>
    <p class="total">Total: ${total} / ${limite}</p>
  `;
  display.innerHTML = html;
}
