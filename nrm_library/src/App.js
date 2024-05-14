import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import SearchBar from './components/SearchBar';
import AdminDashboard from './admin/AdminDashboard';

function App() {
    return (
        <Router>
            <div>
                <SearchBar />
                <Switch>
                    <Route path="/" exact component={BookList} />
                    <Route path="/books/:id" component={BookDetails} />
                    <Route path="/admin" component={AdminDashboard} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;