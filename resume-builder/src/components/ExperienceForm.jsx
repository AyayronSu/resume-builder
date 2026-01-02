function ExperienceForm({ jobs, onChange, onAdd, onDelete }) {
    return (
        <section>
            <h3>Practical Experience</h3>
            {jobs.map((job) => (
                <div className="job-input-group" key={job.id}>
                    <label htmlFor="company">Company:</label>
                    <input 
                        type="text" 
                        name="company"
                        placeholder="E.g, Amazon"
                        value={job.company}
                        onChange={(e) => onChange(job.id, e)}
                    />
                    <label htmlFor="position">Position:</label>
                    <input 
                        type="text" 
                        name="position"
                        placeholder="Product Manager"
                        value={job.position}
                        onChange={(e) => onChange(job.id, e)}
                    />
                    <label htmlFor="date">Date:</label>
                    <input 
                        type="date" 
                        name="date"
                        value={job.date}
                        onChange={(e) => onChange(job.id, e)}
                    />         

                    <button className="delete-btn" type="button" onClick={() => onDelete(job.id)}>
                        Delete Position
                    </button>

                </div>
            ))}

            <button type="button" onClick={onAdd} className="add-btn">
                + Add Experience
            </button>

        </section>
    );
}

export default ExperienceForm;