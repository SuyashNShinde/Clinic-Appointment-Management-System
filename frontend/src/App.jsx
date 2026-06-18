import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/book"
          element={<BookAppointment />}
        />

        <Route
          path="/appointments"
          element={<MyAppointments />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;