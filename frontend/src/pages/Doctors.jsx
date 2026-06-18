import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {

    try {

      const response =
        await api.get("/doctors");

      const sortedDoctors =
        response.data.sort(
          (a, b) =>
            a.name.localeCompare(b.name)
        );

      setDoctors(sortedDoctors);

    } catch (error) {

      console.error(error);
    }
  };

  const filteredDoctors =
    doctors.filter((doctor) =>
      doctor.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div>

      <Navbar />

      <div
        style={{
          padding: "20px"
        }}
      >

        <h2>Doctors Directory</h2>

        <input
          type="text"
          placeholder="Search Doctor"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "300px",
            padding: "10px",
            marginBottom: "20px"
          }}
        />

        {
          filteredDoctors.map(
            (doctor) => (

              <div
                key={doctor.doctor_id}
                style={{
                  border: "1px solid #ddd",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "10px"
                }}
              >

                <h3>
                  {doctor.name}
                </h3>

                <p>
                  Specialization:
                  {" "}
                  {doctor.specialization}
                </p>

                <p>
                  Experience:
                  {" "}
                  {doctor.experience}
                  {" "}
                  years
                </p>

                <p>
                  Availability:
                  {" "}
                  {
                    doctor.availability
                      ? "Available"
                      : "Unavailable"
                  }
                </p>

              </div>
            )
          )
        }

      </div>

    </div>
  );
}

export default Doctors;