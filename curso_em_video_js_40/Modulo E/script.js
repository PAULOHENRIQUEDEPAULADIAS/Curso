function contar(){

let inicio = document.querySelector("#inicio");
let fim = document.querySelector("#fim");
let passo = document.querySelector("#passo");
let p = document.querySelector("#res");

inicio = parseInt(inicio.value);
fim = parseInt(fim.value);
passo = parseInt(passo.value);

if(inicio <= -1 || inicio === "" || isNaN(inicio) || fim <= inicio || fim === "" || isNaN(fim) || passo <= 0 || passo === "" || isNaN(passo)) {
    alert("[Error] Valores invalidos");
    p.innerHTML = "<i>Impossivel contar</i>"

} else{
    let p2 = document.createElement("p");
    let sec = document.querySelector("section");
    sec.appendChild(p2);

    while(inicio <= fim){
        p2.innerHTML += inicio + `\u{1F975}` + " ";
        inicio += passo;
     }
     p2.innerHTML += `\u{1F47B}	`
};
}