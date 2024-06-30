import { Route, Routes } from "react-router-dom";
import RecipePage from "./pages/pecipe_page/RecipePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/recipe_page" element={<RecipePage />} />
      </Routes>
    </>
  );
}

export default App;
