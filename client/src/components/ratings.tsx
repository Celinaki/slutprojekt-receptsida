import styled from "styled-components";
import ReactStars from "react-stars";
import React from "react";
import { postRating } from "../api/index";

interface ratingProps {
  recipeRatings: Array<number>;
  recipeId: string;
  edit: boolean;
}
// const ratingChanged = ({newRating}: any) => {
//   console.log(newRating)
// }

const calculateAverage = (rating: any) => {
  const middleValue = rating.reduce((a: number, b: number) => a + b);
  return middleValue / rating.length;
};

const StyledStars = styled(ReactStars)`
  display: flex;
`;

const starColor = "#145858";
const emptyStarColor = "#7faf7b";

const Stars = ({ recipeRatings, recipeId, edit }: ratingProps) => {
  const ratingChanged = async (newRating: any) => {
    console.log(newRating, recipeId);
    await postRating(recipeId, newRating);
  };
  return (
    <StyledStars
      count={5}
      value={calculateAverage(recipeRatings)}
      color1={emptyStarColor}
      color2={starColor}
      size={40}
      edit={edit}
      half={false}
      onChange={ratingChanged}
    />
  );
};
export default Stars;
