import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Drip Trip</h2>
      <ul>
        <li><Link to="/">Dash Board</Link></li>
        <li><Link to="/outfit-suggestion">Outfit Suggestion</Link></li>
        <li><Link to="/my-closet">My Closet</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/add-outfit">Add Outfit</Link></li>
        <li><Link to="/saved-looks">Saved Looks</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
