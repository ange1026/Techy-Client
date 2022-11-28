import React from "react";
import { Card } from "react-bootstrap";


const ShowArticles = ({title, description, url, urlToImage}) => {
    return (
        <>
            <Card style={{width: '400px', height: '400px', margin: '20px', overflow: 'auto'}}>
            <img src={urlToImage} alt={urlToImage}/>
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
            </Card>
        </>
    )
}

export default ShowArticles