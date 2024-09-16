//Interface for the Category
interface Category{
    id:number;
    name:string;
    image:string;
}

//Interface for the Product
interface Product{
    id:number;
    title:string;
    price:number;
    description:string;
    category:Category;
    images: string[];
}

interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }

interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}



interface IProduct{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
}

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    step: number;
}

export type {
    IProduct,
    FormState,
};

