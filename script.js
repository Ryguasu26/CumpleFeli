function actualizarContador() {
  const ahora = new Date();
  const cumpleaños = new Date(2024, 10, 16);
  const diferencia = cumpleaños.getTime() - ahora.getTime();

  const días = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('días').innerHTML = días;
  document.getElementById('horas').innerHTML = horas;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;

  if (diferencia <= 0) {
    document.getElementById('regalo-sorpresa').style.display = 'block';
    document.getElementById('regalo-sorpresa').disabled = false;
    document.getElementById('regalo-sorpresa').style.cursor = 'pointer';
    document.getElementById('regalo-sorpresa').innerHTML = 'Abrir regalo';
    document.getElementById('mensaje-regalo').style.display = 'none';
  } else {
    document.getElementById('regalo-sorpresa').style.display = 'none';
    document.getElementById('regalo-sorpresa').disabled = true;
    document.getElementById('mensaje-regalo').style.display = 'block';
  }
}

setInterval(actualizarContador, 1000);
actualizarContador();