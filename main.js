class ProductManager {
    static lastId = 0;
    constructor() {
        this.products = []
    }

    // Metodo addProduct:
    // agregar producto al arreglo de productos inicial
    // validar que no se repita el campo "code" y que todos los campos sean obligatorios
    //al agregar el producto debe crearse con un id autoincrementable
    addProduct(title, description, price, thumbnail, code, stock) {

        // validaciones
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Completá todos los campos porfavor");
            return;
        }

        if (this.products.some(item=> item.code === code)) {
            console.log("El código ingresado ya existe");
            return;
        }

        const newProduct = {
            id: ++ProductManager.lastId,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }
        this.products.push(newProduct);
    }

    //Metodo getProducts:
    // debe devolver el arreglo con todos los productos creados hasta ese momento
    getProducts() {
        return this.products
    }

    //Metodo getProductById:
    // debe buscar en el arreglo el producto que coincida con el id
    // en caso de no coincidir con ningun id tiene que mostrar el error not found por consola
    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            return "Not found";
        }
        return product;
    }
}

// Testing:

//crear instancia de clase "ProductManager"
const newManager = new ProductManager();

//llamar a getProducts, debe devolver un arreglo vacio
console.log(newManager.getProducts());

//llamar al metodo "addProduct" con los campos:
// title: "producto prueba"
// description: "Este es un producto prueba"
// price: 200
// thumbnail: "Sin imagen"
// code: "abc123"
//stock: 25

newManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

//el producto debe agregarse con un id generado automaticamente sin repetirse

newManager.addProduct("producto prueba2", "Este es un producto prueba", 200, "Sin imagen", "abc124", 25);

newManager.addProduct("producto prueba3", "Este es un producto prueba", 200, "Sin imagen", "abc125", 25);

//llamar a "getProducts", debe aparecer el producto recien agregado
console.log(newManager.getProducts());

//llamar a "addProduct" con los mismos campos de arriba, debe arrojar un error porque el codigo esta repetido
newManager.addProduct("producto prueba3", "Este es un producto prueba", 200, "Sin imagen", "abc125", 25);

//si uno de los campos no esta completo
newManager.addProduct("producto prueba3", "Este es un producto prueba", 200, "Sin imagen", "abc126");

//evualuar que "getProductById" devuelva error si no encuentra el producto o el producto en caso de encontrarlo 
console.log("Busco producto por id");
console.log(newManager.getProductById(10));