import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { School } from "./schoolList.types";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { formatPriceRating, formatToStringList } from "../../utils";

interface Props {
  school: School;
}

const Box = styled.div`
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

const Image = styled.img`
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

const Title = styled.div`
  font-size: 1rem;
  margin-bottom: 3px;
`;

const Description = styled.div`
  font-size: 0.8rem;
  margin-top: 3px;
  color: #999;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const PriceTag = styled.div`
  margin-left: auto;
  font-family: "display";
  font-size: 1.2rem;

  @media (min-width: 800px) {
    margin-right: auto;
    margin-left: 0;
    margin-top: auto;
  }
`;

const Details = styled.div`
  display: flex;
  flex: 1;

  @media (min-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0;
  }
`;

const RatingBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    margin-top: 10px;
  }
`;

export const SchoolItem: React.FC<Props> = ({ school }) => {
  const history = useHistory();
  const formattedLanguages = formatToStringList(school.languages);

  const redirectToSchoolDetails = () => history.push(`/schools/${school.id}`);

  return (
    <Box onClick={redirectToSchoolDetails}>
      <Flex>
        <div style={{ minWidth: 300 }}>
          <Image src={school.imageUrl} alt={school.name} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "100%",
            marginLeft: "20px",
            marginRight: "15px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <RatingBox>
                <FaStar color="#FF385C" />
                <div style={{ marginLeft: "3px" }}>{school.rating}</div>
              </RatingBox>
              <div style={{ display: "flex" }}>
                <div>
                  <div
                    style={{
                      color: "#FF385C",
                      fontSize: "0.8rem",
                      marginBottom: "3px",
                    }}
                  >
                    {school.city} · {school.country}
                  </div>

                  <Title>{school.name}</Title>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <FaRegHeart
                size="1.2rem"
                fill={school.favorite ? "#FF385C" : "#000"}
              />
            </div>
          </div>

          <Description>{school.description}</Description>
          <div
            style={{
              width: "32px",
              borderTop: "1px solid #DDD",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          ></div>
          <Details>
            <div style={{ flex: 1, fontSize: "0.9rem", color: "#999" }}>
              {formattedLanguages}
            </div>
            <div
              style={{
                marginLeft: "auto",
                marginTop: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "#AAA",
                  letterSpacing: "1px",
                }}
              >
                {formatPriceRating(school.priceRating)}
              </div>
              <PriceTag>${school.price}</PriceTag>
            </div>
          </Details>
        </div>
      </Flex>
    </Box>
  );
};
