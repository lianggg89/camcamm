export interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    images: string[],
    description: string,
    category: string,
    rating: number
    sizes:string[],
    reviews:string[],
    inStock:string[],

}
export interface IProductForm {
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }