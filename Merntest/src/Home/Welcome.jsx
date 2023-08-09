import React, { useState } from 'react'
import './Welcome.css'
// import axios from 'axios'
// import { useEffect } from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';




const Welcome = () => {

  //   const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //     axios.get("http://localhost:8000/fetchdata")
  //       .then(posts => setPosts(posts.data))


  //  console.log(posts);

  //   }, []);


  return (
    <>
      <div className='mainDiv my-5'>


        <div className='text-center'>
          <h3 className='mb-5'>Welcome to freeCodeCamp.org</h3>
          <p>"I have not failed. I've just found 10,000 ways</p>
          <p>that won't work."</p>
          <i>- Thomas A. Edison</i>
        </div>


        {/* {
          cdata.map(j => {
            return ( */}
              <div className='contents'>

                <div className='content'>
                  {/* <Container>
                    <Row>
                      <Col><img  src={j.logo} alt="" /></Col>
                      <Col xs={10} ><p>{j.cource} </p></Col>
                    </Row>
                    
                  
                  </Container> */}

                  
                  

                </div>

              </div>
            {/* )

          })
        } */}


      </div>
    </>
  )
}

export default Welcome