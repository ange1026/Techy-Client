import React from "react";
import { Card } from "react-bootstrap";
import './components.css'
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";



const ShowArticles = ({ title, description, url, urlToImage, content }) => {
    return (
        <>
            <div style={{ display: 'inline-block' }}>
                <div>
                    <Card style={{ width: '400px', height: '600px', margin: '15px', overflow: 'auto', border: 'none' }}>
                        <img src={urlToImage} />
                        <h5 style={{ color: 'white' }}><a href={url}>{title}</a></h5>
                        <p>{description}</p>
                        <div style={{ display: 'inline-block', textAlign: 'center' }}>
                            <Button style={{ marginRight: '10px', width: '150px' }}>
                                <a href={url} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Read More</a>
                            </Button>
                            <Button style={{ width: '50px' }}>
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