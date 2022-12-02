import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchBar = ({ performSearch }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(searchInput)
  }

  return (
    <>
      <Form className="d-flex" role='search' style={{ paddingLeft: '100px' }} onSubmit={handleSubmit}
      >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{ borderRadius: '50px', height: '40px' }}
          value={searchInput}
          onChange={handleChange}
        />
        <Button variant="primary" className='bi bi-search' type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>

      </Form>

    </>
  )
}

export default SearchBar