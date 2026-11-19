import './FruitList.css';
import FruitCounter from "./FruitCounter.jsx";

function FruitList({ fruits, updateCounter }) {
    return (
        <div className="counter-images">
            {fruits.map((fruit) => (
                <FruitCounter
                    key={fruit.id}
                    fruit={fruit}
                    updateCounter={updateCounter}
                />
            ))}
        </div>
    );
}

export default FruitList;
