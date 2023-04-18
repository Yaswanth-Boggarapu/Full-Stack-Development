interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
 
  const products: Product[] = [
    { id: 1, name: "Product 1", price: 10.99, description: "This is product 1" },
    { id: 2, name: "Product 2", price: 20.99, description: "This is product 2" },
    { id: 3, name: "Product 3", price: 30.99, description: "This is product 3" },
  ];
 
  export function getProductById(id: number): Product | undefined {
    return products.find((product) => product.id === id);
  }
 
  function displayProductDetails(id: number) {
    const product = getProductById(id);
    if (product) {
      console.log(`Product ID: ${product.id}`);
      console.log(`Product Name: ${product.name}`);
      console.log(`Product Price: ${product.price}`);
      console.log(`Product Description: ${product.description}`);
    } else {
      console.log(`Product with ID ${id} not found`);
    }
  }
 
  // Example usage:
  displayProductDetails(1); // prints details of Product 1
  displayProductDetails(4); // prints "Product with ID 4 not found"