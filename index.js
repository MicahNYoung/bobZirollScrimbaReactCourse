const samplePage = (
    <div>
        <h1>This is a h1</h1>
        <p>This is a p</p>
        <p>This is another p</p>
        <pre>This is a pre</pre>
    </div>
)

// document.getElementById("root").append(JSON.stringify(samplePage));

//Using JSX variable with typical JS methods won't work because JSX returns as an object.

ReactDOM.render(samplePage, document.getElementById("root"));