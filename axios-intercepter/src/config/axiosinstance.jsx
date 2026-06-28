import axios from 'axios';
import { toast } from 'react-toastify';

export let axiosInstance = axios.create({
    baseURL:'https://fakestoreapi.com',
});

axiosInstance.interceptors.response.use( 
    (response)=>{
        console.log(response);
        toast.success("data aagaya hai");
        return response ;
    },
    (error)=>{
        console.log(error);
        toast.error("data nahi aaya");
    },
)

