import React from "react"

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            gifsName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({
            gifsName: event.tartget.gifs.value
        })

        fetch('https://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=O4gwEGwV02bdZOZQaD0dJsGiyjPjuM21' + event.target.gifs.value.toUpperCase())
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    results: [...data]
                })
            })
            .catch(error => {
                console.log("error", error)
            })
            .then(() => console.log(this.state.results));
    }


    render(){
        return (
            <>
                <header>
                    <div className="Gifs-header">
                        <h1>GIPHY SEARCH</h1>

                        <div className="submit-container">
                            <form onSubmit={this.handleChange}>
                                <input type="Text" placeholder="Search Gifs Name" name="gifs"></input>
                                <input type="submit" placeholder="Search"></input>
                            </form>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
export default SearchField; 