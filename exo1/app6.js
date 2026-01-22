//------------------------creation de carte----------------------//
// <article class="card">
//     <div class="cardTitle">
//         <div class="cardIcon"></div>
//         <div class="cardText">
//             <h2 class="cardTitleText"></h2>
//             <p class="cardTextArticle"></p>
//         </div>
//     </div>
//     <div class="cardActive">
//         <button class="removeBut">Remove</button>
//         <button class="actifBut">
//             <div class="slideBut"></div>
//         </button>
//     </div>
// </article>
let display = "All";

function createCard(icone,titre,texte,actif,color,index){
    let classBut,classSlide = "";
    let parent = document.querySelector(".cardSection");
    let article = document.createElement("article");
    article.setAttribute("class","card");
    const div1 = document.createElement("div");
    div1.setAttribute("class","cardTitle");
    const div2 = document.createElement("div");
    div2.setAttribute("class","cardIcon"+" "+color);
    const i = document.createElement("i");
    i.setAttribute("class",icone);
    const div3 = document.createElement("div");
    div3.setAttribute("class","cardText");
    const h2 = document.createElement("h2");
    h2.setAttribute("class","cardTitleText");
    const p = document.createElement("p");
    p.setAttribute("class","cardTextArticle");
    const div4 = document.createElement("div");
    div4.setAttribute("class","cardActive");
    const but1 = document.createElement("button");
    but1.setAttribute("class","removeBut");
    const but2 = document.createElement("button");
    if(actif){
        classBut=" bkred";
        classSlide=" butOn";
    }else{
        classBut=" bkgrey";
        classSlide=" butOff";
    }
    but2.setAttribute("class","actifBut"+classBut);
    const div5 = document.createElement("div");
    div5.setAttribute("class","slideBut"+classSlide);
    div3.appendChild(h2);
    div3.appendChild(p);
    div2.appendChild(i);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div4.appendChild(but1);
    div4.appendChild(but2);
    but2.appendChild(div5);
    article.appendChild(div1);
    article.appendChild(div4);
    parent.appendChild(article);
    article.id=index;
    but1.innerHTML = "Remove";
    h2.innerHTML = titre;
    p.innerHTML = texte;
    but2.addEventListener("click",slideClick);
}
function affichageBut(e){
    const parent = document.querySelector(".cardSection");
    const art = document.querySelectorAll(".card").forEach((arti)=>{
        parent.removeChild(arti);
        display = e.target.innerHTML;
    })
    affichage(display);
}
function remove(e){
    const removeIndex = e.target.parentNode.parentElement.id;
    const cardSplice = cards.splice(removeIndex,1);
    console.log(removeIndex,cardSplice);
    const parent = document.querySelector(".cardSection");
    const art = document.querySelectorAll(".card").forEach((arti)=>{
        parent.removeChild(arti);
    })
    console.log(display,cards);
    affichage(display);
}
function affichage(display){
    document.querySelectorAll(".but").forEach((bouton)=>{
    if(bouton.innerHTML===display){
        bouton.style.background="red";
        bouton.style.color="black";
    }else{
        bouton.style.background="rgb(58, 54, 54)";
        bouton.style.color="white";
    }
    })
    cards.map((data,index)=>{
        if(display==="All")createCard(data.icone,data.titre,data.texte,data.actif,data.color,index);
        else {
            if(display==="Active" && data.actif)createCard(data.icone,data.titre,data.texte,data.actif,data.color,index);
            if(display==="Inactive" && !data.actif)createCard(data.icone,data.titre,data.texte,data.actif,data.color,index);
        }
        data.index=index;
    })
    const remov = document.querySelectorAll(".removeBut").forEach((button)=>{button.addEventListener("click",remove)});
}
function slideClick(e){
    const el = e.target;
    if(el.className==="actifBut bkred"){
        el.className="actifBut bkgrey";
        el.childNodes[0].className="slideBut butOff";
    }else if(el.className==="actifBut bkgrey"){
        el.className="actifBut bkred";
        el.childNodes[0].className="slideBut butOn";
    }
    cards[el.parentNode.parentElement.id].actif=!cards[el.parentNode.parentElement.id].actif;
}
function nightday(e){
    const root = document.documentElement;
    const currentColor = getComputedStyle(root).getPropertyValue('--white');
    if(currentColor==="white"){
        root.style.setProperty('--white', ' rgb(37, 34, 37)');
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--grisfonce', 'grey');
    }else{
        root.style.setProperty('--white', 'white');
        root.style.setProperty('--black', ' rgb(37, 34, 37)');
        root.style.setProperty('--grisfonce', ' rgb(58, 54, 54)');
    }
}

const cards = [{
    "icone":"fa-solid fa-folder-closed",
    "titre":"DevLens",
    "texte":"Quickly inspect page layouts and visualize element boundaries",
    "actif":true,
    "color":"bkgreen"
},{
    "icone":"fa-solid fa-expand",
    "titre":"StyleSpy",
    "texte":"Instantly analyze and copy CSS from any webpage element",
    "actif":true,
    "color":"bkturquoise"
},{
    "icone":"fa-solid fa-stopwatch",
    "titre":"SpeedBoost",
    "texte":"Optimizes browser resoiurce usage to accelerate page loading",
    "actif":false,
    "color":"bksaumon"
},{
    "icone":"fa-solid fa-wand-magic-sparkles",
    "titre":"JSONWizard",
    "texte":"Formats, validates, and prettifies JSON responses in-browser.",
    "actif":true,
    "color":"bkpink"
},{
    "icone":"fa-solid fa-bowl-rice",
    "titre":"TabMaster Pro",
    "texte":"Organizes browser tabs into groups and sessions",
    "actif":true,
    "color":"bkpurple"
},{
    "icone":"fa-regular fa-window-restore",
    "titre":"ViewportBuddy",
    "texte":"Simulates various screen resolutions directly within the browser.",
    "actif":false,
    "color":"bkblue"
}]
affichage("All");
const but = document.querySelectorAll(".but").forEach((button)=>{button.addEventListener("click",affichageBut)});
const butToggle = document.querySelector(".toggleLight").addEventListener("click",nightday);
