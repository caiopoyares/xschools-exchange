import React from "react";
import { useHistory } from "react-router-dom";

import {
  Box,
  Flex,
  Image,
  SchoolInfo,
  RatingBox,
  Title,
  Description,
  Details,
  PriceTag,
} from "./SchoolItem.styles";
import { School } from "./schoolList.types";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { formatPriceRating, formatToStringList } from "../../utils";
import colors from "../../constants/colors";

interface Props {
  school: School;
}

export const SchoolItem: React.FC<Props> = ({ school }) => {
  const history = useHistory();
  const formattedLanguages = formatToStringList(school.languages);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  const redirectToSchoolDetails = () => history.push(`/schools/${school.id}`);

  return (
    <Box onClick={redirectToSchoolDetails}>
      <Flex>
        <div style={{ minWidth: 300 }}>
          <Image src={school.imageUrl} alt={school.name} />
        </div>
        <SchoolInfo>
          <div style={{ display: "flex" }}>
            <div>
              <RatingBox>
                <FaStar color={colors.primary} />
                <div style={{ marginLeft: "3px" }}>{school.rating}</div>
              </RatingBox>
              <div style={{ display: "flex" }}>
                <div>
                  <div
                    style={{
                      color: colors.primary,
                      fontSize: "0.8rem",
                      marginBottom: "3px",
                    }}
                  >
                    {school.location.city} · {school.location.country}
                  </div>

                  <Title>{school.name}</Title>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "auto" }} onClick={toggleFavorite}>
              <FaRegHeart
                size="1.2rem"
                fill={isFavorite ? colors.primary : colors.black}
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
          </Details>
        </SchoolInfo>
      </Flex>
    </Box>
  );
};
