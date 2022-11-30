import { useState } from "react";
import NewsApi from "./NewsApi";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";


const SearchBar = ({articles, description}) => {
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.data.articles)
    };

    if (searchInput.length > 0) {
        articles.filter((article) => {
            return article.target.match(searchInput);
        });
    }


    return (
        <>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
			  style={{borderRadius: '50px', height: '40px'}}
              onChange = {handleChange}
              value = {searchInput}
            />
            <Button variant="primary">Search</Button>
          </Form>
        </>
    )
}

export default SearchBar