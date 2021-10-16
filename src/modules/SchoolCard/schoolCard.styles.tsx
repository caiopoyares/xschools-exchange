import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 30px;
  background-color: #fff;

  @media (min-width: 800px) {
    padding-right: 10px;
    padding-left: 20px;
    border-radius: 8px;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  font-family: Display;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const ImageBox = styled.div`
@media (min-width: 800px) {\
  border-radius: 8px;
  margin-left: 15px;
  margin-right: 15px;
}
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media (min-width: 800px) {
    height: 300px;
    border-radius: 8px;
  }
`;

export const PriceTag = styled.div`
  margin-left: auto;
  font-family: "display";
  font-size: 1.2rem;

  @media (min-width: 800px) {
    margin-right: auto;
    margin-left: 0;
    margin-top: auto;
  }
`;
