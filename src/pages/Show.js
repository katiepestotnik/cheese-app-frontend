import { useState } from 'react';
function Show(props) {
    const id = props.match.params.id
  const cheeses = props.cheese
  const cheese = cheeses.find(ele => ele._id === id);

  const [editCheese, setEditCheese] = useState(cheese);
  const handleChange = (event) => {
    setEditCheese({ ...editCheese, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateCheese(editCheese, cheese._id);
    props.history.push('/cheeses');
  };

  const removeCheese = () => {
    props.deleteCheese(cheese._id);
    props.history.push('/cheeses');
  }
    return (
      <div className="cheese">
            <h1>{cheese.name}</h1>
            <h3>{cheese.countryOfOrigin}</h3>
        <img src={cheese.image} alt={cheese.name} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={editCheese.name}
            placeholder="name"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            name="countryOfOrigin"
            value={editCheese.countryOfOrigin}
            placeholder="Country of Origin"
            onChange={handleChange} /><br/>
          <input
            type="text"
            name="image"
            value={editCheese.image}
            placeholder="Image URL"
            onChange={handleChange}
          /><br/>
          <input
            type="submit"
            value="UPDATE CHEESE"
          />
        </form><br/>
        <button onClick={removeCheese}>DELETE CHEESE</button>
      </div>
    )
  }
  export default Show