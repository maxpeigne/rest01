import express from 'express';

const app = express();

app.use(express.json());

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
    },
    {
        id : 3,
        name: "Nokia 3310",
        category: "Phone",
        price: 10
    }
]

// modifier, supprimer

//Lister
app.get('/products', (req, res) => {
    res.json(products);
});

// Consulter
app.get('/products/:id', (req, res) => {
    res.json(products[req.params.id])
});

// Ajouter !!! Probleme de gestion de l'ID (il faudra determiner la valeur max actuelle et prendre la suivante)
app.post('/products', (req, res) => {
    const { name, category, price } = req.body;
    const product = { id: products.length+1 , name, category, price }
    products.push(product);
    res.status(201).json(product);
});

// Remplacer
app.patch('/products/:id', (req, res) => {
    const produit = products.find(i => i.id === Number(req.params.id));
    Object.assign(produit, req.body);
    res.json(produit);
});

// Suppression
app.delete('/products/:id', (req, res) => {
    const index = products.findIndex(i => i.id === Number(req.params.id));
    products.splice(index, 1);
    res.status(204).end();
});

//Serveur
app.listen(3000, () => {
    console.log('Serveur lancé sur le port 3000');
});