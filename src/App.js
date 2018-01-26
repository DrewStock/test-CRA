import React, { Component } from 'react';
import { Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/search_form';
import Results from './components/results';

class App extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Grid>
                        <h1>Search App</h1>
                        <p>This is a simple search app</p>
                        <SearchForm />
                        <Results />
                    </Grid>
                </Jumbotron>
            </div>
    );
  }
}

export default App;
