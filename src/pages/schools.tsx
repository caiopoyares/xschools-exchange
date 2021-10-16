import React from "react";
import { withLayout } from "../components/withLayout";
import { SchoolList } from "../modules/schoolList/SchoolList";
import { School } from "../modules/schoolList/schoolList.types";
import schools from "../schools.json";

const Schools: React.FC = () => {
  return (
    <div>
      <SchoolList schools={schools as School[]} />
    </div>
  );
};

export default withLayout(Schools);
