export const cardGenerator = (object) => {
    const container = document.createElement('div')
    container.className = "card";
    const title = document.createElement('h2')
    title.innerText = 'zorro';
    title.className = "title";
    const image = document.createElement('img')
    image.style.backgroundColor = 'grey';
    image.dataset.src = object.image;               // data, para intercambiar datos del html y js
    
    container.append(title, image)
    
    return container;
}