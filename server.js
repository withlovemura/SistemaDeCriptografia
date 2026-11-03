const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de teste inicial
app.get('/', (req, res) => {
    res.json({ mensagem: "API do Sistema de Criptografia rodando com sucesso!" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});