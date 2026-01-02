import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import ExperienceForm from './components/ExperienceForm';
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

  const [jobs, setJobs] = useState([
    { 
      id: crypto.randomUUID(), 
      company: '',
      position: '',
      date: ''
    }
  ])

  const addJob = () => {
    setJobs([...jobs, {
      id: crypto.randomUUID(),
      company: '',
      position: '',
      date: ''
    }])
  }

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleJobChange = (id, e) => {
    const { name, value } = e.target;

    setJobs(jobs.map(job => {
      if (job.id === id) {
        return {...job, [name]: value };
      }
      return job;
    }));
  }

  return (
    <div className="app-container">
      <h1>CV Generator</h1>
      {isEditing ?  (
        <div className="form-container">
          <GeneralInfo
            data={personalInfo}
            onChange={handleChange}
            onSubmit={() => setIsEditing(false)}
          />
  
          <ExperienceForm
            jobs={jobs}
            onChange={handleJobChange}
            onAdd={addJob}
            onDelete={deleteJob}
          />

          <button className="generate-btn" onClick={() => setIsEditing(false)}>
            Generate CV
          </button>
        </div>
      ) : (
        <CVPreview
          data={personalInfo}
          jobs={jobs}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  )
}

export default App
