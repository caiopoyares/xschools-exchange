import React from "react";
import { School } from "./schoolList.types";
import { SchoolItem } from "./SchoolItem";
import styled from "styled-components";

interface Props {
  schools: School[];
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  @media (min-width: 800px) {
    min-height: 100vh;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: #fff;

  @media (min-width: 800px) {
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 8px;
  }
`;

const List = styled.div`
  @media (min-width: 800px) {
    margin: 10px;
  }
`;

const ListTitle = styled.h1`
  font-family: Display;
  font-size: 1.5rem;
  margin-left: 20px;
  margin-top: 0;
`;

const Divider = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  margin-top: 20px;
  margin-bottom: 10px;
  order: 1;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const SchoolList: React.FC<Props> = ({ schools = [] }) => {
  console.log(schools);
  return (
    <Wrapper>
      <Container>
        <ListTitle>All schools</ListTitle>
        <List>
          {schools.map((school) => (
            <>
              <SchoolItem key={school.id} school={school} />
              <Divider />
            </>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};
