# Meu E-commerce

Este projeto é uma loja virtual fictícia criada para praticar o desenvolvimento de páginas com React, TypeScript e Tailwind CSS. Nesta página, é possível visualizar os produtos, ver a página de detalhes do produto e montar um carrinho de compras.

Os produtos são exemplos guardados em um arquivo JSON. O projeto não possui um sistema real de vendas ou banco de dados.

## Funcionalidades do Projeto

### Ver os produtos disponíveis na página inicial. 
- Os produtos são requisitados através do **Axios** e carregados na página utilizando **useEffect**.
### Adicionar produtos ao carrinho.
- Ao clicar no ícone, é possível adicionar um produto ao carrinho de compras.
### Acompanhar a quantidade de itens pelo ícone do carrinho.
- A quantidade de itens adicionados ao carrinho irá aparecer em cima do ícone do carrinho de compras no cabeçalho da página, este estado do carrinho é gerenciado utilizando **Context API** no **React**.
### Abrir a página de detalhes de um produto.
- Ao clicar na foto de um produto, o usuário é levado para uma página com uma descrição detalhada do produto, onde também é possível ver o valor e adicionar o mesmo ao carrinho de compras.
### Aumentar ou diminuir a quantidade de cada produto.
- Dentro da página de carrinho do usuário, é possível adicionar ou remover unidades de um mesmo produto.
### Ver o subtotal dos produtos e o valor total do carrinho.
- O valor total e o subtotal de cada produto é alterado conforme o usuário adiciona ou remove as unidades.
### Receber uma mensagem de confirmação ao adicionar um produto.
- Utilizando **react-hot-toast**, uma mensagem de confirmação aparece no topo da tela, indicando que um produto foi adicionado ao carrinho de compras.

## Tecnologias utilizadas

- **React**: cria componentes reutilizáveis e renderiza a tela conforme o usuário interage.
- **TypeScript**: ajuda a organizar os dados e encontrar erros durante o desenvolvimento.
- **Vite**: inicia o projeto durante o desenvolvimento e prepara os arquivos para publicação.
- **Tailwind CSS**: ajuda a definir a estilização e o design responsivo das páginas.
- **React Router**: permite navegar entre as páginas da aplicação.
- **Context API**: mantém os itens do carrinho disponíveis em diferentes páginas.
- **Axios**: faz requisições para buscar os produtos.
- **json-server**: usa o arquivo `db.json` para simular um servidor de produtos.
- **react-hot-toast** e **react-icons**: mostram mensagens e ícones na interface.

## Como o projeto está organizado

O projeto separa as páginas, as partes reutilizadas da interface, o carrinho e a busca de produtos. Assim, cada área tem uma responsabilidade:

```text
.
├── db.json                 # Produtos de exemplo
├── src/
│   ├── components/         # Cabeçalho e estrutura comum das páginas
│   ├── context/            # Informações e ações do carrinho
│   ├── pages/              # Página inicial, detalhes e carrinho
│   ├── services/           # Configuração da busca de produtos
│   ├── App.tsx             # Caminhos entre as páginas
│   ├── index.css           # Estilos gerais e import do Tailwind CSS
│   └── main.tsx            # Inicialização da aplicação
└── package.json            # Dependências e comandos do projeto
```

- A página inicial mostra os produtos disponíveis e o preço em reais.
- A página de detalhes apresenta mais informações sobre um produto.
- A página do carrinho permite conferir, alterar e ver o valor total dos itens escolhidos.
- O cabeçalho é um componente que aparece em todas as páginas e mostra um atalho para o carrinho e para a home.
- O carrinho fica disponível enquanto a aplicação está aberta.
- O arquivo `db.json` guarda os produtos de exemplo, com título, descrição, preço e imagem.
- A aplicação busca os produtos no servidor simulado em `http://localhost:3000`.

## Como executar

Para executar o projeto, instale o [Node.js](https://nodejs.org/) e o npm.

1. Na pasta do projeto, instale as dependências:

   ```bash
   npm install
   ```

2. Abra um terminal e inicie o servidor de produtos:

   ```bash
   npm run server
   ```

   Esse servidor disponibiliza os produtos para a aplicação.

3. Abra outro terminal e inicie o site:

   ```bash
   npm run dev
   ```

4. Acesse no navegador o endereço mostrado no terminal, geralmente `http://localhost:5173`.

Mantenha os dois terminais abertos enquanto estiver usando o projeto.

## Scripts disponíveis

| Comando | Para que serve |
| --- | --- |
| `npm run dev` | Abre o site para desenvolvimento. |
| `npm run server` | Inicia o servidor que fornece os produtos de exemplo. |
| `npm run build` | Verifica o projeto e prepara os arquivos para publicação. |
| `npm run preview` | Mostra uma prévia dos arquivos preparados para publicação. |
| `npm run lint` | Procura problemas de padrão no código. |

## Sobre este projeto

Este é um projeto de estudo e demonstração. Não há cadastro de usuários, finalização de compras ou pagamento. Os itens do carrinho não são salvos: ao atualizar a página, o carrinho fica vazio novamente. O servidor usado aqui apenas fornece os produtos de exemplo e não é um sistema real de loja.
