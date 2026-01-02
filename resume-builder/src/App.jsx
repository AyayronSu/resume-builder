import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import CVPreview from './components/CVPreview';

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-container">
      <h1>CV Generator</h1>
      {isEditing ?  (
        <GeneralInfo
          data={personalInfo}
          onChange={handleChange}
          onSubmit={() => setIsEditing(false)}
        />
      ) : (
        <CVPreview
          data={personalInfo}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  )
}

export default App
