import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { School } from "./schoolList.types";
import { FaStar } from "react-icons/fa";
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
  max-height: 400px;
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
  order: 1;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const SchoolItem: React.FC<Props> = ({ school }) => {
  const history = useHistory();
  const formattedLanguages = formatToStringList(school.languages);

  const redirectToSchoolDetails = () => history.push(`/schools/${school.id}`);

  return (
    <Box onClick={redirectToSchoolDetails}>
      <Flex>
        <Image src="https://picsum.photos/800/400" alt={school.name} />
        <div
          style={{
            flex: 1,
            marginLeft: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", order: 1 }}>
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
            <div style={{ marginLeft: "auto", marginRight: "15px" }}>
              <div style={{ color: "#AAA", letterSpacing: "1px" }}>
                {formatPriceRating(school.priceRating)}
              </div>
            </div>
          </div>
          <Description>{school.description}</Description>
          <div
            style={{
              width: "32px",
              borderTop: "1px solid #DDD",
              marginTop: "10px",
              marginBottom: "10px",
              order: 1,
            }}
          ></div>
          <div style={{ fontSize: "0.9rem", color: "#999", order: 1 }}>
            {formattedLanguages}
          </div>
          <div style={{ display: "flex", marginBottom: "10px", order: 0 }}>
            <FaStar color="#FF385C" />
            <div style={{ marginLeft: "3px" }}>{school.rating}</div>
          </div>
        </div>
      </Flex>
    </Box>
  );
};
