import React from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

const Summary: React.ElementType = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="incomes" />
        </header>
        <strong>R$1500</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="incomes" />
        </header>
        <strong>-R$500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="incomes" />
        </header>
        <strong>R$1000</strong>
      </div>
    </Container>
  );
};

export default Summary;
