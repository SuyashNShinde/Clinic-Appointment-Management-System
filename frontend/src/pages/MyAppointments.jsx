import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

<>
  <Navbar />

  <div>
    ...
  </div>
</>

function MyAppointments() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {

    try {

      const patientId =
        localStorage.getItem("patient_id");

      const response =
        await api.get(
          `/appointments/patient/${patientId}`
        );

      setAppointments(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  const cancelAppointment = async (id) => {

    try {

      await api.delete(
        `/appointments/${id}`
      );

      alert("Appointment Cancelled");

      fetchAppointments();

    } catch (error) {

      console.error(error);

      alert("Cancellation Failed");
    }
  };

  return (
    <div
      style={{
        padding: "30px"
      }}
    >
      <h2>My Appointments</h2>

      {
        appointments.length === 0 ? (
          <p>No Appointments Found</p>
        ) : (
          appointments.map((appointment) => (

            <div
              key={appointment.appointment_id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "8px"
              }}
            >
              <p>
                <strong>ID:</strong>
                {" "}
                {appointment.appointment_id}
              </p>

              <p>
                <strong>Doctor ID:</strong>
                {" "}
                {appointment.doctor_id}
              </p>

              <p>
                <strong>Date:</strong>
                {" "}
                {appointment.appointment_date}
              </p>

              <p>
                <strong>Time:</strong>
                {" "}
                {appointment.appointment_time}
              </p>

              <p>
                <strong>Status:</strong>
                
                <span
                  style={{
                    color:
                        appointment.status === "Cancelled"
                            ? "red"
                            : "green",
                    fontWeight: "bold"
                  }}
                >
                    {" "}
                    {appointment.status}
                </span>
              </p>
            
              <button
                onClick={() =>
                  cancelAppointment(
                    appointment.appointment_id
                  )
                }
              >
                Cancel Appointment
              </button>

            </div>
          ))
        )
      }

    </div>
  );
}

export default MyAppointments;