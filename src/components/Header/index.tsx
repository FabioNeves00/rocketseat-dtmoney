import React from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

const Header: React.ElementType = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney_logo" />
        <button type='button'>Nova Transação</button>
      </Content>
    </Container>
  )
}

export default Header