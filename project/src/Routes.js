import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MainPage from "./routes/MainPage";
import NavBar from "./routes/Navbar";
import Emotion from './routes/Emotion';
import Diary from './routes/Diary';
import Mission from './routes/Mission';

function Routers() {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/emotion" element={<Emotion />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/mission" element={<Mission />} />
            </Routes>
        </Router>
    )
}
export default Routers;