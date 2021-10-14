import React from "react";
import { School } from "./schoolList.types";
import { SchoolItem } from "./SchoolItem";
import styled from "styled-components";

interface Props {
  schools: School[];
}

const List = styled.div`
  @media (min-width: 800px) {
    margin: 10px;
  }
`;

const ListTitle = styled.h1`
  font-family: Display;
  font-size: 1.5rem;
  margin-left: 10px;
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

export const SchoolList: React.FC<Props> = ({ schools }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <ListTitle>
        Schools at {schools[0].city}, {schools[0].country}
      </ListTitle>
      <List>
        {schools.map((school) => (
          <>
            <SchoolItem key={school.id} school={school} />
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
};
