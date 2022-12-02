import React from "react";
import { Card } from "react-bootstrap";
import './components.css'
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";



const ShowArticles = ({ title, description, url, urlToImage, content }) => {
    return (
        <>
            <div className="article-container">
                <div>
                    <Card className='article-card'>
                        <img src={urlToImage} />
                        <h5><a href={url}>{title}</a></h5>
                        <p>{description}</p>
                        <div className="buttons-container">
                            <Button className="readmore-button">
                                <a href={url} className="link-button">Read More</a>
                            </Button>
                            <Button className="save-button">
                                <FontAwesomeIcon icon={faBookmark} />
                            </Button>
                        </div>
                    </Card>

                </div>
            </div>
        </>
    )
}

export default ShowArticles