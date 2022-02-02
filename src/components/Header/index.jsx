import React from 'react'
import { Navbarr, ProfileBox,LogoSearch } from './styles.js'
import { Profile } from '../PhotoProfile'



export function Header (){
    return (
        <Navbarr>
      
        <LogoSearch>
        <h1>Logo</h1>
        <input placeholder='Buscar'></input>
       
        </LogoSearch>
        
        <ProfileBox>
            
        <Profile 
        alt="Logo"/>
        </ProfileBox>
 
 
        <ul>
        <li><a>Home</a></li>
        <li><a>Contato</a></li>
        <li><a>Sobre Mim</a></li>
        </ul>
        
     
    </Navbarr>
    
    )
  
}