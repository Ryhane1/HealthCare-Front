import { Link } from 'react-router-dom';

function Dashboard() {
  const cards = [
    { title: 'Patients', link: '/patients', desc: 'Gérer les patients' },
    { title: 'Médecins', link: '/medecins', desc: 'Gérer les médecins' },
    { title: 'Rendez-vous', link: '/rendez-vous', desc: 'Gérer les rendez-vous' },
    { title: 'Dossiers Médicaux', link: '/dossiers', desc: 'Gérer les dossiers' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>HealthCare+ Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {cards.map((c, i) => (
          <Link key={i} to={c.link} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;