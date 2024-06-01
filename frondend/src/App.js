import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RegisterComponent from "./pages/Register";
import LoginComponent from "./pages/LoginComponent";
import TodoComponent from "./pages/TodoComponent";
function App() {
  return (
    <div >
<Router>
  <Routes>
  <Route path="/*" exact element={<RegisterComponent/>}/>
  <Route path="/register*" exact element={<RegisterComponent/>}/>
  <Route path="/login*" exact element={<LoginComponent/>}/>
  <Route path="/todo*" exact element={<TodoComponent/>}/>

  </Routes>
</Router>
    </div>
  );
}

export default App;