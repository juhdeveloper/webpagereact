import styled from "styled-components"

export const Navbarr = styled.nav`


display: flex;
flex-direction: row;
align-items:center;
justify-content:space-between;
background: tranparent;
height: 25%;
box-shadow: 0 2px 2px -2px rgba(0,0,0,1);

@media (max-width: 620px){
    position:relative;
    flex-direction: column;
    font-size: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;

} 


input{
    margin-bottom:20px;
    display: flex;
    width: 400px;
    height:40px;
    border-style: none;
    outline: none;
    align-items: center;
    justify-content: center;
    border-radius:25px;
    padding:06px;


@media (max-width: 620px){
    display:none;

}
}


h1{
    padding: 10px;
    color: white;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:25px;

    @media (max-width: 620px){
    display:none;

}
}


ul{
    height:auto;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: space-evenly;

    > li {
   
        color: white;
        padding: 10px;
        margin-right:50px;    
 
    }
    
   > a{
    color:white;
    }


}



`;

export const ProfileBox = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
width:60%;
height:50%;
margin:10px 0px 10px;



`;

export const LogoSearch =styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
margin:0;
`;


