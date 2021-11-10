import { useState } from 'react';
import { Link } from 'react-router-dom';
const Index = (props) => {
    const [newForm, setNewForm] = useState({
        name: '',
        countryOfOrigin: '',
        image:'',
    });
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCheese(newForm);
        setNewForm({
            name: '',
            countryOfOrigin: '',
            image: '',
        });
    };

    const loaded = () => {
        return <section className="container">{
            props.cheese.map((cheese) => {
                return <div key={cheese._id} className="cheese">
                    <Link to={`/cheeses/${cheese._id}`}>
                        <h3>{cheese.name}</h3>
                    </Link>
                    <h4>{cheese.countryOfOrigin}</h4>
                    <img src={cheese.image} alt={cheese.name} />
                </div>
    })
        }
            </section>
    };
    const loading = () => {
        return <h1>Loading... Please Wait.</h1>
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name='name'
                    placeholder='name'
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder="Country of Origin"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input type="submit" value="ADD"/>
            </form>
            {props.cheese ? loaded() : loading()}
        </section>
)    
};
export default Index;