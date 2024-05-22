import style from "../cssmodules/SingleRecipeMod.module.css";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import StarRatings from "./ratings";
import Navbar from "./Navbar";
import { FaStar, FaRegClock } from "react-icons/fa";
import Divider from "@mui/material/Divider";

const SingleRecipe = () => {
  const [recipe, setRecipe] = useState<any>({});
  const { recipeId } = useParams();
  useEffect(() => {
    console.log(recipeId);
    const url = `https://planned-sammy-celinaki.koyeb.app/recipes/${recipeId}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [voted, setVote] = useState(false);
  const setClicked = () => {
    setVote(true);
  };
  const calculateAverage = (rating: any[]): number => {
    const middleValue = rating?.reduce((a: number, b: number) => a + b);
    const average = middleValue / rating?.length;
    return parseFloat(average.toFixed(1));
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className={style.bigwrapper}>
        {/* <Sidebar /> */}
        <div className={style.recipewrap}>
          <article className={style.card}>
            {/* <h1>{recipe.title}</h1> */}
            <section className={style.imgdescr}>
              <img src={recipe.imgUrl} alt="" className={style.bigimg} />
              {/* <h2>{recipe.description} </h2> */}
            </section>
            <div className={style.content}>
              <h1>{recipe.title}</h1>
              <div
                style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}
              >
                <span style={{ alignItems: "center", display: "flex" }}>
                  <FaStar
                    title={"Rating stars"}
                    size={26}
                    color={"rgb(241, 210, 32)"}
                  />
                  <span
                    style={{
                      marginLeft: "0.8rem",
                      fontWeight: "bolder",
                    }}
                  >
                    {recipe.ratings && calculateAverage(recipe.ratings)}
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <FaRegClock title={"Time"} size={26} />
                  <span
                    style={{
                      marginLeft: "0.8rem",
                      fontWeight: "bolder",
                    }}
                  >
                    {recipe.timeInMins} min
                  </span>
                </span>
              </div>

              <div className={style.instructions}>
                <div className={style.ingredients}>
                  <h2>Ingredients</h2>
                  <Divider style={{ marginTop: "8px" }} variant="fullWidth" />
                  <ul className={style.plantList}>
                    {recipe.ingredients &&
                      recipe.ingredients?.map((ingredient: any) => (
                        <li
                          className={style.vegan}
                          key={`${ingredient.index}_ingredient`}
                        >
                          <span style={{ marginRight: 8 }}> &#x1f331;</span>
                          {ingredient.name.charAt(0).toUpperCase() +
                            ingredient.name.slice(1)}{" "}
                          {ingredient.amount} {ingredient.unit}
                        </li>
                      ))}{" "}
                  </ul>
                </div>
                <div className={style.lists}>
                  <h2>Instructions</h2>
                  <ol className={style.ul}>
                    {recipe.instructions &&
                      recipe.instructions?.map((step: any) => (
                        <li key={step.index}>{step}</li>
                      ))}
                  </ol>
                </div>
              </div>
              <section className={style.rating}>
                {/* <span  {setClicked((clicked) => false &&)} > test</span> */}
                {voted === false ? (
                  <>
                    <h2>What did you think?</h2>{" "}
                    <span onClick={setClicked}>
                      {recipe.ratings && (
                        <StarRatings
                          edit={true}
                          recipeId={recipe._id}
                          recipeRatings={recipe.ratings}
                        />
                      )}
                    </span>{" "}
                  </>
                ) : (
                  <h1>Your rating has been added!</h1>
                )}
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default SingleRecipe;
