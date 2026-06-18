import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

<>
  <Navbar />

  <div>
    ...
  </div>
</>

function BookAppointment() {

  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    doctor_id: "",
    appointment_date: "",
    appointment_time: ""
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {

    try {

      const response =
        await api.get("/doctors");

      setDoctors(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const patient_id =
        localStorage.getItem("patient_id");

      await api.post(
        "/appointments/book",
        {
          patient_id,
          doctor_id: formData.doctor_id,
          appointment_date:
            formData.appointment_date,
          appointment_time:
            formData.appointment_time
        }
      );

      alert(
        "Appointment Booked Successfully"
      );

      navigate("/appointments");

    } catch (error) {

      console.error(error);

      alert("Booking Failed");
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "500px",
        margin: "auto"
      }}
    >
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>

        <select
          name="doctor_id"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px"
          }}
        >
          <option value="">
            Select Doctor
          </option>

          {
            doctors.map((doctor) => (
              <option
                key={doctor.doctor_id}
                value={doctor.doctor_id}
              >
                {doctor.name}
                {" - "}
                {doctor.specialization}
              </option>
            ))
          }

        </select>

        <br /><br />

        <input
          type="date"
          name="appointment_date"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <br /><br />

        <input
          type="time"
          name="appointment_time"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px"
          }}
        >
          Book Appointment
        </button>

      </form>
    </div>
  );
}

export default BookAppointment;