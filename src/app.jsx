import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/homepage";
import Register from "./pages/register";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;