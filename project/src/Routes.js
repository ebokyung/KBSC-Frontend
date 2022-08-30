import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MainPage from "./routes/MainPage";
import NavBar from "./routes/Navbar";
import EmptyEmotion from './routes/EmptyEmotion';
import Diary from './routes/Diary';
import Mission from './routes/Mission';
import ShareEmotion from './routes/ShareEmotion';
import Footer from "./routes/Footer";
import Chat from './routes/Chat';
import Info from './routes/Info';
import LogoIn from './routes/LogIn';
import SignUp from './routes/SignUp';

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
                <Route path="/chat" element={<Chat />} />
                <Route path="/info" element={<Info />} />
                <Route path="/login" element={<LogoIn />} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default Routers;