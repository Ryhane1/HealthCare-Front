import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>HealthCare+</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link" end>
          🏠 Tableau de bord
        </NavLink>
        <NavLink to="/patients" className="sidebar-link">
          👤 Patients
        </NavLink>
        <NavLink to="/medecins" className="sidebar-link">
          👨‍⚕️ Médecins
        </NavLink>
        <NavLink to="/rendezvous" className="sidebar-link">
          📅 Rendez-vous
        </NavLink>
        <NavLink to="/dossiers" className="sidebar-link">
          📋 Dossiers Médicaux
        </NavLink>
        <NavLink to="/about" className="sidebar-link">
          📋  À propos
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;