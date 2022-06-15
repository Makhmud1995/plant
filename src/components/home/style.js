import styled from "styled-components";
import Back from '../../assets/Main.png'
export const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const Container = styled.div`
width: 100%;
height: 900px;
display: flex;
flex-direction: column;
background-size: cover;
background-image: url(${Back});
`
export const Nav = styled.div`
display: flex;
height: 100px;
justify-content: space-evenly;
align-items: center;


`

export const Logo = styled.div`
cursor: pointer;

`
export const Menu = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
color: white;
font-weight: 700;
p{
    cursor: pointer;
    margin:15px;
    :hover{
    color: #B7EAAF;
}
}
`


export const Button = styled.div`
width: 160px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
margin-left: 15px;
background-color: #B7EAAF;
font-weight: 700;
cursor: pointer;
:hover{
    opacity: 0.9;

}
`