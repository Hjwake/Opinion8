import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Import pages
import Home from "./pages/Home.js";
import Signin from "./pages/Signin.js";
import Signup from "./pages/Signup.js";
import Profile from "./pages/Profile.js";
import Error from "./pages/Error.js";
import DailyEight from './pages/DailyEight.js';
import Results from './pages/Results.js';
import WelcomeQuestions from './pages/WelcomeQuestions.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/welcome-questions" element={<WelcomeQuestions/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/daily-eight" element={<DailyEight/>} />
          <Route path="/results" element={<Results/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;