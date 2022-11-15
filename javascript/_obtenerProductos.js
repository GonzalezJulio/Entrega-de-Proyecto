// JSON para recibir los articulos

const obtenerArticulos = async () => {
    try {
        const response = await fetch('../javascript/data/stock.json');
        
        const data = await response.json();
        
        return data;
    
    } catch (error) {
        console.log('Hubo un error: ',error);
    };

};

export { obtenerArticulos }