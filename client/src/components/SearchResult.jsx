import React, { useState } from 'react';
import './SearchResult.css';

const SearchResult = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const LogOut = ()=>{
    localStorage.removeItem('UserInfo')
    window.location.reload()
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    let url;
    if (/^\d{10}$|^\d{13}$/.test(query)) {
      url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${query}`;
    } else {
      url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error searching books:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="library-logo">📚 Public Library</div>
        <div className="header-buttons">
          <button className="notification-btn">🔔</button>
          <button className="signout-btn" onClick={LogOut}>Signout</button>
        </div>
      </header>
      <main className="main-content">
        <div className="search-section">
          <h2>Search Books</h2>
          <form className='input-search-area' onSubmit={handleSearch}>
            <input 
              type="text" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              placeholder="Search for books..."
              required
            />
            <button type="submit">Search</button>
          </form>
          <h2>My Books</h2>
          <div className="book-results">
            {books.map((book) => (
              <div key={book.id} className="book-card">
                <div className='book-result-img'>
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                </div>

                <div className='book-cred-desc'>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.description}</p>
                    <p>{book.volumeInfo.authors?.join(', ')}</p>
                    {/* <div className="book-status">3 Days Remains</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
    
      </main>
    </div>
  );
};

export default SearchResult;