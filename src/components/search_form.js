import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const SearchForm = () => {
    return (
        <Form inline>
            <FormGroup controlId="formInlineEmail">
                <FormControl type="search" placeholder="enter something..." />
            </FormGroup>
            {' '}
            <Button type="submit">Search</Button>
        </Form>
    )
}

export default SearchForm;