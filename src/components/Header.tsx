import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { BsFillTriangleFill } from "react-icons/bs";
import colors from "../constants/colors";

const Wrapper = styled.div`
  height: 55px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;

  @media (min-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: Display;
  margin-left: 5px;
  text-decoration: none;
  color: #333;
`;

export const Header: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <BsFillTriangleFill color={colors.primary} />
          <Logo to="/schools">XSchools</Logo>
        </Title>
        <FaUserAlt color={colors.gray} />
      </Container>
    </Wrapper>
  );
};
