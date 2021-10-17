import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import { withLayout } from "../components/withLayout";
import { SchoolList } from "../modules/schoolList/SchoolList";
import { School } from "../modules/schoolList/schoolList.types";

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Schools: React.FC = () => {
  const { data, error, isLoading } = useQuery("schools", () =>
    axios.get("/schools")
  );

  if (isLoading) return <Spinner />;

  if (error) return <Center>Sorry, something went wrong :(</Center>;

  return (
    <div>
      <SchoolList schools={data?.data as School[]} />
    </div>
  );
};

export default withLayout(Schools);
