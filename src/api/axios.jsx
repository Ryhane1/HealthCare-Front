import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {

        const status = error.response?.status;

        switch (status) {

            case 400:
                console.error("Erreur 400 : Requête invalide.");
                break;

            case 401:
                console.error("Erreur 401 : Session expirée.");

                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("role");

                window.location.href = "/";
                break;

            case 403:
                console.error("Erreur 403 : Accès interdit.");
                break;

            case 404:
                console.error("Erreur 404 : Ressource introuvable.");
                break;

            case 500:
                console.error("Erreur 500 : Erreur interne du serveur.");
                break;

            default:
                console.error("Une erreur est survenue.");
        }

        return Promise.reject(error);
    }
);

export default api;



// const api = axios.create({
//   baseURL: "http://localhost:8080/",
// });

// api.interceptors.request.use((config) => {
//   const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZb3Vzc29mIiwicm9sZSI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaWF0IjoxNzg0NTY2MzA1LCJleHAiOjE3ODQ2NTI3MDV9.N9gbExS-0T05mVLmdqg7nRcr-pDea1Wf3d-ZV1vqIcw";
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;
