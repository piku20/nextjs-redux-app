import getAllProducts from "@/actions/products";
import Product from "@/components/Product";
import Link from "next/link";

const page = async () => {
    
    const products = await getAllProducts();

    return(
        <div
            className="
                bg-blue-50
                p-8
                min-h-screen
            "
        >
            <div>
                <div
                    className="
                        py-3 
                        flex 
                        item-center 
                        justify-between 
                        max-w-4xl 
                        mx-auto
                    "
                >
                    <h2
                        className="
                            px-16 font-bold text-xl
                        "
                    >
                        Product List ({products && products.length})
                    </h2>
                    <Link href="/cart">View Cart</Link>
                </div>
                {products && products.length > 0 ? (
                    <div
                        className="
                            py-8 
                            grid 
                            grid-cols-2 
                            md:grid-cols-4 
                            gap-6 
                            max-w-4xl 
                            mx-auto
                        "
                    >
                        {products.map((item) => {
                            return(
                                <Product
                                    product={item}
                                    key={item.id}
                                />
                            );
                        })}
                    </div>
                ): (
                    <div
                        className="
                            py-8 
                            grid 
                            grid-cols-2 
                            md:grid-cols-4 
                            gap-6 
                            max-w-4xl 
                            mx-auto
                        "
                    >
                        <p>No Products Found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;