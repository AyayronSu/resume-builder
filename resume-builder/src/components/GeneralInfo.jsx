function GeneralInfo({ data, onClickInput }) {
    return (
        <fieldset>
            <legend>Personal Information</legend>

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name" 
                placeholder="Aaron Sujana"
                value={data.name}
                onClick={onClickInput}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email" 
                placeholder="aarondsujana@gmail.com"
                value={data.email}
                onClick={onClickInput}
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
                type="number"
                name="phone" 
                placeholder="+1 (512) XXX-XXXX"
                value={data.phone}
                onClick={onClickInput}
            />
        </fieldset>
    )
}

export default GeneralInfo;