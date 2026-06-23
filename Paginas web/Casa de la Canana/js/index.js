const horariosPorDia = {
  1: ["10:30", "11:30", "12:30", "13:30"],             // Lunes
  2: ["10:30", "11:30", "12:30", "13:30", "16:30", "17:30"], // Martes
  3: ["10:30", "11:30", "12:30", "13:30", "16:30", "17:30"], // Miércoles
  4: ["10:30", "11:30", "12:30", "13:30"],             // Jueves
  5: ["10:30", "11:30", "12:30", "13:30", "16:30", "17:30"], // Viernes
  6: ["10:30", "11:30", "12:30", "13:30"],             // Sábado
  0: []                                                 // Domingo (cerrado)
};

const fechaInput = document.getElementById("fecha");
const horaSelect = document.getElementById("hora");

fechaInput.addEventListener("change", () => {
  const fecha = new Date(fechaInput.value);
  const diaSemana = fecha.getDay();

  horaSelect.innerHTML = "";

  const horarios = horariosPorDia[diaSemana];

  if (horarios.length === 0) {
    horaSelect.innerHTML = "<option>Cerrado</option>";
    horaSelect.disabled = true;
    return;
  }

  horarios.forEach(hora => {
    const option = document.createElement("option");
    option.value = hora;
    option.textContent = hora;
    horaSelect.appendChild(option);
  });

  horaSelect.disabled = false;
});