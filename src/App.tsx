import { Link, Route, Routes } from "react-router-dom";
import RecipePage from "./pages/pecipe_page/RecipePage";

function App() {
  return (
    <>
      <Link to={"/recipe_page"}>to</Link>
      <Routes>
        <Route path="/recipe_page" element={<RecipePage />} />
      </Routes>
    </>
  );
}

export default App;
