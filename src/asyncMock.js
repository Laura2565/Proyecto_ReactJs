const MOCK_DATA = [
    {
        "id": 1,
        "name":"Sprinkles A2",
        "description": "Perlas de cereales cubiertas de chocolate, grageas, chips de chocolate",
        "stock": 20,
        "price": 120,
        "categoria": "Sprinkles",
        "imagen": "/sprinklesa2.jpg"
    },
    {
        "id": 2,
        "name":"Sprinkles A3",
        "description": "Perlas de cereales cubiertas de chocolate, grageas, chips de chocolate",
        "stock": 20,
        "price": 120,
        "categoria": "Sprinkles",
        "imagen": "/sprinklesa3.jpg"
    },
    {
        "id": 3,
        "name":"Sprinkles J",
        "description": "Perlas de cereales cubiertas de chocolate, grageas, chips de chocolate",
        "stock": 20,
        "price": 120,
        "categoria": "Sprinkles",
        "imagen": "/sprinklesj.jpg"
    },
    {
        "id": 4,
        "name":"Perlas Rosas",
        "description": "Perlas de cereales cubiertas de chocolate",
        "stock": 20,
        "price": 120,
        "categoria": "Perlas",
        "imagen": "/perlap13.jpg"
    },
    {
        "id": 5,
        "name":"Perlas Naranja",
        "description": "Perlas de cereales cubiertas de chocolate",
        "stock": 20,
        "price": 120,
        "categoria": "Perlas",
        "imagen": "/perlap10.jpg"
    },
    {
        "id": 6,
        "name":"Perlas Natural",
        "description": "Perlas de cereales cubiertas de chocolate",
        "stock": 20,
        "price": 120,
        "categoria": "Perlas",
        "imagen": "/perlap7.jpg"
    },
    {
        "id": 7,
        "name":"Acuarela celeste",
        "description": "Acuarelas con brillo para pintar sobre chocolate , fondant, merengue",
        "stock": 20,
        "price": 120,
        "categoria": "Acuarelas",
        "imagen": "/acuarelaceleste.jpg"
    },
    {
        "id": 8,
        "name":"Acuarela violeta",
        "description": "Acuarelas con brillo para pintar sobre chocolate , fondant, merengue",
        "stock": 20,
        "price": 120,
        "categoria": "Acuarelas",
        "imagen": "/acuarelavioleta.jpg"
    },
    {
        "id": 9,
        "name":"Acuarela amarilla",
        "description": "Acuarelas con brillo para pintar sobre chocolate , fondant, merengue",
        "stock": 20,
        "price": 120,
        "categoria": "Acuarelas",
        "imagen": "/acuarelaamarilla.jpg"
    }
]

 export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
                    
        }, 5000)
    })
}