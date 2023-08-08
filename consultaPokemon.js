let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'clear.css';
document.head.appendChild(link);

let body = document.querySelector("body");
let count = 0;
let section1= document.createElement('section')
let section2= document.createElement('section')
let divContent1 = document.createElement("div");
let divContent3 = document.createElement("div");

//divContent1
let divImgContent1 = document.createElement("div");
//divContent2
let divContent2 = document.createElement("div");
//divContent3
let divContent3Card = document.createElement("div");
let art1Content3 = document.createElement("article");
let art2Content3 = document.createElement("article");
let art3Content3 = document.createElement("article");
let art4Content3 = document.createElement("article");
let art5Content3 = document.createElement("article");
let art6Content3 = document.createElement("article");
let statHp = document.createElement("h4");
let statAtk = document.createElement("h4");
let statDef = document.createElement("h4");
let statAtkEsp = document.createElement("h4");
let statDefEsp = document.createElement("h4");
let statVel = document.createElement("h4");
let pHp = document.createElement("p");
let pAtk = document.createElement("p");
let pDef = document.createElement("p");
let pAtkEsp = document.createElement("p");
let pDefEsp = document.createElement("p");
let pVel = document.createElement("p");

//div1
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
let ha = document.createElement("h4");
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

body.appendChild(section1);
body.appendChild(section2);

section1.appendChild(divContent2)
section1.appendChild(divContent3)
section2.appendChild(divContent1)
divContent1.appendChild(divImgContent1);

divContent2.appendChild(div1);
divContent2.appendChild(div2);
divContent2.appendChild(div3);
divContent2.appendChild(div4);
divContent2.appendChild(div5);
divContent2.appendChild(div6);

divContent3.appendChild(divContent3Card);
divContent3Card.appendChild(art1Content3);
divContent3Card.appendChild(art2Content3);
divContent3Card.appendChild(art3Content3);
divContent3Card.appendChild(art4Content3);
divContent3Card.appendChild(art5Content3);
divContent3Card.appendChild(art6Content3);
art1Content3.appendChild(statHp);
art1Content3.appendChild(pHp);
art2Content3.appendChild(statAtk);
art2Content3.appendChild(pAtk);
art3Content3.appendChild(statDef);
art3Content3.appendChild(pDef);
art4Content3.appendChild(statAtkEsp);
art4Content3.appendChild(pAtkEsp);
art5Content3.appendChild(statDefEsp);
art5Content3.appendChild(pDefEsp);
art6Content3.appendChild(statVel);
art6Content3.appendChild(pVel);

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

body.style = `padding-top:1%;max-width: 1300px;height:100vh;background-image:url('poke-body-3.jpg');background-size:cover;background-repeat:no-repeat;background-position: center;display:flex; flex-direction:column ;align-items:center;justify-content:start`;
section1.style=`gap:5%;;width:800px;height:100vh;display:flex; flex-direction:row ;align-items:center;justify-content:center;gap;3%`
section2.style=`margin-top:5%;margin-bottom:10px;width:50%:height:200vh;display:flex; flex-direction:row ;align-items:center;justify-content:center`
divContent1.style=`display:none`
divContent2.style = `gap:1%;width:60%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:start;`;
//divContent2.style=`display:none`
divContent3.style=`display:none`
div1.style = `width:350px;height:180px;display:flex; flex-direction:column; background-color:rgba(231,207,106,0.5);justify-content:center;align-items:center; gap:5px;border:solid 2px turquoise;border-radius:3px`;
div1Btns.style = `display:flex;flex-direction:row;justify-content:space-around;width:90%`;
ha.style=`width:100%;height:65px;background-image:url('titulo.png');background-size:80%;background-position:center;background-repeat:no-repeat`
input.style=`font-weight:800;margin:0;background:transparent;border-color: turquoise; border-radius:3px;text-align:center;outline-color:rgb(236,217,136);height:25px`

divImgContent1.style = `width:100%;display:flex;flex-wrap:wrap-reverse;justify-content:center;gap:1%`;

divContent3Card.style = `display:flex;flex-direction:column;justify-content:center;width:60%;height:180px;border: solid 3px #0062ff; border-radius:3px;`;
art1Content3.style = `width:100%;display:flex;flex-direction:row;justify-content:start; align-items:baseline;gap:5%;`;
art2Content3.style = `width:100%;display:flex;flex-direction:row;justify-content:start; align-items:baseline;gap:5%;`;
art3Content3.style = `width:100%;display:flex;flex-direction:row;justify-content:start; align-items:baseline;gap:5%;`;
art4Content3.style = `width:100%;display:flex;flex-direction:row;justify-content:start; align-items:baseline;gap:5%;`;
art5Content3.style = `width:100%;display:flex;flex-direction:row;justify-content:start; align-items:baseline;gap:5%;`;
art6Content3.style = `width:100%;display:flex;flex-direction:row;justify-content:start; align-items:baseline;gap:5%;`;
statHp.style = `font-weight:800;margin:0`;
statAtk.style = `font-weight:800;margin:0`;
statDef.style = `font-weight:800;margin:0`;
statAtkEsp.style = `font-weight:800;margin:0`;
statDefEsp.style = `font-weight:800;margin:0`;
statVel.style = `font-weight:800;margin:0`;
pHp.style = `margin:0`;
pAtk.style = `margin:0`;
pDef.style = `margin:0`;
pAtkEsp.style = `margin:0`;
pDefEsp.style = `margin:0`;
pVel.style = `margin:0`;
div2.style=`display:none`
divDetail.style = `margin-left:2%;width:50%;display:flex; flex-direction:column; justify-content:center;`;
divElement1.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
divElement2.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
divElement3.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
divElement4.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
divElement5.style = `display:flex;justify-content:start;align-items:baseline;gap:3px;`;
hName.style = `font-weight:800;height:20px;margin:0`;
hId.style = `font-weight:800;height:20px;margin:0`;
hExp.style = `font-weight:800;height:20px;margin:0`;
hAlt.style = `font-weight:800;height:20px;margin:0`;
hpeso.style = `font-weight:800;height:20px;margin:0`;
pName.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;
pId.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;
pExp.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;
pAlt.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;
pPeso.style = `height:20px;margin:0;font-size:16px; text-transform:capitalize`;

div3.style=`display:none`
div3Sec1.style = `display:flex;flex-direction:row; justify-content:space-around`;
div3Sec2.style = `display:flex;flex-direction:row; justify-content:space-around`;
hType1.style = `font-weight:800;text-align:center;margin:1% auto`;
hList.style = `font-weight:800;text-align:center;margin:1% auto;`;

div3Art3.style = `display:flex; align-items:center;justify-content:center;width:50%;`;
div3Art4.style = `width:50%`;
divType.style = `display:flex;justify-content:space-evenly;gap:20%`;
ul1.style = `margin:0`;

div4.style=`display:none`
art1Div4.style = `display:flex;`;
art2Div4.style = `display:flex;flex-direction:row;align-items:baseline`;
sec1Art1Div4.style = `display:flex;flex-direction:column;width:60%`;
sec2Art1Div4.style = `display:flex;flex-direction:column;width:40%`;
sec1Art2Div4.style = `margin-left:2%;display:flex;flex-direction:column;justify-content:start;width:60%;overflow-y:scroll;height:95px;`;
sec2Art2Div4.style = `display:flex;flex-direction:column;width:40%`;
hMove.style = `font-weight:800;margin:0;text-align:center`;
hItems.style = `font-weight:800;margin:0;text-align:center`;

div5.style=`display:none`
art1Div5.style = `width:30%;display:flex;justify:content:center;align-items:center;`;
art2Div5.style = `width:70%`;
sec1Art2Div5.style = `height:62px;overflow-y:scroll;`;
hEncuentro.style = `margin-left:1%;width:150px;font-weight:800;text-align:center`;

statHp.innerText = `Hp:`;
statAtk.innerText = `Ataque:`;
statDef.innerText = `Defensa:`;
statAtkEsp.innerText = `Ataque Esp.:`;
statDefEsp.innerText = `Def Esp.:`;
statVel.innerText = `Velocidad:`;
//ha.innerText = `Consulta PoKéMon`;
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

  console.log(resultPromise.sprites);
console.log(resultPromise.sprites.other.dream_world.front_default);
  console.log(`${resultPromise.name}`);

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
    divImg.style = `width:50%;height:100px;background-image: url('${pokImg}');background-size:50%;background-repeat:no-repeat;background-position: center;`;
  }

  async function getListGames() {
    pokList.forEach((element) => {
      let res = element.version.name;
      let li = document.createElement("li");
      ul1.appendChild(li);
      li.innerText = `${res}`;
      li.style = `text-transform:capitalize;margin:0;font-size:14px;font-weight:bold`;
      divList.style = `width:100%;height:68px;overflow-y:scroll;`;
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
    count = 0;
    let promiseG = await resultPromise.sprites;
    for (const key in promiseG) {
      let d = document.createElement("div");
     
      if (promiseG[key] !== null) {
        if (key !== "other" && key !== "versions") {
          let sprites = promiseG[key];
          d.style = `width:16rem;height:16rem;background-image: url('${sprites}');background-repeat:no-repeat;background-position:center;background-size:75%`;
        } else if (key === "other") {
          for (const other in promiseG[key]) {
            for (const another in promiseG[key][other]) {
              if (promiseG[key][other][another] !== null) {
                let othersImg = document.createElement("div");
                let otherSprites = promiseG[key][other][another];
                othersImg.style = `width:16rem;height:16rem;background-image: url('${otherSprites}');background-repeat:no-repeat;background-position:center;background-size:75%`;
                divImgContent1.append(othersImg);
              }
            }
          }
        } 
        divImgContent1.append(d);
      }
    }//end for Principal
  };
  const getStats = async () => {
    let promiseH = await resultPromise.stats;
    let hp = await promiseH[0].base_stat;
    let atk = await promiseH[1].base_stat;
    let def = await promiseH[2].base_stat;
    let atkEsp = await promiseH[3].base_stat;
    let defEsp = await promiseH[4].base_stat;
    let vel = await promiseH[5].base_stat;
    pHp.innerText = `${hp}`;
    pAtk.innerText = `${atk}`;
    pDef.innerText = `${def}`;
    pAtkEsp.innerText = `${atkEsp}`;
    pDefEsp.innerText = `${defEsp}`;
    pVel.innerText = `${vel}`;
  };

  printDetails();
  getType();
  getListGames();
  getMoves();
  getItems();
  getAreas();
  getPictures();
  getStats();

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
      divContent1.style = `border-radius:3px;width:100%;height:98%;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.5)`;
      
      divContent3.style = `width:40%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(81, 164, 246,0.5); border-radius:3px;`;
      div2.style = `border-radius:3px;width:100%;display:flex; flex-direction:row;align-items:center;height:auto;background-color:rgba(231,207,106,0.8)`;
      div3.style = `border-radius:3px;width:100%;display:flex;flex-direction:column;justify-content:start;background-color:rgba(231,207,106,0.8);height:110px`;
      div4.style = `border-radius:3px;width:100%;height:150px;display:flex;flex-direction:column;background-color:rgba(231,207,106,0.8)`;
      div5.style = `border-radius:3px;width:100%;height:110px;display:flex;flex-direction:row;align-items:center;background-color:rgba(231,207,106,0.8)`;
      break;
  }
});

btn2.addEventListener("click", () => {
  btn1.disabled = false;
  location.reload();
});
