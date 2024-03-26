

const pokemons = []


function carregarpokemons(){


    const pokemon1 = {

        id: 1,
        nome : "bulbassaur",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }
     
    pokemons.push(pokemon1)


    const pokemon2 = {

        id: 2,
        nome : "ivysaur",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    }
     
    pokemons.push(pokemon2)



    const pokemon3 = {

        id: 3,
        nome : "venosaur",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    }
     
    pokemons.push(pokemon3)

    const pokemon4 = {

        id: 4,
        nome : "charmander",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    }
     
    pokemons.push(pokemon4)

    const pokemon5 = {

        id: 5,
        nome : "charmeleon",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    }
     
    pokemons.push(pokemon5)

    const pokemon6 = {

        id: 6,
        nome : "charizard",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    }
     
    pokemons.push(pokemon6)

    const pokemon7 = {

        id: 7,
        nome : "squirtle",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    }
     
    pokemons.push(pokemon7)

    const pokemon8 = {

        id: 8,
        nome : "wartortle",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    }
     
    pokemons.push(pokemon8)

    const pokemon9 = {

        id: 9,
        nome : "blastoise",
        imagem : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    }
     
    pokemons.push(pokemon1)


     for( let index = 0 ; index < pokemons.length; index ++){
        const pokemon = pokemons[index]
        adicionarCardPokemon(pokemon) 
    }


}
    
 function adicionarCardPokemon(pokemon){

      const imagemElemento = document.createElement("img")

      imagemElemento.setAttribute("src", pokemon.imagem)

      const divElemento = document.getElementById("conteudo-pokemon")
      
      divElemento.appendChild(imagemElemento)

    }
