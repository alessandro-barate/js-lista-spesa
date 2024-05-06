"use strict";

/* 
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita,
all'interno ciclo while


- Ciclo while:
  - leggo i valori dell'array
  - creare gli li della ul
  - valore li uguale al valore letto dall'array
  - inserisco gli li creati nella ul  */

const list = [
  "maccheroni",
  "tonno",
  "pomodori",
  "cipolla",
  "peperoncino",
  "basilico",
  "passata di pomodoro",
];

let count = 0;

const ul = document.getElementById("list");

while (count < list.length) {
  let li = document.createElement("li");
  li.innerText = list[count];
  ul.append(li);
  count++;
}

console.log(ul);
