function CVPreview({ data, jobs, onEdit }) {
    return (
        <div className="cv-preview">
            <section className="preview-header">
                <h2>{data.name || "Your Name"}</h2>
                <p>{data.email} | {data.phone}</p>
            </section>

            <hr />

            <section className="preview-section">
                <h3>Work History</h3>
                {jobs.map((job) => (
                    <div className="preview-item" key={job.id}>
                        <div className="preview-row">
                            <strong>{job.company || "Company Name"}</strong>
                            <span>{job.date}</span>
                        </div>
                        <p><em>{job.position || "Position Title"}</em></p>
                    </div>
                ))}
            </section>

            <button onClick={onEdit}>Edit Information</button>
        </div>
    )
}

export default CVPreview;