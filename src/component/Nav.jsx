import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BiSolidBookHeart } from "react-icons/bi";

const Nav = ()=>{

    return(
        <Container>
                 <ul>
                    <NavLink to ={'/'}><li id='home'>Home <FaHome /></li></NavLink>
                    <NavLink to={'/about'}><li>About <FcAbout /></li></NavLink>
                    <NavLink to={'/portfolio'}><li>Portfolio <BiSolidBookHeart /></li></NavLink>
                    <NavLink to={'/client'}> <li>Client</li></NavLink>
                </ul>
        </Container>
    )
}

export default Nav
const Container = styled.div`
z-index: 5;



    a:hover{
    color: yellowgreen;
    }

    a.active{
    color: yellow;
    font-size: 20px;
    transition-duration: .7s;
    }

        ul{
            border: 1px solid yellowgreen;
            width: fit-content;
            /* padding: 20px; */
            border-radius: 40px;
            list-style: none;
            display: flex;
            /* margin: 30px; */
            list-style: none;
            position:fixed;
            left: 50%;
            transform: translateX('50%');
            bottom: 20px;
            
            
            
            li{
                margin:10px 15px;
            }

        li:hover{
            color: yellowgreen;
            }

        li.active{
            color: yellow;
            font-size: 12px;
            transition-duration: .5s;
            }
                    
            }
    
`