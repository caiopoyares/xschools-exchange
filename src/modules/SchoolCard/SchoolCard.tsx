import React from "react";
import { capitalize, formatToStringList } from "../../utils";
import { SchoolDetails } from "./schoolCard.types";
import {
  Container,
  Title,
  Image,
  ImageBox,
  PriceTag,
} from "./schoolCard.styles";
import { FaRegHeart, FaStar } from "react-icons/fa";
import colors from "../../constants/colors";

interface Props {
  school: SchoolDetails;
}

const SchoolCard: React.FC<Props> = ({ school }) => {
  const formattedLanguages = formatToStringList(school.languages);

  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);
  return (
    <Container>
      <Title>{school.name}</Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "auto",
          marginBottom: "15px",
          marginLeft: "15px",
        }}
      >
        <FaStar color={colors.primary} />
        <div style={{ marginLeft: "5px", fontSize: "0.9rem" }}>
          {school.ratings.total}
        </div>
        <div
          style={{
            color: colors.primary,
            fontSize: "0.9rem",
            marginLeft: "10px",
          }}
        >
          {school.city}, {school.country}
        </div>
        <div
          style={{ marginLeft: "auto", marginRight: "20px" }}
          onClick={toggleFavorite}
        >
          <FaRegHeart
            size="1.2rem"
            fill={isFavorite ? colors.primary : colors.black}
          />
        </div>
      </div>
      <ImageBox>
        <Image
          src={`https://picsum.photos/id/${school.id}/800/400`}
          alt={school.name}
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
              color: colors.primary,
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
              Starts at {school.schedule.start.month}/
              {school.schedule.start.year}
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
            Ends at {school.schedule.end.month}/{school.schedule.end.year}
          </text>
          <div style={{ marginTop: "1rem", color: colors.gray }}>
            {school.description}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "1.5rem", flex: 1 }}>
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
                {school.features.map((feature) => (
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
            <PriceTag>${school.totalPrice}</PriceTag>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { SchoolCard };
