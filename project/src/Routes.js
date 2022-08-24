import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MainPage from "./routes/MainPage";
import NavBar from "./routes/Navbar";
import EmptyEmotion from './routes/EmptyEmotion';
import Diary from './routes/Diary';
import Mission from './routes/Mission';
import ShareEmotion from './routes/ShareEmotion';
import Footer from "./routes/Footer";

function Routers() {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/emotion/empty" element={<EmptyEmotion />} />
                <Route path="/emotion/share" element={<ShareEmotion />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/mission" element={<Mission />} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default Routers;