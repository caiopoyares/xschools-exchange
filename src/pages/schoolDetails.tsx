import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { withLayout } from "../components/withLayout";
import schoolsDetails from "../schoolDetails.json";
import { SchoolCard } from "../modules/SchoolCard/SchoolCard";

interface Params {
  id: string;
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding-bottom: 2rem;
  min-height: 100vh;
  @media (min-width: 800px) {
    padding-top: 2rem;
  }
`;

const SchoolDetails: React.FC = () => {
  const { id } = useParams<Params>();

  const school = schoolsDetails.find((school) => school.id === parseInt(id))!;

  return (
    <Wrapper>
      <SchoolCard school={school} />
    </Wrapper>
  );
};

export default withLayout(SchoolDetails);
