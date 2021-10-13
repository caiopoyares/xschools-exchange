import React from "react";
import styled from "styled-components";
import { School } from "./schoolList.types";

interface Props {
  school: School;
}

const Box = styled.div`
  display: flex;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 8px;
`;

const Image = styled.img`
  border-radius: 8px;
`;

export const SchoolItem: React.FC<Props> = ({ school }) => {
  return (
    <Box>
      <div>
        <Image src="https://picsum.photos/300/200" alt={school.name} />
      </div>
      <div>
        <div>{school.name}</div>
        <div>{school.description}</div>
        <div>
          {school.city} - {school.country}
        </div>
        <div>{JSON.stringify(school.languages)}</div>
        <div>{school.rating}</div>
      </div>
    </Box>
  );
};
