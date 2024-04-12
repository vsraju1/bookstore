import React from 'react'
import Books from '../../../assets/Books/Books.js'
import BookList from './BookDisplay';



function Home() {
  return (
    <div>
        <BookList books={Books} />
    </div>
  )
}

export default Home