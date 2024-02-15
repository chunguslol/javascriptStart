


const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_select = document.querySelector("#genero");
const hora_input = document.querySelector("#hora");
const idioma_select = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombre_input.value;
  const edad = parseInt(edad_input.value);
  const genero = genero_select.value;
  const horaParts = hora_input.value.split(':');
  const hora = new Date();
  hora.setHours(parseInt(horaParts[0], 10));
  hora.setMinutes(parseInt(horaParts[1], 10));
  const idioma = idioma_select.value;

  let saludo = "Hola";

  if (nombre) {
    saludo += " " + nombre;
  }

  if (edad > 30) {
    if (genero === "femenino") {
      saludo = "Hola Sra " + nombre;
    } else {
      saludo = "Hola Sr " + nombre;
    }
  } else if (edad <= 30) {
    saludo += " Joven ";
  }

  if (hora.getHours() < 12) {
    saludo += ", Buenos días";
  } else if (hora.getHours() < 18) {
    saludo += ", Buenas tardes";
  } else {
    saludo += ", Buenas noches";
  }

  if (idioma === "en") {
    if (genero === "femenino" && edad > 30) {
      saludo = "Hello Mrs " + nombre;
    } else if (edad > 30) {
      saludo = "Hello Mr " + nombre;
    } else {
      saludo = "Hello Young " + nombre;
    }
    if (hora.getHours() < 12) {
      saludo += ", Good morning";
    } else if (hora.getHours() < 18) {
      saludo += ", Good afternoon";
    } else {
      saludo += ", Good evening";
    }
  }

  div.innerHTML = "<p>" + saludo + "</p>";
});

