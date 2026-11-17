
import { useState } from "react";
import "./Form.css";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        age: '0',
        postcode: '',
        frequency: 'Iedere week',
        moment: 'overdag',
        comments: '',
        akkoord: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Verstuurd!');
        console.log(formData);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Inschrijfformulier</h2>

                <div className="form-row">
                    <label htmlFor="name">Voornaam</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="lastname">Achternaam</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="age">Leeftijd</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        min="0"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="postcode">Postcode</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="frequency">
                        Bezorgfrequentie
                    </label>

                    <select
                        id="frequency"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                    >
                        <option value="Iedere week">Iedere week</option>
                        <option value="Om de week">Om de week</option>
                    </select>
                </div>

                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="moment"
                            value="overdag"
                            checked={formData.moment === 'overdag'}
                            onChange={handleChange}
                        />
                        Overdag
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="moment"
                            value="avond"
                            checked={formData.moment === 'avond'}
                            onChange={handleChange}
                        />
                        's Avonds
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Opmerking</label>
                    <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                    />
                </div>

                <div className="checkbox-group">
                    <label htmlFor="akkoord">
                        <input
                            type="checkbox"
                            id="akkoord"
                            name="akkoord"
                            checked={formData.akkoord}
                            onChange={handleChange}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                </div>

                <button type="submit">Verzend</button>
            </form>
        </div>
    );
}

export default Form;
