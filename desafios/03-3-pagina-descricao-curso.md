<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 3-3: Página de descrição do curso
</h3>

<blockquote align="center">“Não se perca tentando ser melhor que ninguém, esforce-se apenas por ser e dar o melhor de você.”</blockquote>

## :rocket: Sobre o desafio

Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

### Rota

A rota também será a `/courses`, porém o id do curso será passado via route params (ex.: `/courses/id_do_curso`). Dica: utilize o req.params para recuperar o id fornecido na rota.

```js
server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`);
});
```

### Informações

- Layout padrão
- Card do curso
- Link que redireciona para a página do curso

### Fórum

Se houver mais dúvida sobre o desafio, essa thread no fórum poderá ser útil para você 💜 
https://skylab.rocketseat.com.br/h/forum/launchbase/07c66e6d-06ff-4cfb-baf2-b5b27be6ac8b

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.