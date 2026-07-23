import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(
                "/auth/login",
                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "username",
                response.data.username
            );

            localStorage.setItem(
                "role",
                response.data.role
            );

            navigate("/dashboard");

        } catch (error) {

            setError(
                "Nom d'utilisateur ou mot de passe incorrect."
            );

            console.error(error);

        }

    };


    return (

        <div className="login-container">

            <form
                className="login-card"
                onSubmit={handleSubmit}
            >

                <h1>HealthCare+</h1>

                <h3>
                    Connexion
                </h3>

                <input
                    type="text"
                    name="username"
                    placeholder="Nom d'utilisateur"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    onChange={handleChange}
                />

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                <button type="submit">
                    Se connecter
                </button>

                 <p>
                    Vous n'avez pas de compte ?

                    <Link to="/register">
                        S'inscrire
                    </Link>
                </p>

            </form>

        </div>

    );
}

export default Login;