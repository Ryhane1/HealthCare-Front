import { NavLink } from "react-router-dom";
// import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>Menu</h2>

      <NavLink to="/" end>
        📊 Tableau de bord
      </NavLink>

      <NavLink to="/patients">
        👤 Patients
      </NavLink>

      <NavLink to="/medecins">
        👨‍⚕️ Médecins
      </NavLink>

      <NavLink to="/rendez-vous">
        📅 Rendez-vous
      </NavLink>

      <NavLink to="/dossiers">
        📁 Dossiers médicaux
      </NavLink>

    </aside>
  );
}

export default Sidebar;