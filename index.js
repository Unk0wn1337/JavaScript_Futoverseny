import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat(lista) {
    const ELSO = document.getElementById("feladat_1");
    let segedValtozo = `<table>`;
    for (let index = 0; index < lista.length; index++) {
        segedValtozo += `<tr>`
        segedValtozo += `<td>${lista[index].nev}</td>`
        segedValtozo += `<td>${lista[index].nemzetiseg}</td>`
        segedValtozo += `<td>${lista[index].versenySzam}</td>`
        segedValtozo += `</tr>`
    }
    segedValtozo += `</table>`;
    ELSO.innerHTML += segedValtozo;
}

// 2. feladat
function osszesit(lista) {
    const MASODIK = document.getElementById("feladat_2")
    let felmaratonOsszesitve = 0;
    let maratonOsszesitve = 0;
    let tizKilometerOsszesitve = 0;
    for (let index = 0; index < lista.length; index++) {
        if(lista[index].versenySzam === "maraton"){
            maratonOsszesitve++;
        } else if(lista[index].versenySzam === "félmaraton") {
            felmaratonOsszesitve++;
        } else if(lista[index].versenySzam === "10 km"){
            tizKilometerOsszesitve++;
        }
    }
    
    MASODIK.innerHTML += `<p>felmaraton db: ${felmaratonOsszesitve} </p>`    
    MASODIK.innerHTML += `<p>maraton db: ${maratonOsszesitve} </p>`    
    MASODIK.innerHTML += `<p>10 km db: ${tizKilometerOsszesitve} </p>`    
    
    
}

// 3. feladat
function befutott(sor, adatok) {
  
    
}

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}

letrehozTablazat(FUTOK);
osszesit(FUTOK);