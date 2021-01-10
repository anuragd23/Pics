import React from 'react'

class SearchBar extends React.Component {
    render() {
        return(
        <div className='ui segment'>
        <form className='ui form'>
            <div className="form">
                <label>Image Search</label>
                <input type="text"></input>
            </div>
        </form>
        </div>
    );
    }
}

export default SearchBar;