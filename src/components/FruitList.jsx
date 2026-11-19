import FruitCounter from "./FruitCounter.jsx";
import "./FruitList.css";

function FruitList({ fruits, handleChange }) {
    return (
        <div className="counter-images">
            {fruits.map((fruit) => (
                <FruitCounter
                    key={fruit.id}
                    fruit={fruit}
                    handleChange={handleChange}
                />
            ))}
        </div>
    );
}

export default FruitList;