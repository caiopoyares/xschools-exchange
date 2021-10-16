import Loader from "react-loader-spinner";
import styled from "styled-components";
import colors from "../constants/colors";

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;

const Spinner = () => (
  <Center>
    <Loader type="TailSpin" color={colors.black} height={30} width={30} />
  </Center>
);

export default Spinner;
