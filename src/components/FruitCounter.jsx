
function FruitCounter({ fruit, updateCounter }) {
    return (
        <div className="fruit-counter">
            <h2>{fruit.name}</h2>

            <button onClick={() => updateCounter(fruit.id, -1)}>
                -
            </button>

            <span>{fruit.count}</span>

            <button onClick={() => updateCounter(fruit.id, 1)}>
                +
            </button>
        </div>
    );
}

export default FruitCounter;
