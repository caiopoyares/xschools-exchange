import React from "react";
import { useQuery } from "react-query";
import { withLayout } from "../components/withLayout";
import { SchoolList } from "../modules/schoolList/SchoolList";
import { School } from "../modules/schoolList/schoolList.types";
import schools from "../schools.json";
import Spinner from "../components/Spinner";

const Schools: React.FC = () => {
  // const { isLoading, error, data } = useQuery("schoolsList", () =>
  //   fetch(`${process.env.REACT_APP_API_URL}/schools`).then((res) => res.json())
  // );

  // if (isLoading)
  //   return <Spinner />;

  // if (error) return <div>An error has occured.</div>;

  return (
    <div>
      <SchoolList schools={schools as School[]} />
    </div>
  );
};

export default withLayout(Schools);
