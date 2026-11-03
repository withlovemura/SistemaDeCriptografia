<div align="center">

# 🌸 Sistema de Criptografia (Cifra de César) 🌸

*Projeto acadêmico desenvolvido para a matéria de **Segurança no Desenvolvimento de Aplicação** do 5º semestre de DSM (2026/2)*

</div>

---

## 📋 Sobre o Projeto
Este sistema é uma aplicação completa que implementa a tradicional técnica de **Cifra de César**, unindo interface intuitiva, segurança com **JWT** e persistência de dados em banco de dados. O objetivo principal é permitir o envio e a recepção segura de mensagens cifradas utilizando chaves de uso único.

---

## ✨ Telas da Aplicação
O sistema conta com as quatro telas principais exigidas:
1. 🔐 **Login:** Autenticação de usuários validando credenciais no banco e gerando um token JWT.
2. 📝 **Cadastro de Usuário:** Registro de novos usuários no sistema.
3. 🔒 **Criptografar:** Entrada da mensagem e do passo (deslocamento), gerando um hash/chave privada exclusivo com controle de uso único no banco.
4. 🔓 **Descriptografar:** Validação do hash e da mensagem cifrada para revelar o texto original apenas uma vez.

---

## 🚀 Tecnologias Utilizadas
* **Backend:** Node.js com Express
* **Segurança:** JSON Web Token (JWT)
* **Frontend:** HTML5, CSS3 e JavaScript
* **Banco de Dados:** SQLite / MongoDB (Conforme escolha do grupo)

---

## 📂 Estrutura do Projeto
```text
SistemaDeCriptografia/
├── server.js               # Arquivo principal do servidor
├── package.json            # Dependências do projeto
└── src/
    ├── views/              # Telas HTML e arquivos CSS
    ├── controllers/        # Lógica das rotas (Auth e Criptografia)
    ├── models/             # Conexão e modelos do Banco de Dados
    └── routes/             # Rotas da API
```

---

## ⚙️ Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/withlovemura/SistemaDeCriptografia.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd SistemaDeCriptografia
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   node server.js
   ```

---

## 👥 Equipe
* **Beatriz Siqueira**
* **Caike Miguel**
* **Gabriel Campanholi**
* **João Milone**
* **João Quaresma**

---

<div align="center">
  <sub>Desenvolvido com 💖 para fins acadêmicos.</sub>
</div>