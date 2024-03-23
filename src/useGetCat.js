import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () =>{
    const {data, refetch, isLoading: isCatLoading, error } = useQuery({ queryKey: ["cat"],queryFn: () =>{
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    }});

    const refetchData = () =>{
        alert("Data refreshed");
        refetch();
    };

    return {data, refetchData, isCatLoading };
}