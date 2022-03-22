const fetchPokemon =() =>{
    const pokename = document.getElementById("pokename");
    //console.log(pokename);
    let pokeinput = pokename.value.toLowerCase();
    
    const url = "https://pokeapi.co/api/v2/pokemon/"+ pokeinput;
    fetch(url).then((res)=> {
       // console.log(res);
       if(res.status!="200" ){
            console.log(res);
            pokeimage("./img/sad-pikachu.gif")
            setPokename(pokeinput +"?")
            setPokeType("???");
            SetPokeAtack("???")
            SetPokeDefense("???");
            SetPokeHP("???");
            SetPokeWeight("???");
       }
       else{
        return res.json();
       }
       
    }).then((data) =>{
        console.log(data);
        let pokeApiName=data.name;
        setPokename(pokeApiName)

        let pokeimg= data.sprites.front_default;
        //console.log(pokeimg);
        pokeimage(pokeimg)

        let poketype=data.types[0].type.name;
        setPokeType(poketype);
        
        let pokeatack = data.stats[1].base_stat;
        SetPokeAtack(pokeatack)

        let pokedefense = data.stats[2].base_stat;
        SetPokeDefense(pokedefense);

        let pokeHP = data.stats[0].base_stat;
        SetPokeHP(pokeHP);

        let pokeweight = data.weight;
        SetPokeWeight(pokeweight);

        
        
    })
}

const pokeimage = (url) =>{
    const pokeimg =document.getElementById("pokeimg");
    pokeimg.src=url;

}

const setPokename= (name) =>{
document.getElementById("pokeApiName").innerHTML="Nombre: "+capitalizeFirstLetter(name);
}
const setPokeType= (name) =>{
    document.getElementById("pokeApiType").innerHTML="Tipo: "+capitalizeFirstLetter(name);
    }
const SetPokeAtack= (name) =>{
        document.getElementById("pokeApiAtack").innerHTML="Ataque: "+ name;
        }

        const SetPokeDefense= (name) =>{
            document.getElementById("pokeApiDefense").innerHTML="Defensa: "+ name;
            }

const SetPokeHP= (name) =>{
    document.getElementById("pokeApiHP").innerHTML="PS: "+ name;
    }

const SetPokeWeight= (name) =>{
    document.getElementById("pokeApiWeight").innerHTML="Peso: "+ name+ "hg";
    }


    
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  document.getElementById('pokename').addEventListener('keydown', inputCharacters);

  function inputCharacters(event) {
 
    if (event.keyCode == 13) {
      fetchPokemon();
    }
  
  }
  



