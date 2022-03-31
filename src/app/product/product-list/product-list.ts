export interface Category {
    id: number;
    slug: string;
}

export interface ProductList {
    id: number;
    cate_id: number;
    name: string;
    slug: string;
    small_description: string;
    description: string;
    original_price: string;
    selling_price: string;
    image: string;
    qty: string;
    tax: string;
    status: number;
    trending: number;
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
    created_at: Date;
    updated_at: Date;
    category: Category;
}