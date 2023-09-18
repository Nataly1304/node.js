function generarTablaCosmetico() {
    const tbody = document.getElementById("tbody-cosmetico");

    fetch("http://localhost:3030/api/cosmetico")
    .then(response => response.json ())
    .then(cosmetico => {
        cosmetico.forEach(function (cosmetico) {
            const fila = tbody.insertRow();
            const celdaId = fila.insertCell();
            const celdaNombre = fila.insertCell();
            const celdaMarca = fila.insertCell();
            const celdaPrecio = fila.insertCell();
            const celdaCantidad = fila.insertCell();

            celdaId.textContent = cosmetico.id;
            celdaNombre.textContent = cosmetico.nombre;
            celdaMarca.textContent = cosmetico.marca;
            celdaPrecio.textContent = cosmetico.precio;
            celdaCantidad.textContent = cosmetico.cantidad;
        });
    });
}

generarTablaCosmetico();