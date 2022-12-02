import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowArticles from "./ShowArticles";


const NewsApi = ({ searchQuery, page = 1 }) => {
    const pageSize = 20;
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery || 'software'}&technology&sortBy=popularity&apiKey=6a8bcee5930943f481693dfd8ac27bac&pageSize=${pageSize}&page=${page}`)
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [searchQuery, pageSize, page])
    return (
        <>
            {articles.map(article => {
                return (

                    <ShowArticles
                        key={article.id}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                        content={article.content}
                    />

                )

            })}
        </>
    )
}

export default NewsApi