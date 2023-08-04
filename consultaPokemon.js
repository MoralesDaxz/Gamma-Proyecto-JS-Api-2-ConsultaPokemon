let body = document.querySelector('body')
//div1
let divContent = document.createElement('div')
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let ha=document.createElement('h3')
let form = document.createElement('form')
let input = document.createElement('input')
let btn = document.createElement('button')
//div2
let hName = document.createElement('h2')
let hId = document.createElement('h4')
let hExp= document.createElement('h4')
let hAlt = document.createElement('h4')
let hpeso=document.createElement('h4')

/* let pname= document.createElement('p')
let pname= document.createElement('p')
let pname= document.createElement('p') */

body.appendChild(divContent)
divContent.appendChild(div1)
divContent.appendChild(div2)
div1.appendChild(ha)
div1.appendChild(form)
div1.appendChild(input)
div1.appendChild(btn)
div2.appendChild(hName)
div2.appendChild(hId)
div2.appendChild(hExp)
div2.appendChild(hAlt)
div2.appendChild(hpeso)


body.style=`background-color:black;display:flex; justify-content:center`
divContent.style=`width:600px;display:flex;flex-direction:column;align-items:center;background-color: #718787`
div1.style=`width:200px;height:130px;display:flex; flex-direction:column; background-color:#cfd4d4;align-items:center; gap:5px`
ha.innerText=`Consulta PoKéMon`
btn.innerText=`Consultar`
div2.style=`width:400px;height:400px;display:flex; flex-direction:column;`

async function  getPokemons(a){
    let promiseA = await fetch(`https://pokeapi.co/api/v2/pokemon/${a}`)
    let resultPromise = await promiseA.json()
    console.log(`${resultPromise.name}`,resultPromise);

    
async function printDetails(){
/*     let name = resultPromise.name
    let id = resultPromise.id
    let experiencia = resultPromise.base_experiencie
    let altura = resultPromise.height
    let peso = resultPromise.weight */

    hName.innerText= resultPromise.name//name
    hId.innerText=resultPromise.id//id
    hExp.innerText=resultPromise.base_experience//experiencia*1
    hAlt.innerText=resultPromise.height//altura
    hpeso.innerText=resultPromise.weight//peso

/*     Necesitamos pintar en el DOM la mayoria de su información y en este orden:

    Lista de los juegos en los que ha aparecido
    Tipo ( fire, water ...)
    Lista de sus movimientos ( NO 'abilities')
    Item que usa
    Lista de las áreas de localización
    Galeria de TODAS sus imagenes, exceptuando las imagenes dentro del objeto versions en sprites
    Una Card de Stats que va a tener las siguientes características:
    HP
    Ataque
    Defensa
    Ataque especial
    Defensa especial
    Velocidad */
   
}
printDetails()
return resultPromise
}//END --> getPokemons
btn.addEventListener('click',()=>{
    getPokemons(input.value)
   
})