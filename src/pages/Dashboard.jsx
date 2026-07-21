import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const cards = [
    { title: 'Patients', desc: 'Gérer les patients', link: '/patients', icon: '👤' },
    { title: 'Médecins', desc: 'Gérer les médecins', link: '/medecins', icon: '👨‍⚕️' },
    { title: 'Rendez-vous', desc: 'Gérer les rendez-vous', link: '/rendezvous', icon: '📅' },
    { title: 'Dossiers', desc: 'Gérer les dossiers médicaux', link: '/dossiers', icon: '📋' },
  ];

  return (
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <p>Bienvenue dans HealthCare+</p>
      <div className="dashboard-cards">
        {cards.map((card, index) => (
          <Link to={card.link} key={index} className="dashboard-card">
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;