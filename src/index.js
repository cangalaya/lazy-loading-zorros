import "./styles/styles.css";

import {getData} from "./utils/getData.js";
import { cardGenerator } from "./utils/cardGenerator.js";
import { registerImage } from "./utils/lazy.js";

const app = document.querySelector('#cards-container');


const btnImages = document.querySelector('#btn-images');
const btnClean = document.querySelector('#btn-clean');

export const counter = {
    appendedImages : 0,
    loadedImages : 0,
    upperImages : function() {this.appendedImages++},
    upperLoads: function() {this.loadedImages++},
    downImages : function() {this.appendedImages--},
    downLoads: function() {this.loadedImages--},
    restartCount: function() {
        this.loadedImages = 0;
        this.appendedImages = 0;
    },
    printLog: function() {
        console.log(`⚪ Se han agregado ${this.appendedImages} imágenes`);
        console.log(`🟣 Se han cargado ${this.loadedImages} imágenes`);
        console.log("---------------------------------------");
    }
}

btnImages.addEventListener('click', async () =>{
    counter.upperImages();
    counter.printLog();

    const data = await getData('https://randomfox.ca/floof/');  
    const card = cardGenerator(data);
    app.append(card);

    registerImage(card);                        // indicamos que escuche las cards para aplicar lazy loading
})

btnClean.addEventListener('click', () => {
    [...app.childNodes].forEach((node)=> node.remove());
    counter.restartCount();
    counter.printLog();
});