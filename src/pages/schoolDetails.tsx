import React from "react";
import { useParams } from "react-router-dom";
import { withLayout } from "../components/withLayout";

interface Params {
  id: string;
}

const SchoolDetails: React.FC = () => {
  const { id } = useParams<Params>();

  return <div>details of schoold {id}</div>;
};

export default withLayout(SchoolDetails);
