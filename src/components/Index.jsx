import React from 'react'
import img from '../../public/people (2).jpg'
import '../styles/index-in.css'

const Index = () => {
  return (
    <nav className='nav'>
    <main>
        <section>
            <article>
                <h4 className="inicio">hello it`s me</h4>
                <h1 className="name">IGOR BENAVIDES</h1>
                <h5 className="title">desarollador fron-ted</h5>
                <h5 className="title-end">I`m a passionate in programing</h5>
            </article>
        </section>
    <aside>
        <div className="img">
            <img src={img} alt="" />
        </div>
    </aside>
    </main>
    </nav>
  )
}

export default Index