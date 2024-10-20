import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlantsList from "./components/PlantsList";
import ThankYouPage from "./components/ThankyouPage";
import "./App.css"

function App() {
  return (
    <div className="app-container">
    <BrowserRouter basename="/Easesmith-nursery">
     <Routes>
      <Route path="/" element={<PlantsList/>}/>
      <Route path="/thank-you/:productName" element ={<ThankYouPage/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
