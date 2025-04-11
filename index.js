import express from "express";

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('bienvenido a mi servidor');
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})

app.get('/saludo', (req,res) => {
    res.send("qondaaaaa, como estas?");
})

app.get('/numero', (req,res) =>{
    res.send((42).toString());
})

let nombres = ['Bruno', 'Nico', 'Sebastian'];
app.get('/nombres', (req,res) =>{
    res.json(nombres);
})
