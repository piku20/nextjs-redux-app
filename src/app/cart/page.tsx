"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { removeProductFromCart } from '@/store/slicecs/cartSlice';
import { 
    useAppSelector, 
    useAppDispatch 
} from '@/store/hooks/hooks';



const Page = () => {
    
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    console.log(cartItems);
    const dispatch = useAppDispatch();

    const handleRemove = (id:number) => {
        dispatch(removeProductFromCart(id));
        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems.filter((product) => product.id !== id))
        );
    };

    
    return(
        <div
            className="
                bg-blue-50 p-8 min-h-screen
            "
        >
            <div
                className="
                    max-w-xl 
                    bg-white 
                    rounded-xl 
                    mx-auto 
                    min-h-96 
                    p-8
                "
            >
                <h2>Shopping Cart ({cartItems.length})</h2>
                {cartItems.length > 0 ? (
                    <div
                        className="space-y-3 divide-y-4 divide-gray-100"
                    >
                        {cartItems.map((product) => {
                            return(
                                <div
                                    key={product.id}
                                >
                                    <div className="
                                        py-3 
                                        px-4 
                                        flex 
                                        items-center 
                                        justify-between
                                    ">
                                        <Image
                                            className="
                                                h-28 w-28 object-cover rounded
                                            "
                                            src={product.image ?? "/public/calcium.jpg"}
                                            width={225}
                                            height={255}
                                            alt="calcium"
                                        />
                                        <h3
                                            className="font-semibold"
                                        >
                                            {product.name}
                                        </h3>
                                        <p className="font-semibold text-sm py-2">
                                            ${product.price}
                                        </p>
                                    </div>
                                    <Button
                                        size="sm"
                                        onClick ={() => handleRemove(product.id)}
                                        variant={"destructive"}
                                    >
                                        <Trash className="w-4 h-4 mr-2" />
                                        Remove
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div
                        className="
                            text-center 
                            flex 
                            items-center 
                            justify-center 
                            h-full
                        "
                    >
                        <h2>No Items in Cart</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
