import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import Sidebar from "../../components/Sidebar";


import "./Patients.css";

function PatientsList() {

    const [patients, setPatients] = useState([]);

    const loadPatients = async () => {
        try {
            const response = await api.get("/patient");

            setPatients(response.data.content);
        }
        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadPatients();

    }, []);


    const handleDelete = async (id) => {

        const confirmation = window.confirm(
            "Supprimer ce patient ?"
        );

        if (!confirmation) return;


        try {

            await api.delete(`/patient/${id}`);

            loadPatients();

        } catch (error) {

            console.log(error);

        }

    };


    return (
        <>
        <Sidebar/>

        <div className="patients-container">


            <div className="patients-header">

                <h1>
                    Liste des Patients
                </h1>

                <Link
                    to="/patients/add"
                    className="btn-add"
                >
                    + Ajouter
                </Link>

            </div>



            <table>

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Actions</th>

                    </tr>

                </thead>


                <tbody>

                    {Array.isArray(patients) &&
                        patients.length > 0 ? (

                        patients.map((patient) => (

                            <tr key={patient.id}>

                                <td>{patient.id}</td>

                                <td>{patient.nom}</td>

                                <td>{patient.prenom}</td>

                                <td>{patient.email}</td>


                                <td>

                                    <Link
                                        to={`/patients/${patient.id}`}
                                        className="btn-info"
                                    >
                                        Voir
                                    </Link>

                                    {" "}

                                    <Link
                                        to={`/patients/edit/${patient.id}`}
                                        className="btn-warning"
                                    >
                                        Modifier
                                    </Link>

                                    {" "}

                                    <button
                                        className="btn-danger"
                                        onClick={() =>
                                            handleDelete(patient.id)
                                        }
                                    >
                                        Supprimer
                                    </button>

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td colSpan="5">
                                Aucun patient trouvé.
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>

        </>

    );

}

export default PatientsList;