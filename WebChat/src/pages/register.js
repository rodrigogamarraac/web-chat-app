function RegistroPage() {
  const div = document.createElement("div");

  div.innerHTML = `
    <div>
      <h2>Registrar huésped</h2>

      <form class="formulario">
        <div class="campo">
          <label>Nombre completo</label>
          <input name="nombreCompleto" />
        </div>

        <div class="campo">
          <label>Tipo de documento</label>
          <select name="tipoDocumento">
            <option value="CI">CI</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>

        <div class="campo">
          <label>Número de documento</label>
          <input name="numeroDocumento" />
        </div>

        <div class="campo">
          <label>Teléfono</label>
          <input name="telefono" />
        </div>

        <div class="campo">
          <label>Correo</label>
          <input name="correo" />
        </div>

        <div class="campo">
          <label>Fecha de nacimiento</label>
          <input type="date" name="fechaNacimiento" />
        </div>

        <div class="campo">
          <label>Nacionalidad</label>
          <input name="nacionalidad" />
        </div>

        <button class="boton-principal" type="submit">
          Guardar huésped
        </button>
      </form>
    </div>
  `;

  return div;
}

export default RegistroPage;