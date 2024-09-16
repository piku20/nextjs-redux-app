"use server";

import { 
    IProduct,
} from "@/types/types";
import axios from "axios";

const getAllProducts = async() => {
    try{
        const res = await axios.get("https://dummyjson.com/products?limit=12");
        const products = res.data.products;
        return products as IProduct[];
    }catch(error){
        console.log(error);
        return null;
    }
};

export default getAllProducts;