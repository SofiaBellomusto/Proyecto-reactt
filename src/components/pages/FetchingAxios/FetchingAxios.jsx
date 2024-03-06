import axios from "axios";
import { useEffect, useState } from "react";

export const FetchingAxios = () => {
    const [users, setUsers] = useState ([]);
    useEffect(() => {
        const getUsers = axiosInstance.get("/users")
        getUsers.then (res => setUsers(res.data)).catch(err => console.log(err))

    }, []);

    const createUser = ()=>{
        let user ={
            name: "pepito",
            edad: 22
        }

        axiosInstance.post("/users" , user)

    }
    console.log(users)

    return <div>FetchingAxios</div>

}