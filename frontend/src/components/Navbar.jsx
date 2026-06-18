import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.clear();

    navigate("/");
  };

  return (
    <div
      style={{
        background: "#1976d2",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ color: "white" }}>
        Clinic Management System
      </h2>

      <div>

        <Link
          to="/doctors"
          style={{
            color: "white",
            marginRight: "15px"
          }}
        >
          Doctors
        </Link>

        <Link
          to="/book"
          style={{
            color: "white",
            marginRight: "15px"
          }}
        >
          Book Appointment
        </Link>

        <Link
          to="/appointments"
          style={{
            color: "white",
            marginRight: "15px"
          }}
        >
          My Appointments
        </Link>

        <button
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;