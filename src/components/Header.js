import React from "react";
import styled from "styled-components";

function Header() {
  const [burgerStatus, setBurgerStatus] = React.useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <Menu>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        {/* Ensure FontAwesome is working */}
        <i className="fa-solid fa-bars" onClick={() => setBurgerStatus(true)}></i>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        {/* Correct inline styles */}
        <i
          className="fa-solid fa-xmark"
          onClick={() => setBurgerStatus(false)}
          style={{ textAlign: 'left', fontSize: '1.3rem' }}
        ></i>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    a {
      font-weight: 600;
    }
  }
`;
