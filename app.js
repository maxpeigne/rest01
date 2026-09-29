import express from 'express';

const products = [
    {
        id : 1,
        name: "Pixel 18",
        category: "Phone",
        price: 1000
    },
    {
        id : 2,
        name: "S21",
        category: "Phone",
        price: 900
    }
]

// consulter, ajouter, remplacer, modifier, supprimer


const app = express();

//Lister
app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    res.json(products[req.params.id])
});

app.listen(3000, () => {
    console.log('Serveur lancé sur le port 3000');
});