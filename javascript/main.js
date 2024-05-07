"use strict";

// Dichiaro l'array
const list = [
  "maccheroni",
  "tonno",
  "pomodorini",
  "cipolla",
  "peperoncino",
  "basilico",
  "passata di pomodoro",
];

// Dichiaro la variabile che passo al ciclo (contatore)
let count = 0;

// Dichiaro la variabile che legge l'ID della lista dall'HTML
const ul = document.getElementById("list");

// Ciclo while per ciclare i valori dell'array, creare ogni volta un li, metterci dentro il valore
// appena letto ed inserire il li nella ul. Si incrementa poi il contatore
while (count < list.length) {
  const li = document.createElement("li");
  li.innerText = list[count];
  li.classList.add("li-style");
  ul.append(li);
  count++;
}
