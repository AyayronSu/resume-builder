function CVPreview({ data, onEdit }) {
    return (
        <div className="cv-preview">
            <h2>{data.name || "Your Name"}</h2>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>

            <button onClick={onEdit}>Edit Information</button>
        </div>
    )
}

export default CVPreview;