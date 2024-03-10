const data = {
    status: "success",
    items: [
      {
        id: 1,
        title: "Sprinkles A2",
        price: 160,
        image: require('./Images/sprinklesa2.jpg'),
        category: "Sprinkles",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        cantidad: 10
      },
      {
        id: 2,
        title: "Sprinkles A3",
        price: 160,
        image: require('./Images/sprinklesa3.jpg'),
        category: "Sprinkles",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        cantidad: 10
      },
      {
        id: 3,
        title: "Sprinkles J",
        price: 160,
        image: require('../Images/sprinklesaj.jpg'),
        category: "Sprinkles",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        cantidad: 10
      },
      {
        id: 4,
        title: "Perlas 7",
        price: 130,
        image: require('../Images/perlasp7.jpg'),
        category: "Perlas",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        
        cantidad: 10
      },
      {
        id: 5,
        title: "Perlas 10",
        price: 130,
        image: require('../Images/perlasp10.jpg'),
        category: "Perlas",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        
        cantidad: 10
      },
      {
        id: 6,
        title: "Perlas 13",
        price: 130,
        image: require('../Images/perlasp13.jpg'),
        category: "Perlas",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        cantidad: 10
      },
      {
        id: 7,
        title: "Acuarela amarilla",
        price: 210,
        image: require('../Images/acuarelaamarillo.jpg'),
        category: "Acuarela",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        cantidad: 10
      },
      {
        id: 8,
        title: "Acuarela celeste",
        price: 210,
        image: require('../Images/acuarelaceleste.jpg'),
        category: "Acuarela",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        cantidad: 10
      },
      {
        id: 9,
        title: "Acuarela violeta",
        price: 210,
        image: require('../Images/acuarelavioleta.jpg'),
        category: "Acuarela",
        img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeliganga.com.uy%2Fproducto%2Fsprinkles-grageas-estrellas-3-colores%2F&psig=AOvVaw2ewWakwYXxJMjPWH5rtipK&ust=1710117476339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDTu5i66IQDFQAAAAAdAAAAABAI",
        cantidad: 10
      },
      
    ],
  };
  
