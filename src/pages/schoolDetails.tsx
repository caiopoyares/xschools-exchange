import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { withLayout } from "../components/withLayout";
import { SchoolCard } from "../modules/SchoolCard/SchoolCard";
import { SchoolDetails as schoolDetails } from "../modules/SchoolCard/schoolCard.types";
import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";

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

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SchoolDetails: React.FC = () => {
  const { id } = useParams<Params>();

  const { data, error, isLoading } = useQuery("schoolsDetails", () =>
    axios.get(`/schools/${id}`)
  );

  if (isLoading) return <Spinner />;

  if (error) return <Center>Sorry, something went wrong :(</Center>;

  return (
    <Wrapper>
      <SchoolCard school={data?.data as schoolDetails} />
    </Wrapper>
  );
};

export default withLayout(SchoolDetails);
