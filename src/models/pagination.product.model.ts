import { Product } from "./product.model";

export interface PaginationProduct {
    items: Product[];
    itemCount: number;
    totalItems: number;
    pageCount: number;
    next: string;
    previous: string;
}