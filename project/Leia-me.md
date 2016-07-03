# Desafio estagiário: HTML/CSS/JS

**Autor do projeto**: Kevin Kimiyá Takano.

### Sobre o projeto:

- Foi utilizado **JQuery** para realizar operações com JSON e interações com a tela.
- O JQuery utilizado no projeto está no [link](https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js).
- Há dois estilos .css, um para mobile (mobile.css) e um para desktops (basic-screen.css).
- Não se utilizou nenhum pré-processador e nenhum framework de automatização.
- O projeto recebe o .json do [link](https://raw.githubusercontent.com/chaordic/frontend-intern-challenge/master/Assets/urls.json).
- O arquivo container-script.js contém as funções em JQuery para realizar as animações e consumo do JSON. 
	- A animação do texto foi feita através da mudança de opacidade.
- O projeto contém funcionalidade de cópia do link encurtado para transferência. (clipboard copy)
- Todo o css contém posicionamento e tamanhos relativos.

### Divisão do HTML

```
	HTML
		HEAD
			... chamada de scripts, css.
		HEADER
			... Imagem logo 
		BODY
			... Divisão de background
					... Título
					... Subtítulo
					... Formulário
							... Divisão de entrada e botão de reset 
								... campod e texto
								... botão de reset
								... botão de encurtar / copiar
			... Contéudo 'TOP 5'
			... Conteúdo de Links
					... Link 1 , barra cinza, Hits
					... Link 2 , barra cinza, Hits
					... Link 3 , barra cinza, Hits
					... Link 4 , barra cinza, Hits
					... Link 5 , barra cinza, Hits
			... Pai-Triangulo (ajuda a posicionar o triangulo na versão mobile)
					... Triangulo (Forma o desenho do triangulo mostrado no mockup)
			... Divisão 'HITS'
					... HITS
					... Total de HITS
					... Texto 'cliques em links'
		FOOTER
			... "Chr.dc"
			... Texto 'Twitter' e 'Facebook' (Versão mobile)
			... Icones do Facebook e Twitter.
```