// Exemplo base para o controler de autenticação (Login e Cadastro)
const authController = {
    login: (req, res) => {
        // Lógica de validação com JWT e Banco de Dados entrará aqui
        res.json({ status: "Função de login em desenvolvimento" });
    },
    cadastrar: (req, res) => {
        // Lógica de cadastro de usuário entrará aqui
        res.json({ status: "Função de cadastro em desenvolvimento" });
    }
};

module.exports = authController;