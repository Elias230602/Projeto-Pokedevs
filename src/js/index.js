//passo 1 - precisamos criar uma variavel no JS pra trabalhar com a listagem de pokedevs
const ListaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//passo 2 identificar o evento de clique no elemento de listagem
ListaSelecaoPokedevs.forEach(pokedev =>
{pokedev.addEventListener("click", () =>{
    //passo 3 remover a classe aberto so do cartao que ta aberto
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
    //passo 4 ao clicar em um pokedev da listagem pegamos o id desse pokedev para saber qual cartao abrir
    const idPokedevSelecionado = pokedev.attributes.id.value;

    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
CartaoPokedevParaAbrir.classList.add("aberto");
//passo 5 remover a classe ativo que marca o pokedev selecionado na listagem
const pokedevAtivoNaListagem = document.querySelector(".ativo");
pokedevAtivoNaListagem.classList.remove("ativo")

//passo 6 adicionar a classe ativo no pokedev selecionado na listagem
const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
pokedevSelecionadoNaListagem.classList.add("ativo");


})
})