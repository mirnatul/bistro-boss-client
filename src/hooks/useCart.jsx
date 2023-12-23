import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
    console.log(token);

    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            return res.json();
        }
    })

    return [cart, isLoading, refetch];

}

export default useCart;