/*quando clicar no pokemon de lstagem temos que esconder o cartão do pokemon aberto e mostrar o cartão do pokemon correspondente
trabalhando com dois elementos
1- listagem
2- cartão 
precisamos criar duas variaveis no js com os elementos daa tela
precisamos trabalhar com um evento de clique feito pelo usuario na listagem do pokemon
-remover a classe aberto só do cartao que está aberto 
-ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokemon selecionado
-adicionar a classe ativo no pokemon selecionado
*/
const listaSelecaoPokemons =document.querySelectorAll('.pokemon')
const pokemonscard = document.querySelectorAll('.cartao-pokemon')
//precisamos trabalhar com um evento de clique feito pelo usuario na listagem do pokemon-
listaSelecaoPokemons.forEach(pokemon =>{
    pokemon.addEventListener("click",() => { 
       const cartaoPokemonAberto = document.querySelector('.aberto')
       cartaoPokemonAberto.classList.remove('aberto')
       
        //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado        
        const cartaoPokemonParaAbrir  = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
       
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')
       
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
