
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

export const UserDetails = () =>{

    const { id } = useParams();
    const [ Userdata, setUserdata ] = useState([]);
    

    useEffect(() =>{
        axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) =>{
            
            console.log(data);
            console.log(data.data);
            setUserdata(data.data);
        })
    },[])
    


    console.log('Userdata:', Userdata)
    
    return (
        <div>
            <img src={Userdata.avatar} alt="" />
            <div>First Name : {Userdata.first_name}</div>
            <div>Last Name : {Userdata.last_name}</div>
        </div>
    )
}
