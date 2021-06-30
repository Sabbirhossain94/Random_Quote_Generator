function App() {

    const [quotes, setQuotes] = React.useState([]); //state hook
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [randomColors, setRandomColors] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])
    const getNewQuote = () => {
        const colors = [
            "#DFFF00",
            "#FFBF00",
            "#FF7F50",
            "#DE3163",
            "#9FE2BF",
            "#40E0D0",
            "#6495ED",
            "#CCCCFF",
        ];
        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColors = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex]);
        setRandomColors(colors[randColors])
    }

    return (
        <div style={{backgroundColor: randomColors, minHeight: "100vh"}} >

                <div className="container">

                    <div className="card" id="quote-box">
                        <div className="card-title">Random Quote Generator</div>
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                    <h5 className="card-text" id="author">- {randomQuote.author || "No author"}</h5>
                                    <p className="card-text" id="text"> &quot;{randomQuote.text}&quot;</p>
                                </>
                            ) : (
                                <h2>Loading</h2>
                            )}

                            <button onClick={getNewQuote} className="btn-primary" id="new-quote" >Get New Quote</button>
                            <a href="https://twitter.com/intent/tweet" target="_blank" className="btn btn-warning " id="tweet-quote">
                                <i class="fa fa-twitter " ></i>
                            </a>
                            <a href="" className="btn btn-danger " id="tumblr">
                                <i class="fa fa-tumblr "></i>
                            </a>



                        </div>

                    </div>

                </div>
           
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))