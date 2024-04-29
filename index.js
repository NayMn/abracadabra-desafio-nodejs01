import express from "express"
import { miMiddleware } from "./middlewares/middlewares.js"
import { middlewareTiempo } from "./middlewares/middlewares.js"

// crear archivo json
const productsJs = [
    { id: 1, name: "productUno", price: 100 },
    { id: 2, name: "productDos", price: 53 },
    { id: 3, name: "productTres", price: 65 },
]

const app = express()

//archivos estaticos con ruta absoluta
app.use(express.static('public'));


// juego tiempo con middleware:


app.get("/Tiempo", middlewareTiempo, (req, res) => {

    const tiempo = { time: Date.now() };
    res.send(tiempo);
});



app.get("/profile", miMiddleware, (req, res) => {
    res.send("contraseña es 123123")
})

// enviar archivo json
app.get('/api/v1/products', (req, res) => {

    res.json({
        products: productsJs
    })
})



// nombre de paginas web y contenido, rutas
app.get("/", (req, res) => {
    res.send("primera info en pagina principal")
})

app.get("/paginados", (req, res) => {
    res.send("segunda pagina info xD")
})

const PORT = process.env.PORT || 4000
app.listen(PORT, (req, res) => {
    console.log("servidor escuchando")
})