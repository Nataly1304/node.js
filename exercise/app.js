const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 3030;

app.use(cors());
app.use(express.json());
const cosmetico = [
    {id: 1, nombre: "polvos", marca: "Nailen", precio: 20000, cantidad:9},
    {id: 2, nombre: "base", marca: "Matte", precio: 30000, cantidad:10},
    {id: 3, nombre: "paleta de colores", marca: "Mac", precio: 25000, cantidad:12},
    {id: 4, nombre: "pestañina", marca: "Vitu", precio: 7000, cantidad:20},
];
app.get("/", (req, res) => {
    res.send("Hola Clientes, Asi es la creacion de mi API");
});

app.get("/api/cosmetico", (req, res) => {
    res.send(cosmetico);
});

app.get("/api/cosmetico/:id", (req, res) => {
    const producto = cosmetico.find((e) => e.id === parseInt(req.params.id));
    if (!producto)
      return res
         .status(404)
         .send("Producto no encontrado en nuestra base de datos");
    else res.send(producto);
});
app.post("/api/cosmetico", (req, res) => {
    const product = {
        id: cosmetico.length + 1,
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: parseInt(req.body.precio),
        cantidad: parseInt(req.body.cantidad),
    };
    cosmetico.push(product);
    res.send(product);
});
app.put("/api/cosmetico/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const prodIndex = cosmetico.findIndex((product) => product.id === id);
    if (prodIndex !== -1 ){
        const updateProd = {
            id:id,
            nombre: req.body.nombre,
            marca: req.body.marca,
            precio: parseInt(req.body.precio),
            cantidad: parseInt(req.body.cantidad),
        };
        cosmetico [prodIndex]=updateProd;
        res.send(updateProd);
    }else{
    res.status(404).send("Producto no encontrado");
    }
});

app.delete("api/cosmetico/:id",(req, res) => {
    const producto = cosmetico.find((d)=> d.id === parseInt(req.params.id));
    if (!producto) return res.status(404).send("Producto no encontrado");
    else res.send(producto);

    const index = cosmetico.indexOf(producto);
    cosmetico.splice(index, 1);
    res.send(producto);
})
app.listen(port, ()=> console.log(`Escuchando el puerto ${port}....`));




