import React, {useState, useEffect} from "react";
import axios from "axios";

const NewsApi = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles =  async() => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=software&technology&sortBy=popularity&apiKey=6a8bcee5930943f481693dfd8ac27bac')
            console.log(response)
        }
        getArticles()
    }, [])
    return(
        <>
        
        </>
    )
}

export default NewsApi