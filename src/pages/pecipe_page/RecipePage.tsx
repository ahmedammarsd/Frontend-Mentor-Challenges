import "./style.css";
import image from "../../assets/recipe-page-main-images/image-omelette.jpeg";
const RecipePage = () => {
  document.title = "Frontend Mentor | Recipe page";
  return (
    <div className="body-recipe">
      <div className="container-recipe">
        {/* Image Container */}
        <div className="img-container-recipe">
          <img src={image} />
        </div>
        {/* Image Container */}
        <div className="content-recipe">
          {/* Title & Description */}

          <h1>Simple Omelete Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          {/* Title & Description */}
          {/* Section Two */}
          <div className="section-prepatation">
            <h3>Prepatation Time</h3>
            <ul>
              <li>
                <span>
                  <span className="title-li">Total</span>: Approximately 10
                  minutes
                </span>
              </li>
              <li>
                <span>
                  <span className="title-li">Preparation</span>: 5 minutes
                </span>
              </li>
              <li>
                <span>
                  <span className="title-li">Cooking</span>: 5 minutes
                </span>
              </li>
            </ul>
          </div>
          {/* Section Two */}

          {/* Section Three Ingredients */}
          <div className="container-ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>
                <span> 2-3 large eggs</span>
              </li>
              <li>
                <span> Salt, to taste</span>
              </li>
              <li>
                <span>Pepper, to taste</span>
              </li>
              <li>
                <span>1 tablespoon of butter or oil</span>
              </li>
              <li>
                <span>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </div>
          {/* Section Three Ingredients */}
          <hr />
          {/* Section Four Instructions */}
          <div className="container-instructions">
            <h2>Instructions</h2>
            <ol>
              <li>
                <div>
                  <span className="title-li">Beat the eggs</span>: In a bowl,
                  beat the eggs with a pinch of salt and pepper until they are
                  well mixed. You can add a tablespoon of water or milk for a
                  fluffier texture.
                </div>
              </li>
              <li>
                <div>
                  <span className="title-li">Heat the pan</span>: Place a
                  non-stick frying pan over medium heat and add butter or oil.
                </div>
              </li>
              <li>
                <div>
                  <span className="title-li">Cook the omelette</span>: Once the
                  butter is melted and bubbling, pour in the eggs. Tilt the pan
                  to ensure the eggs evenly coat the surface.
                </div>
              </li>
              <li>
                <div>
                  <span className="title-li">Add fillings (optional)</span> :
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </div>
              </li>
              <li>
                <div>
                  <span className="title-li">Fold and serve</span> : As the
                  omelette continues to cook, carefully lift one edge and fold
                  it over the fillings. Let it cook for another minute, then
                  slide it onto a plate.
                </div>
              </li>
              <li>
                <div>
                  <span className="title-li">Enjoy</span>: Serve hot, with
                  additional salt and pepper if needed.
                </div>
              </li>
            </ol>
          </div>
          {/* Section Four Instructions */}
          <hr />
          {/* Section Four Nutrition */}
          <div className="container-nutrition">
            <h2>Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              <tr className="tr">
                <td> Calories</td>
                <td className="table-td">277kcal</td>
              </tr>
              <tr className="tr">
                <td> Carbs</td>
                <td className="table-td">0g</td>
              </tr>
              <tr>
                <td> Protein</td>
                <td className="table-td">20g</td>
              </tr>
              <tr>
                <td> Fat</td>
                <td className="table-td">22g</td>
              </tr>
            </table>
          </div>
          {/* Section Four Nutrition */}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
