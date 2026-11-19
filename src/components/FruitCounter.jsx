import "./FruitCounter.css";

function FruitCounter({ fruit, handleChange }) {
    return (
        <div
            className={`fruit-counter ${
                fruit.count > 0 ? "active" : ""
            }`}
        >
            <h2>{fruit.name}</h2>

            <button
                value="-1"
                onClick={(event) => handleChange(event, fruit.id)}
            >
                -
            </button>

            <span>{fruit.count}</span>

            <button
                value="1"
                onClick={(event) => handleChange(event, fruit.id)}
            >
                +
            </button>
        </div>
    );
}

export default FruitCounter;