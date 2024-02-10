import express from 'express';
import __dirname from './utils.js'
import productsRoutes from './routes/products.routes.js'
import cartsRoutes from './routes/carts.routes.js'

const PORT = 8080;
const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/ping', (req, res) => {
    console.log(__dirname);
    res.send({ status: "ok" })
})


app.use('/api/products', productsRoutes)
app.use('/api/carts', cartsRoutes)

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})
