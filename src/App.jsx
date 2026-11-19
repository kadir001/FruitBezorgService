
import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import FruitList from "./components/FruitList.jsx";
import ResetButton from "./components/Resetbutton.jsx";
import FruitTotal from "./components/FruitTotal.jsx";

function App() {
    const [fruits, setFruits] = useState([
        { id: 1, name: "🍏 Appel", count: 0 },
        { id: 2, name: "🍌 Banaan", count: 0 },
        { id: 3, name: "🍓 Aardbei", count: 0 },
        { id: 4, name: "🥝 Kiwi", count: 0 },
    ]);

    function updateCounter(id, amount) {
        setFruits((prevFruits) =>
            prevFruits.map((fruit) =>
                fruit.id === id
                    ? {
                        ...fruit,
                        count: Math.max(0, fruit.count + amount),
                    }
                    : fruit
            )
        );
    }

    function resetCounters() {
        setFruits((prevFruits) =>
            prevFruits.map((fruit) => ({
                ...fruit,
                count: 0,
            }))
        );
    }

    const totalFruits = fruits.reduce(
        (total, fruit) => total + fruit.count,
        0
    );

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <FruitList
                fruits={fruits}
                updateCounter={updateCounter}
            />

            <FruitTotal fruits={fruits} />

            <ResetButton resetCounters={resetCounters} />

            <Form />


        </>
    );
}

export default App;
