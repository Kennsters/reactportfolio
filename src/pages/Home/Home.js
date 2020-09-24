import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'
import pictureofme from '../../images/pictureofme.jpg'

const Home = () => {
    return (
        <>

            <Container class="container">
                <section class="row content">
                    <figure class="col-12 col-md-4 figure">
                        <img src={pictureofme} style={{ width: '23rem' }} class="figure-img meSitting" alt="It is a picture of me sitting on a bench" />
                    </figure>
                    <article class="col-12 col-md-8">
                        <h1>About Me</h1>
                        <p>
                            I am currently enrolled at UCI Coding Bootcamp to become a future full stack web developer. Here you will learn a little bit about me and what I am capable of doing. Take a look around and even send me a message to get in contact with me. Hope you enjoy your stay!
                        </p>
                        <p>
                            Here is a link to my resume if you'd like to take a look of my experiences and education.
                            
                        </p>
                        <p>
                            <Button><a href="https://drive.google.com/file/d/1HUGdJSgDjUhYdZel58tN2e-BbrAjuZMW/view?usp=sharing" className="btn btn-secondary" target="_blank">Click Me!</a></Button>
                        </p>
                    </article>
                </section>
            </Container>

        </>
    )
}

export default Home