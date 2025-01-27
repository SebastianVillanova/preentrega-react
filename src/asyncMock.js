const products = [
    {
        id: '3',
        name: 'Auriculares Sony',
        price: 15000,
        category: 'auriculares',
        img: 'https://www.sony.com.ar/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
        stock: 15,
        description: 'Auriculares inalámbricos Sony',
    },
    {
        id: '4',
        name: 'Auriculares noga',
        price: 20000,
        category: 'auriculares',
        img: 'https://acdn.mitiendanube.com/stores/001/593/734/products/ng-btwins-34-ng-auris1-48e3570f9910767c5616878887614699-1024-1024.jpg',
        stock: 8,
        description: 'auris inalambricos noga ',
    },
    {
        id: '5',
        name: 'Parlante JBL',
        price: 18000,
        category: 'parlantes',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOa-HKMTFS8PUYv3uL6NeAvGm3d33O9iXXyQ&s',
        stock: 20,
        description: 'Parlante portátil JBL',
    },
    {
        id: '6',
        name: 'Parlante Harman Kardon',
        price: 25000,
        category: 'parlantes',
        img: 'https://www.necxus.com.ar/products_image/35961/1000x1000_1.jpg',
        stock: 12,
        description: 'Parlante de alta fidelidad Harman Kardon',
    },
    {
        id: '7',
        name: 'Notebook Dell Inspiron',
        price: 30000,
        category: 'notebooks',
        img: 'https://www.cordobanotebooks.com.ar/wp-content/uploads/2023/04/JP7E4C.jpg',
        stock: 18,
        description: 'Notebook Dell Inspiron 15',
    },
    {
        id: '8',
        name: 'Notebook Lenovo ThinkPad',
        price: 35000,
        category: 'notebooks',
        img: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8Mjk5NzMxfGltYWdlL3BuZ3xoNzEvaDliLzE0MDgwNDg4MjEwNDYyLnBuZ3w4ODk4ODllNjVlNzMyNzUzMWEzMTNlYTdiNWJhNTczMGQ1OTAxZDg3MTgzYjBiZjFlM2MxMzcwMGM2NWMyN2Zj/lenovo-laptop-thinkpad-x13-gen-2-13-amd-subseries-hero.png',
        stock: 15,
        description: 'Notebook Lenovo ThinkPad X1 Carbon',
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
};

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
    }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
    });
};