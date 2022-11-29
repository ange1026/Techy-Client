import React from "react";
import { Card } from "react-bootstrap";


const ShowArticles = ({title, description, url, urlToImage, content}) => {
    return (
        <div style={{display: 'inline-block'}}>
            
            <Card style={{width: '300px', height: '200px', overflow: 'auto'}}>
            <img src={urlToImage} alt={urlToImage}/>
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
            </Card>
           
        </div>
    )
}

export default ShowArticles