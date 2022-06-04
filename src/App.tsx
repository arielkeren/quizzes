import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Play from "./components/play/Play";
import Create from "./components/Create";
import Edit from "./components/edit/Edit";
import BottomMenu from "./components/BottomMenu";
import Quiz from "./components/play/Quiz";
import EditQuiz from "./components/edit/EditQuiz";
import PageNotFound from "./components/PageNotFound";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/play"
        element={
          <>
            <Play />
            <BottomMenu />
          </>
        }
      />
      <Route
        path="/create"
        element={
          <>
            <Create />
            <BottomMenu />
          </>
        }
      />
      <Route
        path="/edit"
        element={
          <>
            <Edit />
            <BottomMenu />
          </>
        }
      />
      <Route path="/play/:id" element={<Quiz />} />
      <Route path="/edit/:id" element={<EditQuiz />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
