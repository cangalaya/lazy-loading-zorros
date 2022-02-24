import { counter } from "../index.js";
const action = (entry) => {
    const nodo = entry.target
    const image = nodo.lastChild;
    // ejecuta algo
    const url = image.dataset.src;      // la propiedad dataset establecimos las url de las imagenes
    image.src = url;        // se asignamos la url
    
    counter.upperLoads();
    counter.printLog();

    // olvida el nodo, porque ya lo ejecutaste 1 vez (opcional)
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((allElements) => {        // allElements es una variable que el objeto se pasa, contiene todos los elementos del DOM
    allElements 
        .filter(entry => entry.isIntersecting)      // filtramos los elementos que estan dentro de pantalla
        .forEach(action)                            // acción que ejecutamos si el elemento / objeto se observa en pantalla
                                                    // se ejecuta la acción, si se interscta en scroll horizontal o vertical
})


export const registerImage = (image) => {
    observer.observe(image)                         // agregamos un elemnto a observar          
}