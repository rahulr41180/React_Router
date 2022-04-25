
import { useEffect, useState } from "react";

import { Link, useLocation, useSearchParams } from "react-router-dom";

import axios from "axios";

const useQuery = (q) =>{
    const params = new URL.SearchParams(window.location.search);
    console.log('params:', params)
    return params.get(q);
}
export const UserList = () =>{
    const [Users, setUsers] = useState([]);

    const location = useLocation();

    const [params] = useSearchParams()

    useEffect(() =>{
        axios.get("https://reqres.in/api/users").then(({ data }) =>{
            setUsers(data.data);
        })
    },[])
    return (
        <div>
            {Users.map((element) =>{
                return (
                    <p key = {element.id}><Link to={`/usersdetails/${element.id}`}>{element.id} - {element.first_name}</Link></p>
                )
            })}
        </div>
    )
}