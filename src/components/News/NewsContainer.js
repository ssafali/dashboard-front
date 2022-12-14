
import "./NewsContainer.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_NEWS_API

function NewsContainer() {
    const urlAll = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
    const urlByCategory = "https://newsapi.org/v2/top-headlines?country=us&category="

    const [filter, setFilter] = useState(" ");
    const [results, setResults] = useState([]);

    //Get all news
        useEffect(() => {
            axios
                .get(`${urlAll}${API_KEY}`)
                .then((response) => {
                    setResults(response.data.articles)
                })
        },[])

    //Get news by category
    const handleFiltering = (e) => {
        const id = e.target.id;
        setFilter(id)

        fetch(`${urlByCategory}${e.target.id}&apiKey=${API_KEY}`)
        .then((response) => response.json())
        .then((result) => {
            
            setResults(result.articles)
        })
    }

    // useEffect(() => {
    //     async function fetchFiltered() {
    //         let res = await fetch(`${urlByCategory}${filter}&apiKey=${API_KEY}`);
    //         res = await res.json()
    //         setResults(res)
    //     }
    //     fetchFiltered()
    // },[filter])


// handleFiltering = (e) => {
//     const idValue = e.target.id;
//     fetch(
//       `https://newsapi.org/v2/top-headlines?country=us&category=${idValue}&apiKey=${APIKEY}`
//     )
//       .then((response) => response.json())
//       .then((result) => {
//         this.setState({
//           newsResults: [...result.articles],
//           filterTerm: idValue,
//         });
//       });
//   };


        // useEffect(() => {
        //     if(filter != " ") {
        //     axios.get(`${urlByCategory}${filter}&apiKey=${API_KEY}`)
        //         .then(res => setResults(res.data.articles))
        //         .catch(err => console.log(err))
        // }
        // }, [])
    
    return (
        <div className="news-container">
            <div className="category-buttons">
                <button className={filter === 'general' ? 'active' : ''} onClick={handleFiltering} id='general'>general</button>
                <button className={filter === 'business' ? 'active' : ''} onClick={handleFiltering} id='business'>business</button>
                <button className={filter === 'entertainment' ? 'active' : ''} onClick={handleFiltering} id='entertainment'>entertainment</button>
                <button className={filter === 'health' ? 'active' : ''} onClick={handleFiltering} id='health'>health</button>
                <button className={filter === 'science' ? 'active' : ''} onClick={handleFiltering} id='science'>science</button>
                <button className={filter === 'sports' ? 'active' : ''} onClick={handleFiltering} id='sports'>sports</button>
                <button className={filter === 'technology' ? 'active' : ''} onClick={handleFiltering} id='technology'>technology</button>
            </div>
            {results.map((result) => {
                return (
                    <div key={result.description}>
                        <div  onClick={() => window.open(result.url)}  className="news-card">
                            <div className="news-element" key={result.description}>
                                <img src={result.urlToImage} alt="news-photo"></img>
                                <h6 className="source"> {result.source.name}</h6>
                                <h6 className="title">{result.title.split(' - ')[0]}.</h6>
                                {/* <p className="description">{result.description}</p> */}
                            </div>
                        </div>
                    </div>

                )

            })}

        </div>
    );
}

export default NewsContainer;
