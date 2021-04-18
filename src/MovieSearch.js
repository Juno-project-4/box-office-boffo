import { useState, useEffect } from "react";
import DisplayMovie from "./DisplayMovie";

const MovieSearch = () => {
    
    //const [allMoviesArray, setAllMoviesArray] = useState([]);
    const [movieObj, setMovieObj] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [numOfPages, setNumOfPages] = useState([]);


    const apiKey = 'a95c3731bb8d542ff3503355315d717a';
    const searchUrl = 'https://api.themoviedb.org/3/discover/movie/?';
    const lessDate = 'release_date.lte';
    const greatDate = 'release_date.gte';

    //these will need to have the year replaced by a prop passed into this component that contains the year selected by the user
    const lessYear = '1999-09-04';
    const greatYear = '1999-05-01';

    const url = new URL(searchUrl);

    const numArray = [];

    const handleClick = (e) => {
        e.preventDefault();           
            url.search = new URLSearchParams({
                api_key: apiKey,
                [lessDate]: lessYear,
                [greatDate]: greatYear,
            });
            
            fetch(url).then( (res) => {
                return res.json();
            }).then((jsonResponse) => {
                setMovieObj(jsonResponse.results);
                for(let i = 0; i < jsonResponse.total_pages; i++) {
                    numArray.push(i)
                }
                setNumOfPages(numArray)
            });   
     }

    const getPage = (pageNum) => {
        url.search = new URLSearchParams({
            api_key: apiKey,
            [lessDate]: lessYear,
            [greatDate]: greatYear,
            page: pageNum

        });
        fetch(url).then( (res) => {
            return res.json();
        }).then((jsonResponse) => {
            setAllMovies(jsonResponse.results);
        });

    }



    //on year select do initial api call, display initial 20 movies on page, do second api call to get all remaining movies and store in an array
    //allow user to search array for specific title and render that array to page, allow user to select a page number, do api call for that specific page and display on page

    //need to figure out how to dynamically render page numbers to page based on total_pages field


    //search allMoviesArray for a movie title that matches input
    //for(i < arraylength) { if input == array[i].title} display that movie

    //on user search call api like below and display results
    
    
    useEffect(() => {

        //     for(let i = 1; i <= numOfPages.length; i++) {
        //         url.search = new URLSearchParams({
        //             api_key: apiKey,
        //             [lessDate]: lessYear,
        //             [greatDate]: greatYear,
        //             page: [i]
        //         });
        //         fetch(url).then( (res) => {
        //             return res.json();
        //         }).then((jsonResponse) => {
        //             allMoviesArray.push(jsonResponse);
                    
        //             if(allMoviesArray.length === jsonResponse.total_pages) {
        //                 setAllMovies(allMoviesArray);
        //             }
                    
        //         })
        //     }
        // });   
        
    }, []);


    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                numOfPages.map((num)=> {
                    return (
                        <button key={num} onClick={() => {
                            getPage(num + 1);
                            
                        }}>{num + 1}</button>
                        )
                    })
                }
                <DisplayMovie movie={allMovies} />

                <input type="text"/>
        </div>
        
    )
}

export default MovieSearch