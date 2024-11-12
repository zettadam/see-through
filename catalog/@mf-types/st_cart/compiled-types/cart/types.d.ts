export type Product = {
    description: string;
    id: string;
    largeImage: string;
    mediumImage: string;
    name: string;
    price: number;
    smallImage: string;
    salesTaxRate: number;
};
export type Cart = {
    changeQuantity: (id: string, quantity: number) => void;
    items: Product[];
    quantities: Record<string, number>;
    placeInCart: (product: Product, quantity: number) => void;
    removeFromCart: (id: string) => void;
    totalItems: number;
    totalPrice: number;
    totalSalesTax: number;
};
