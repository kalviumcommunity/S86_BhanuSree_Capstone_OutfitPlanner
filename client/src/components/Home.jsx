import './Home.css';

function Home() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="home">
      <div className="weather-box">
        <div>Chennai</div>
        <div>78° Cloudy</div>
      </div>

      <div className="welcome-section">
        <h1>Welcome, Rivarly!</h1>
        <h2>{today}</h2>
      </div>
    </div>
  );
}

export default Home;
