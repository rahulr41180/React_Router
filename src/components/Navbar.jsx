
import { Link } from "react-router-dom";

export const Navbar = () =>{

    const nav = [
        {title : "Home", to : "/"},
        {title : "About Us", to : "/about"},
        {title : "Users", to : "/users"},
        {title : "Userslist", to : "/userslist"},
    ]
    return (

        <div>
            {nav.map((element,index) =>(
                
                <Link style={{margin : "5px"}} key = {index} to= {element.to}>{element.title}</Link>
                
            ))}
        </div>

    )
}