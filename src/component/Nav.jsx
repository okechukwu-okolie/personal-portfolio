import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BiSolidBookHeart } from "react-icons/bi";
import { useState } from 'react';

const Nav = (props)=>{


    const [showMenu, setShowMenu] = useState(false);
    const closeMenu = () => {
        setShowMenu(!showMenu);
    }
  
    return(
        <Container  >
                  <ul className='navComponent' >
                    <NavLink to ={'/'} ><li id='home'>Home <FaHome /></li></NavLink>
                    <NavLink to={'/about'}><li>About <FcAbout /></li></NavLink>
                    <NavLink to={'/portfolio'} ><li>Portfolio<BiSolidBookHeart /></li></NavLink>
                     {/* <NavLink to={'/client'} spy={true} smooth={true} offset={50} duration={500}> <li>Client</li></NavLink>  */}
                </ul> 
                {/* <Link activeClass='active' to='' spy={true} smooth={true} offset={-100} duration={500}  className='links'>Home</Link>

                <Link activeClass='active' to='' spy={true} smooth={true} offset={-100} duration={500}  className='links'>About</Link>

                <Link activeClass='active' to='' spy={true} smooth={true} offset={-100} duration={500}  className='links'>Portfolio</Link> */}

                

                
        </Container>
    )}


export default Nav
const Container = styled.div`
        z-index: 5;
        position: relative;;

        .navComponent2{
            display:flex;
        }


         @media(max-width:768px){
            .navComponent {
                display:none;
                }
            }  

            @media(max-width:768px){
            .navComponent2 {
                display:flex;
                flex-direction: column;
                position: fixed;
                top: 35px;
                left:75%;
                height: fit-content;
                width: 200px;
                border-radius: 10px;
                border: 1px solid yellowgreen;
                z-index: 2;
                }
                li{
                    padding:0px;
                    font-size: 12px;
                }
                a:hover{
                    color: yellowgreen;
                    }

                    a.active{
                    color: yellow;
                    font-size: 20px;
                    transition-duration: .7s;
                    }
            } 





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
            border-radius: 40px;
            list-style: none;
            display: flex;
            list-style: none;
            position:fixed;
            left: 35%;
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