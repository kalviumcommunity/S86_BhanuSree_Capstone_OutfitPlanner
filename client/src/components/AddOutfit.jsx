import { useState } from 'react';
import './AddOutfit.css';

function AddOutfit() {
  const [outfitName, setOutfitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Outfit added: ${outfitName}`);
    setOutfitName('');
  };

  return (
    <div className="add-outfit">
      <h2>Add a New Outfit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter outfit name"
          value={outfitName}
          onChange={(e) => setOutfitName(e.target.value)}
          required
        />
        <button type="submit">Add Outfit</button>
      </form>
    </div>
  );
}

export default AddOutfit;
