let body = document.querySelector("body");
let count = 0;
let divContent1 = document.createElement("div");
let divContent3 = document.createElement("div");

//div1
let divContent2 = document.createElement("div");
let div1 = document.createElement("div");
let div1Btns = document.createElement("div");
let div2 = document.createElement("div");
let divDetail = document.createElement("div");
let divElement1 = document.createElement("div");
let divElement2 = document.createElement("div");
let divElement3 = document.createElement("div");
let divElement4 = document.createElement("div");
let divElement5 = document.createElement("div");
let divImg = document.createElement("div");
let ha = document.createElement("h2");
let form = document.createElement("form");
let input = document.createElement("input");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");

//div2
let hName = document.createElement("h4");
let hId = document.createElement("h4");
let hExp = document.createElement("h4");
let hAlt = document.createElement("h4");
let hpeso = document.createElement("h4");
let pName = document.createElement("p");
let pId = document.createElement("p");
let pExp = document.createElement("p");
let pAlt = document.createElement("p");
let pPeso = document.createElement("p");
//div3
let div3 = document.createElement("div");
let div3Sec1 = document.createElement("section");
let div3Sec2 = document.createElement("section");
let div3Art1 = document.createElement("article");
let div3Art2 = document.createElement("article");
let div3Art3 = document.createElement("article");
let div3Art4 = document.createElement("article");
let divType = document.createElement("div");
let hType1 = document.createElement("h4");
let hList = document.createElement("h4");
let divList = document.createElement("div");
let ul1 = document.createElement("ul");
//div4

let div4 = document.createElement("div");
let art1Div4 = document.createElement("article");
let art2Div4 = document.createElement("article");
let sec1Art1Div4 = document.createElement("section");
let sec2Art1Div4 = document.createElement("section");
let sec1Art2Div4 = document.createElement("section");
let sec2Art2Div4 = document.createElement("section");
let hMove = document.createElement("h4");
let hItems = document.createElement("h4");

//div5
let div5 = document.createElement("div");
let art1Div5 = document.createElement("article");
let art2Div5 = document.createElement("article");
let sec1Art1Div5 = document.createElement("section");
let sec1Art2Div5 = document.createElement("section");
let hEncuentro = document.createElement("h4");

//div6
let div6 = document.createElement("div");

body.appendChild(divContent1);
body.appendChild(divContent2);
body.appendChild(divContent3);
divContent2.appendChild(div1);
divContent2.appendChild(div2);
divContent2.appendChild(div3);
divContent2.appendChild(div4);
divContent2.appendChild(div5);
divContent2.appendChild(div6);

div1.appendChild(ha);
div1.appendChild(form);
div1.appendChild(input);
div1.appendChild(div1Btns);
div1Btns.appendChild(btn1);
div1Btns.appendChild(btn2);

div2.appendChild(divDetail);
div2.appendChild(divImg);
divDetail.appendChild(divElement1);
divDetail.appendChild(divElement2);
divDetail.appendChild(divElement3);
divDetail.appendChild(divElement4);
divDetail.appendChild(divElement5);

divElement1.appendChild(hName);
divElement2.appendChild(hId);
divElement3.appendChild(hExp);
divElement4.appendChild(hAlt);
divElement5.appendChild(hpeso);
divElement1.appendChild(pName);
divElement2.appendChild(pId);
divElement3.appendChild(pExp);
divElement4.appendChild(pAlt);
divElement5.appendChild(pPeso);

div3.appendChild(div3Sec1);
div3.appendChild(div3Sec2);
div3Sec1.appendChild(div3Art1);
div3Sec1.appendChild(div3Art2);
div3Sec2.appendChild(div3Art3);
div3Sec2.appendChild(div3Art4);
div3Art1.appendChild(hType1);
div3Art2.appendChild(hList);
div3Art3.appendChild(divType);
div3Art4.appendChild(divList);
divList.appendChild(ul1);

div4.appendChild(art1Div4);
div4.appendChild(art2Div4);
art1Div4.appendChild(sec1Art1Div4);
art1Div4.appendChild(sec2Art1Div4);
art2Div4.appendChild(sec1Art2Div4);
art2Div4.appendChild(sec2Art2Div4);
sec1Art1Div4.appendChild(hMove);
sec2Art1Div4.appendChild(hItems);

div5.appendChild(art1Div5);
div5.appendChild(art2Div5);
art1Div5.appendChild(sec1Art1Div5);
art2Div5.appendChild(sec1Art2Div5);
sec1Art1Div5.appendChild(hEncuentro);

body.style = `min-width: 1200px;background-color:black;display:flex; justify-content:center;align-items:center`;
divContent1.style = `width:35%;display:flex;flex-wrap:wrap; gap1%;`;
divContent2.style = `gap:1%;width:30%;height:530px;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color: #718787`;
div1.style = `;width:100%;height:130px;display:flex; flex-direction:column; background-color:#cfd4d4;align-items:center; gap:5px`;
div1Btns.style = `display:flex;flex-direction:row;justify-content:space-around;width:90%`;
div2.style = `width:100%;display:flex; flex-direction:row;height:auto;background-color:white;`; //`display:none`;
divDetail.style = `margin-left:2%;width:50%;display:flex; flex-direction:column; justify-content:center;`;
divElement1.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
divElement2.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
divElement3.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
divElement4.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
divElement5.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
hName.style = `height:20px;margin:0`;
hId.style = `height:20px;margin:0`;
hExp.style = `height:20px;margin:0`;
hAlt.style = `height:20px;margin:0`;
hpeso.style = `height:20px;margin:0`;
pName.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;
pId.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;
pExp.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;
pAlt.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;
pPeso.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;

div3.style = `width:100%;display:flex;flex-direction:column;justify-content:start;background-color:white;height:110px`; //`display:none`;
div3Sec1.style = `display:flex;flex-direction:row; justify-content:space-around`;
div3Sec2.style = `display:flex;flex-direction:row; justify-content:space-around`;
hType1.style = `text-align:center;margin:1% auto`;
hList.style = `text-align:center;margin:1% auto;`;

div3Art3.style = `display:flex; align-items:center;justify-content:center;width:50%;`;
div3Art4.style = `width:50%`;
divType.style = `display:flex;justify-content:space-evenly;gap:20%`;
ul1.style = `margin:0`;

div4.style = `width:100%;display:flex;flex-direction:column;background-color:white;`;
art1Div4.style = `display:flex;`;
art2Div4.style = `display:flex;`;
sec1Art1Div4.style = `display:flex;flex-direction:column;width:50%`;
sec2Art1Div4.style = `display:flex;flex-direction:column;width:50%`;
sec1Art2Div4.style = `margin-left:2%;display:flex;flex-direction:column;width:50%;height:62px;overflow-y:scroll;`;
sec2Art2Div4.style = `display:flex;flex-direction:column;width:50%`;
hMove.style = `margin:0;text-align:center`;
hItems.style = `margin:0;text-align:center`;

div5.style = `width:100%;display:flex;flex-direction:row;background-color:white;`;
art1Div5.style = `width:50%`;
art2Div5.style = `width:50%`;
sec1Art2Div5.style = `height:62px;overflow-y:scroll;`;

ha.innerText = `Consulta PoKéMon`;
btn1.innerText = `Consultar`;
btn2.innerText = `Clear`;
hType1.innerText = `Tipo`;
hList.innerText = `Juegos`;
hMove.innerText = `Movimientos`;
hItems.innerText = `Items`;
hEncuentro.innerText = `Areas de encuentro`;
input.setAttribute("type", "text");

//------------------- Data por nombre -> dado en input.value al llamar funcion -> getPokemons(a)
async function getPokemons(a) {
  let promiseA = await fetch(`https://pokeapi.co/api/v2/pokemon/${a}`);
  let resultPromise = await promiseA.json();
  let pokId = await resultPromise.id;
  let pokList = await resultPromise.game_indices;
  //console.log(`${resultPromise.name}`, resultPromise);

  //------------------- buscamos Imagen del pokemon front-default - por 'id' dado en primeras lineas getPokemons(a)
  let promiseB = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokId}`);
  let resultPromiseB = await promiseB.json();
  let pokImg = await resultPromiseB.sprites.front_default;
  //

  //-------------------
  async function printDetails() {
    let name = resultPromise.name;
    let id = resultPromise.id;
    let experiencia = resultPromise.base_experience;
    let altura = resultPromise.height;
    let peso = resultPromise.weight;

    hName.innerText = `Nombre:`;
    hId.innerText = `Id:`;
    hExp.innerText = `Experiencia: `;
    hAlt.innerText = `Altura:`;
    hpeso.innerText = `Peso: `;
    pName.innerText = `${name}`;
    pId.innerText = `${id}`;
    pExp.innerText = `${experiencia}`;
    pAlt.innerText = ` ${altura}`;
    pPeso.innerText = `${peso}`;
    divImg.style = `width:50%;height:auto;background-image: url('${pokImg}');background-size:50%;background-repeat:no-repeat;background-position: center;`;
  }

  async function getListGames() {
    pokList.forEach((element) => {
      let res = element.version.name;
      let li = document.createElement("li");
      ul1.appendChild(li);
      li.innerText = `${res}`;
      li.style = `text-transform:capitalize;margin:0;font-size:14px;font-weight:bold`;
      divList.style = `width:100%;height:65px;overflow-y:scroll;`;
      //console.log(`Juego ${element.version.name} Url:${element.version.url}`);
      return ul1;
    });
  }
  // consultara solo una vez por pokemon get type
  async function getType() {
    let promiseC = await resultPromise.types;
    promiseC.forEach((element) => {
      let a = document.createElement("h4");
      a.innerText = `${element.type.name}`;
      a.style = `text-transform:capitalize;margin:1% auto;`;
      divType.appendChild(a);
      input.disabled = true;
    });
    return promiseC;
  }

  async function getMoves() {
    let promiseD = await resultPromise.moves;
    promiseD.forEach((i) => {
      count++;
      let h = document.createElement("h5");
      h.innerText = `${count} - ${i.move.name}`;
      h.style = `text-transform: capitalize;margin:0`;
      sec1Art2Div4.appendChild(h);
    });
    return (count = 0);
  }
  const getItems = async () => {
    let promiseE = await resultPromise.held_items;
    promiseE.forEach((i) => {
      count++;
      let h = document.createElement("h5");
      h.innerText = `${count} - ${i.item.name}`;
      h.style = `text-transform: capitalize;margin:0px;;margin-left:2%`;
      sec2Art2Div4.appendChild(h);
    });
  };
  const getAreas = async () => {
    let promiseF = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokId}/encounters`
    );
    let a = await promiseF.json();

    a.forEach((i) => {
      let h = document.createElement("h5");
      h.innerText = `${i.location_area.name}`;
      h.style = `text-transform: capitalize;margin:0px;;margin-left:2%`;
      sec1Art2Div5.appendChild(h);
    });
  };
  const getPictures = async () => {

    let promiseG = await resultPromise.sprites;

    for (const key in promiseG) {
      
      let d = document.createElement("div");

      if (promiseG[key] !== null) {
        let sprites = await fetch(promiseG[key]);
        d.style = `width:50px;height:50px;background-image: url('${sprites.url}');background-position:center;background-size:cover`;
        divContent1.appendChild(d);
      }
    }
  };
  /*  if (i!=null) {
       let d=document.createElement('div')
        d.style=`width:50px;height:50px;background-image: url('${i}');background-position:center`
        return divContent1.appendChild(d)

      } */
  /*    
    Galeria de TODAS sus imagenes, exceptuando las imagenes dentro del objeto versions en sprites
    
    Una Card de Stats que va a tener las siguientes características:
    HP
    Ataque
    Defensa
    Ataque especial
    Defensa especial
    Velocidad */

  printDetails();
  getType();
  getListGames();
  getMoves();
  getItems();
  getAreas();
  getPictures();
  return resultPromise;
} //END --> getPokemons

btn1.addEventListener("click", () => {
  btn1.disabled = true;
  //div2.style=``
  //div3.style=``
  switch (input.value) {
    case "":
      alert(`Escriba PoKeMoN a consultar`);
      btn1.disabled = false;
      break;
    case " ":
      alert(`Escriba PoKeMoN a consultar`);
      btn1.disabled = false;
      break;
    default:
      getPokemons(input.value);
      break;
  }
});

btn2.addEventListener("click", () => {
  btn1.disabled = false;
  location.reload();
});
