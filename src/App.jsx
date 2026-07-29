import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import PatientsList from './pages/Patients/PatientsList';
import PatientForm from './pages/Patients/PatientForm';
import PatientDetails from './pages/Patients/PatientDetails';

import MedecinsList from './pages/Medecins/MedecinsList';
import MedecinForm from './pages/Medecins/MedecinForm';
import MedecinDetails from './pages/Medecins/MedecinDetails';

import RendezVousList from './pages/RendezVous/RendezVousList';
import RendezVousForm from './pages/RendezVous/RendezVousForm';
import RendezVousDetails from './pages/RendezVous/RendezVousDetails';

import DossiersList from './pages/Dossiers/DossiersList';
import DossierForm from './pages/Dossiers/DossierForm';
import DossierDetails from './pages/Dossiers/DossierDetails';
import About from "./pages/About";
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';
import PrivateRoute from "./guards/PrivateRoute.jsx";
import RoleGuard from "./guards/RoleGuard.jsx";


function App() {
  return (
    <>
      <div className="app">

        
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/patients" element={<PatientsList />} />
            <Route path="/patients/add" element={<PatientForm />} />
            <Route path="/patients/edit/:id" element={<PatientForm />} />
            <Route path="/patients/:id" element={<PatientDetails />} />

            <Route path="/medecins" element={
              <PrivateRoute>
                <RoleGuard role="ADMIN"><MedecinsList/></RoleGuard>
              </PrivateRoute>
            } />
            <Route path="/medecins/add" element={
              <PrivateRoute>
                <RoleGuard role="ADMIN"><MedecinForm/></RoleGuard>
              </PrivateRoute>
            } />
            <Route path="/medecins/edit/:id" element={
              <PrivateRoute>
                <RoleGuard role="ADMIN"><MedecinForm/></RoleGuard>
              </PrivateRoute>
            } />
            <Route path="/medecins/:id" element={
              <PrivateRoute>
                  <RoleGuard role="ADMIN">
                      <MedecinDetails />
                  </RoleGuard>
              </PrivateRoute>
            } />

            <Route path="/rendezvous" element={<RendezVousList />} />
            <Route path="/rendezvous/add" element={<RendezVousForm />} />
            <Route path="/rendezvous/edit/:id" element={<RendezVousForm />} />
            <Route path="/rendezvous/:id" element={<RendezVousDetails />} />

            <Route path="/dossiers" element={<DossiersList />} />
            <Route path="/dossiers/add" element={<DossierForm />} />
            <Route path="/dossiers/edit/:id" element={<DossierForm />} />
            <Route path="/dossiers/:id" element={<DossierDetails />} />
            <Route path="/about" element={<About/>}/>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;