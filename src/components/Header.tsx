import React from "react";
import styled from "styled-components";

import { FaUserAlt } from "react-icons/fa";
import { BsFillTriangleFill } from "react-icons/bs";

const Wrapper = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  height: 55px;
  margin-bottom: 8px;
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

export const Header: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <BsFillTriangleFill color="#FF385C" />
          <text style={{ fontFamily: "Display", marginLeft: "5px" }}>
            XSchools
          </text>
        </Title>
        <FaUserAlt color="#333" />
      </Container>
    </Wrapper>
  );
};
