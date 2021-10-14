import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { withLayout } from "../components/withLayout";
import details from "./../schoolDetails.json";
import { FaStar } from "react-icons/fa";
import { capitalize, formatToStringList } from "../utils";

interface Params {
  id: string;
}

const Container = styled.div`
  @media (min-width: 800px) {
    margin: 15px;
  }
`;

const Title = styled.h1`
  font-family: Display;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  @media (min-width: 800px) {\
    max-width: 600px;
    border-radius: 8px;
  }
`;

const SchoolDetails: React.FC = () => {
  const { id } = useParams<Params>();
  const schoolDetails = details;
  const formattedLanguages = formatToStringList(schoolDetails.languages);

  return (
    <Container>
      <Title>{schoolDetails.name}</Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "auto",
          marginBottom: "15px",
        }}
      >
        <FaStar color="#FF385C" />
        <div style={{ marginLeft: "5px", fontSize: "0.9rem" }}>
          {schoolDetails.ratings.total}
        </div>
        <div
          style={{
            color: "#FF385C",
            fontSize: "0.9rem",
            marginLeft: "10px",
          }}
        >
          {schoolDetails.city}, {schoolDetails.country}
        </div>
      </div>

      <div style={{ borderRadius: "8px" }}>
        <Image src={"https://picsum.photos/800/400"} />
      </div>
      <div style={{ marginTop: "1.2rem" }}>
        <div>
          <div
            style={{
              fontSize: "0.9rem",
              color: "#FF385C",
              marginBottom: "10px",
            }}
          >
            {formattedLanguages}
          </div>
          <div style={{ fontSize: "0.9rem", marginTop: "5px" }}>
            <text
              style={{
                color: "#999",
                fontFamily: "display",
                fontSize: "0.8rem",
                textTransform: "uppercase",
              }}
            >
              Starts at {schoolDetails.schedule.start.month}/
              {schoolDetails.schedule.start.year}
            </text>
          </div>
          <div style={{ fontSize: "0.9rem", marginTop: "5px" }}>
            <text
              style={{
                color: "#999",
                fontFamily: "display",
                fontSize: "0.8rem",
                textTransform: "uppercase",
              }}
            >
              Ends at {schoolDetails.schedule.end.month}/
              {schoolDetails.schedule.end.year}
            </text>
          </div>
          <div style={{ marginTop: "1rem", color: "#333" }}>
            {schoolDetails.description}
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div
              style={{
                fontFamily: "display",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Details:
            </div>
            <div>
              {schoolDetails.features.map((feature) => (
                <div
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "5px",
                    color: "#777",
                  }}
                >
                  · {capitalize(feature)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default withLayout(SchoolDetails);
