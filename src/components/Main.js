import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
const Main = (props) => {
    //state to hold list of cheese
    const [cheese, setCheese] = useState(null);
    //backend url api call
    const URL = "https://cheeses-app-backend.herokuapp.com/cheeses/";
    //function api call
    const getCheese = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCheese(data);
    };
    //function to create cheese
    const createCheese = async (cheese) => {
        await fetch(URL, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cheese),
        });
        getCheese();
    };
    //update function
    const updateCheese = async (cheese, id) => {
        await fetch(URL + id, {
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cheese)
        });
        getCheese();
    }
    const deleteCheese = async (id)=>{
        await fetch(URL + id, {
            method: 'delete'
        });
        getCheese()
    }

    useEffect(() => getCheese(), [])


    return (
        <main>
            <Switch>
                <Route exact path="/cheeses">
                    <Index cheese={cheese} createCheese={createCheese}/>
                </Route>
                <Route
          path="/cheeses/:id"
          render={(rp) => (
              <Show
              {...rp}
              cheese={cheese}
              updateCheese={updateCheese}
              deleteCheese={deleteCheese}

            />
          )}
        />
           </Switch>
        </main>
    );
};
export default Main;