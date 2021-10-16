import styled from "styled-components";

export const Box = styled.div`
  max-width: 800px;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;

  @media (min-width: 800px) {
    width: 650px;
    margin-bottom: 20px;
    padding-left: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
`;

export const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  margin-left: 20px;
  margin-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  object-fit: cover;

  @media (min-width: 800px) {
    max-width: 300px;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  font-size: 1rem;
  margin-bottom: 3px;
`;

export const Description = styled.div`
  font-size: 0.8rem;
  margin-top: 3px;
  color: #999;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
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

export const Details = styled.div`
  display: flex;
  flex: 1;

  @media (min-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    margin-top: 10px;
  }
`;
