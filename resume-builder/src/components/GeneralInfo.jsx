function GeneralInfo({ data, onChange, onSubmit }) {
    return (
        <form className="cv-form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
            <h3>General Information</h3>

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name" 
                placeholder="Aaron Sujana"
                value={data.name}
                onChange={onChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email" 
                placeholder="aarondsujana@gmail.com"
                value={data.email}
                onChange={onChange}
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
                type="number"
                name="phone" 
                placeholder="+1 (512) XXX-XXXX"
                value={data.phone}
                onChange={onChange}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default GeneralInfo;