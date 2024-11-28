import { Route, Routes, useNavigate } from "react-router-dom";
import RecipePage from "./pages/pecipe_page/RecipePage";
import { useLayoutEffect } from "react";

function App() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  useLayoutEffect(() => {
    if (pathName === "/recipe_page") {
      navigate("/recipe_page");
    }
  }, []);
  return (
    <>
      {/* <Link to={"/recipe_page"}>to</Link> */}
      <Routes>
        <Route path="/recipe_page" element={<RecipePage />} />
      </Routes>
    </>
  );
}

export default App;
