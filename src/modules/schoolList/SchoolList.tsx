import React from "react";
import { School } from "./schoolList.types";
import { SchoolItem } from "./SchoolItem";
import styled from "styled-components";

interface Props {
  schools: School[];
}

const List = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SchoolList: React.FC<Props> = ({ schools }) => {
  return (
    <List>
      {schools.map((school) => (
        <SchoolItem key={school.id} school={school} />
      ))}
    </List>
  );
};
