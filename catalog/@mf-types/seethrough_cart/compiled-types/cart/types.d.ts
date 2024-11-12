export type Product = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    salesTaxRate: number;
};
export type Cart = {
    items: Product[];
    placeInCart?: (product: Product, quantity: number) => void;
    totalItems: number;
    totalPrice: number;
    totalSalesTax: number;
};
