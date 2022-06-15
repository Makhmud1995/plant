import React from 'react'
import { MainContainer } from "../components/home/style";
import Content from './home/content'
import Content1 from './home/content1'
import Navbar from './home/navbar'
import {Container} from '../components/home/style'

const Root = () => {
  return (
    <MainContainer>
    < Container>
        <Navbar/>
    </Container>
        <Content/>
        <Content1/>
    </MainContainer>
  )
}

export default Root