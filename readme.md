# Como usar
Para instalar o webpack, basta jogar o arquivo `webpack.config.js` na raiz do projeto e
configurar os entries e output segundo o contexto da estrutura de pastas desejado.

Após isso, é só instalar a dependências necessárias com o seguinte comando:
```
npm install --save-dev webpack webpack-cli webpack-dev-server sass-loader postcss-loader postcss-cli node-sass imagemin-webpack-plugin image-webpack-loader file-loader extract-loader cssnano css-loader copy-webpack-plugin babel-loader autoprefixer @babel/preset-env @babel/core
```

## Como Rodar: 
com `watch`:  `npm run watch`
com `server`: `npm run serve`
compilar apenas uma vez: `npm start`