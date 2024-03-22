import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';

function Home() {
  const navigate = useNavigate();
  return (
   <>
   <Helmet>
    <title>homes</title>
   </Helmet>
    <h1>
      home page
    </h1>
        <h3 onClick={() => navigate('/contact')}>Click me to navigate to the contact page</h3>

   </>
  )
}

export default Home
