export class Product {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  registerDate: number;
  count: number;

  constructor(name: string, desc: string, imageUrl: string, price: number,
    registerDate: number, count: number) {
    this.name = name;
    this.description = desc;
    this.imageUrl = imageUrl;
    this.price = price;
    this.registerDate = registerDate;
    this.count = count;
  }
}
