import "./Resetbutton.css"

function ResetButton({ resetCounters }) {
    return (
        <button
            className="resetButton"
            onClick={resetCounters}
        >
            Reset alle counters
        </button>
    );
}

export default ResetButton;
