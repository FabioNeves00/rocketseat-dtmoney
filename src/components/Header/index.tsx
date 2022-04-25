import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";

const Header: React.ElementType = () => {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] =
    useState(false);

  const handleOpenCloseModal = () => {
    setIsNewTrasactionModalOpen((state) => !state);
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney_logo" />
        <button type="button" onClick={handleOpenCloseModal}>Nova Transação</button>
      </Content>
      <Modal isOpen={isNewTrasactionModalOpen} onRequestClose={handleOpenCloseModal}>
        <h2>Cadadasdsad</h2>
      </Modal>
    </Container>
  );
};

export default Header;
