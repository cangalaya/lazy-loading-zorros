export const getData = async (urlApi) => {
    try{
        const response = await fetch(urlApi);
        return await response.json();
    }catch(error){
        console.log(error);
    }
}

