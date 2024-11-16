// JSX
const elements = (
    <div>
        <p id="1">
            <b>
                <i>Hello World!</i>
            </b>
        </p>
        <h1>GOA</h1>
        <button>Click me!</button>
    </div>
);

const h1 = (
    <h1>GOA</h1>
)

// Access root from html
const rootHTML = document.getElementById("root");

// Create React root
const root = ReactDOM.createRoot(rootHTML);

// Render the JSX content
root.render(elements)