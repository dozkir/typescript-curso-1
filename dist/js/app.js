import { NegociacaoController } from "./controllers/negociacao-controller.js"; // NAO ESQUECER DE COLOCAR O JS NO FINAL
const controller = new NegociacaoController();
const form = document.querySelector('.form');
// O TypeScript, sabendo que é uma arrow function para o addEventListener, já infere que o event é do tipo Event.
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
