# ChatOnline 💬

Um sistema de chat simples e em tempo real, desenvolvido com Node.js e WebSockets nativos. A aplicação permite comunicação instantânea entre múltiplos usuários em um único canal de chat global.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🚀 Sobre o Projeto

O ChatOnline é uma aplicação web leve de chat em tempo real. O projeto utiliza a biblioteca `ws` do Node.js para estabelecer uma comunicação bidirecional de baixa latência entre o cliente (navegador) e o servidor.

Cada usuário que se conecta recebe um nome de usuário e uma cor gerados aleatoriamente, permitindo uma identificação visual fácil e imediata, sem a necessidade de registro ou login.

### Principais características:

- Chat em tempo real em um canal global
- Nomes e cores de usuários gerados aleatoriamente
- Notificações de entrada e saída de usuários
- Interface limpa com tema claro e escuro
- Nenhuma dependência de frameworks complexos (Vanilla JS)

## ✨ Funcionalidades

- ✅ **Chat em Tempo Real**: Envio e recebimento instantâneo de mensagens para todos os usuários conectados

- ✅ **Identidade Aleatória**: Ao conectar, cada usuário recebe um nome único (e.g., Blue_HappyLion) e uma cor para seu nome de usuário, tornando a conversa fácil de seguir

- ✅ **Notificações de Status**: Mensagens automáticas informam a todos quando um novo usuário entra ou sai do chat

- ✅ **Interface Intuitiva**:
  - Design limpo e responsivo
  - Alternador de tema (Claro/Escuro) com transições suaves

- ✅ **Sem Necessidade de Cadastro**: Basta abrir a página para começar a conversar

## 🛠 Tecnologias Utilizadas

### Frontend

- HTML5
- CSS3 (com Variáveis CSS para temas)
- JavaScript (Vanilla - sem frameworks)
- API WebSocket nativa do navegador

### Backend

- Node.js
- `ws` (Uma biblioteca WebSocket rápida e simples para Node.js)
- `unique-names-generator` (Para gerar nomes de usuário divertidos e aleatórios)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14.0 ou superior)
- npm (geralmente instalado com o Node.js)
- Git (opcional, para clonar o repositório)

## 🔧 Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/chatOnline.git
```

```bash
cd chatOnline
```

### 2. Instale as dependências do servidor

Não há dependências de frontend para instalar. Apenas as do backend (servidor) são necessárias.

```bash
npm install
```

## 🎯 Como Usar

### 1. Inicie o servidor WebSocket

No terminal, dentro da pasta do projeto, execute o seguinte comando:

```bash
node server.js
```

Você verá a mensagem: `Servidor WebSocket rodando na porta 8080...`

### 2. Abra o chat no navegador

Abra o arquivo `index.html` diretamente no seu navegador. Você pode fazer isso de algumas maneiras:

- Arraste e solte o arquivo `index.html` em uma nova aba do navegador
- Clique com o botão direito no arquivo `index.html` e selecione "Abrir com" e escolha seu navegador

> **Observação**: Abra várias abas ou janelas do navegador com o mesmo arquivo `index.html` para simular múltiplos usuários conversando entre si.

### 3. Usando o chat

1. Assim que a página carregar, você receberá uma mensagem de "Você se conectou ao chat!"
2. Outros usuários verão uma notificação de que você entrou
3. Digite sua mensagem na caixa de texto e pressione a tecla **Enter** ou clique no botão "Enviar"
4. Sua mensagem aparecerá instantaneamente para todos os usuários conectados

## 📁 Estrutura do Projeto

A estrutura de arquivos é simples e direta, ideal para um projeto focado e leve.

```
chatOnline/
├── css/
│   └── style.css         # Folha de estilos principal, incluindo temas
├── node_modules/         # Dependências do Node.js
├── index.html            # Estrutura principal da página do chat (cliente)
├── package.json          # Define as dependências e metadados do projeto
├── package-lock.json     # Mantém o registro das versões das dependências
├── server.js             # Lógica do servidor WebSocket em Node.js
└── README.md             # Este arquivo
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit suas mudanças:

```bash
git commit -m 'Add some AmazingFeature'
```

4. Push para a branch:

```bash
git push origin feature/AmazingFeature
```

5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes (se houver um).

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!