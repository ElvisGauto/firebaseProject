import { Product } from 'src/app/shared/models/app-products.interface';

export class ShoppingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    // constructor(init?: Partial<ShoppingCartItem>) {
    //     Object.assign(this, init);
    // }
    // constructor(public product: Product, quantity) {}

    get totalPrice() { return this.price * this.quantity; }
}