require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

// rota get: p[agina inicial da API
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'servidor funfando!',
        rotas: ['/usuario', '/produto']
    });
});

// rota post: receber dados de um usuário
app.post('/usuario', (req, res) => {
    const { nome, idade } = req.body;
app.post('/produto', (req, res) => {
    const { nomeProduto, marca, quantidade, preco } = req.body;

    if (
        typeof nomeProduto !== 'string' || nomeProduto.trim() === '' ||
        typeof marca !== 'string' || marca.trim() === '' ||
        typeof quantidade !== 'number' || !Number.isInteger(quantidade) || quantidade < 0 ||
        typeof preco !== 'number' || !Number.isFinite(preco) || preco < 0
    ) {
        return res.status(400).json({
            erro: 'nomeProduto e marca devem ser texto; quantidade deve ser um inteiro não negativo; preco deve ser um número não negativo.'
        });
    }

    res.status(201).json({
        mensagem: 'PRODUTO RECEBIDO!',
        produto: {
            nomeProduto: nomeProduto.trim(),
            marca: marca.trim(),
            quantidade,
            preco
        }
    });
});

    res.status(201).json({
        mensagem: 'Usuário recebido!',
        usuario: {
            nome: nome,
            idade: idade
        }
    });

});

    app.post('/produto', (req, res) => {

    const { nomeProduto, marca, quantidade, preco } = req.body;

    res.status(201).json({
        mensagem: 'Produto recebido com sucesso!',
        produto: {
            nomeProduto,
            marca,
            quantidade,
            preco
        }
    });
});
 
// inciar o serv
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
