import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import CreateNote from "./components/CreateNote";
import UpdateNote from "./components/UpdateNote";
import Users from "./components/Notes";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/createNote' element={<CreateNote/>}></Route>
        <Route path='/updateNote/:id' element={<UpdateNote/>}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
