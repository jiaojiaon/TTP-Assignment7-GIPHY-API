import React from "react"
const SearchField  = (props) => {    
    const getGifsName = async (name) => {
        const url = ("https://api.giphy.com/v1/gifs/search?q=") + name + ("&api_key=O4gwEGwV02bdZOZQaD0dJsGiyjPjuM21");
        const response = await fetch(url);
        const gifData = await response.json();
        props.setGifs(
            gifData.data
        );
        console.log(gifData.data)
    }
   const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        props.setGifs({
            [name]: value
        })
        let searchVar = document.getElementById('search').value
        getGifsName(searchVar)
    }
        return (
            <>
                <header>
                    <div className="Gifs-header">
                        <h1>GIPHY SEARCH</h1>

                        {/* for search field input and button  */}
                        <div className="submit-container">
                            <input id='search' placeholder="Search Gifs Name"></input>
                            <button id="searchButton" type='button' onClick={handleChange}>Search</button>
                            <button id="trendingSearchButton" type='button' onClick={handleChange}>Trending Search</button>
                            <button id="randomSearchButton" type='button' onClick={handleChange}>Random Search</button>



                        </div>
                    </div>
                </header>
               
            </>
        );
    


}
export default SearchField; 