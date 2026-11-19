import "./FruitTotal.css";

function FruitTotal({ fruits }) {
    const totalFruits = fruits.reduce(
        (total, fruit) => total + fruit.count,
        0
    );

    return (
        <h3 className="fruit-total">
            Totaal geselecteerd fruit: {totalFruits}
        </h3>
    );
}

export default FruitTotal;