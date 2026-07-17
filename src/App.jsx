// import { useState } from 'react'
// import './App.css'
// import Navbar from "./components/Navbar";
// import Sidebar from './compenents/Sidebar';
// import NotFound from './pages/NotFound';


// function App() {

//   return (
//     <>
//        <Navbar />
//        <Sidebar />

//             <Routes>

//                 <Route
//                     path="/"
//                     element={<ProductList products={products} addCart={addCart} />}
//                 />

//                 <Route
//                     path="/add"
//                     element={<AddProduct addProduct={addProduct} />}
//                 />

//                 <Route
//                     path="/cart"
//                     element={<Cart
//                         cart={cart}
//                         onRemove={removeCart}
//                         total={getTotal()}
//                         />}
//                 />

//                 <Route
//                     path="*"
//                     element={<NotFound />} />

//             </Routes>
//     </>
//   )
// }

// export default App














import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
// import NotFound from './pages/NotFound';

// import PatientList from './pages/Patients/PatientList';
// import PatientDetail from './pages/Patients/PatientDetail';
// import PatientForm from './pages/Patients/PatientForm';

// import MedecinList from './pages/Medecins/MedecinList';
// import MedecinDetail from './pages/Medecins/MedecinDetail';
// import MedecinForm from './pages/Medecins/MedecinForm';

// import RdvList from './pages/RendezVous/RdvList';
// import RdvDetail from './pages/RendezVous/RdvDetail';
// import RdvForm from './pages/RendezVous/RdvForm';

// import DossierList from './pages/Dossiers/DossierList';
// import DossierDetail from './pages/Dossiers/DossierDetail';
// import DossierForm from './pages/Dossiers/DossierForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar/>
    
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* <Route path="/patients" element={<PatientList />} />
        <Route path="/patients/new" element={<PatientForm />} />
        <Route path="/patients/edit/:id" element={<PatientForm />} />
        <Route path="/patients/:id" element={<PatientDetail />} />

        <Route path="/medecins" element={<MedecinList />} />
        <Route path="/medecins/new" element={<MedecinForm />} />
        <Route path="/medecins/edit/:id" element={<MedecinForm />} />
        <Route path="/medecins/:id" element={<MedecinDetail />} />

        <Route path="/rendez-vous" element={<RdvList />} />
        <Route path="/rendez-vous/new" element={<RdvForm />} />
        <Route path="/rendez-vous/edit/:id" element={<RdvForm />} />
        <Route path="/rendez-vous/:id" element={<RdvDetail />} />

        <Route path="/dossiers" element={<DossierList />} />
        <Route path="/dossiers/new" element={<DossierForm />} />
        <Route path="/dossiers/edit/:id" element={<DossierForm />} />
        <Route path="/dossiers/:id" element={<DossierDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;