import React from 'react'
import { Link } from 'react-router-dom';


const Build = () => {
  return (
    <main>
         <Link to="/createpost">
          <button>Create a Post</button>
        </Link>
    </main>
  )
}

export default Build

