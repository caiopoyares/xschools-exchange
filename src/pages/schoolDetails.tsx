import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { withLayout } from "../components/withLayout";
import details from "./../schoolDetails.json";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { capitalize, formatToStringList } from "../utils";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import schools from "../schools.json";

interface Params {
  id: string;
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding-bottom: 2rem;
  min-height: 100vh;
  @media (min-width: 800px) {
    padding-top: 2rem;
  }
`;

const Container = styled.div`
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

const Title = styled.h1`
  margin-top: 0;
  font-family: Display;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 15px;
`;

const ImageBox = styled.div`
@media (min-width: 800px) {\
  border-radius: 8px;
  margin-left: 15px;
  margin-right: 15px;
}
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media (min-width: 800px) {
    height: 300px;
    border-radius: 8px;
  }
`;

const SchoolDetails: React.FC = () => {
  const { id } = useParams<Params>();
  const schoolDetails = details;
  const formattedLanguages = formatToStringList(schoolDetails.languages);

  const school = schools.find((school) => school.id === id);

  // const { isLoading, error, data } = useQuery("schoolDetails", () =>
  //   fetch(`${process.env.REACT_APP_API_URL}/schools/${id}`).then((res) =>
  //     res.json()
  //   )
  // );

  // if (isLoading) return <Spinner />;

  // if (error) return <div>An error has occured.</div>;

  return (
    <Wrapper>
      <Container>
        <Title>{schoolDetails.name}</Title>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            marginBottom: "15px",
            marginLeft: "15px",
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
          <div style={{ marginLeft: "auto", marginRight: "20px" }}>
            <FaRegHeart
              size="1.2rem"
              fill={schoolDetails.favorite ? "#FF385C" : "#000"}
            />
          </div>
        </div>
        <ImageBox>
          <Image
            src={"https://picsum.photos/800/400"}
            alt={schoolDetails.name}
          />
        </ImageBox>
        <div
          style={{
            marginTop: "1.2rem",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        >
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
            <div
              style={{
                fontSize: "0.9rem",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
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
            <div style={{ marginTop: "1rem", color: "#333" }}>
              {schoolDetails.description}
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <div
                style={{
                  fontFamily: "display",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  marginBottom: "15px",
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
    </Wrapper>
  );
};

export default withLayout(SchoolDetails);
