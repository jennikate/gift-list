import React from 'react'
import HomeImages from './HomeImages'
import Logo from './Components/Logo'

const Home = () => (
  <>
    <section className="hero is-medium has-text-centered">

      <div className="hero-body">
        <div className="container">

          <h1 className='title'>
            GiftList
        </h1>
          <h2 className='title'>
            For all your gift buying fun!
        </h2>

        </div>
      </div>
    </section>
    <HomeImages />
  </>
)

export default Home