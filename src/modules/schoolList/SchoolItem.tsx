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
  max-width: 570px;
  display: flex;
  margin-bottom: 15px;
  border: 1px solid #ededed;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 8px;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 280px;
  width: 100%;
  border-radius: 8px;
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

export const SchoolItem: React.FC<Props> = ({ school }) => {
  const history = useHistory();
  const formattedLanguages = formatToStringList(school.languages);

  return (
    <Box onClick={() => history.push(`/schools/${school.id}`)}>
      <div>
        <Image
          width={300}
          height={200}
          src="https://picsum.photos/300/200"
          alt={school.name}
        />
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
          <div style={{ marginLeft: "auto" }}>
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
          }}
        ></div>
        <div style={{ fontSize: "0.9rem", color: "#999" }}>
          {formattedLanguages}
        </div>
        <div style={{ display: "flex", marginTop: "auto" }}>
          <FaStar color="#FF385C" />
          <div style={{ marginLeft: "3px" }}>{school.rating}</div>
        </div>
      </div>
    </Box>
  );
};
