import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import OfficialLogo from '../../images/OfficialLogo.jpg'
import mainPhoto from '../../images/mainPhoto.jpg'

const Portfolio = () => {
    return (
        <>
            <h1 className="text-center">Here is a short list of some of my projects!</h1>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '15rem' }} lg="4">
                                <CardImg top width="25%" src={OfficialLogo} style={{ width: '15rem' }} alt="Card image cap" />
                                <CardBody className="text-center">
                                    <CardTitle class>Bite-Wallet</CardTitle>
                                    <CardText>Take a look into my first Bootcamp project!</CardText>
                                    <a href="https://shellynguyen98.github.io/Project-1/" target="_blank"><Button>Click Me!</Button></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem' }} lg="4">
                                <CardImg top height="171.42px" src={mainPhoto} style={{ width: '15rem' }} alt="Card image cap" />
                                <CardBody className="text-center">
                                    <CardTitle class>BusksInTown</CardTitle>
                                    <CardText>Take a look into my second Bootcamp project!</CardText>
                                    <a href="http://guarded-crag-60613.herokuapp.com/" target="_blank"><Button>Click Me!</Button></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem' }} lg="4">
                                <CardImg top width="25%" height="171.42px" src="https://www.fullstackpython.com/img/logos/heroku.png" style={{ width: '15rem' }} alt="Card image cap" />
                                <CardBody className="text-center">
                                    <CardTitle class>Budget Tracker</CardTitle>
                                    <CardText>Want to keep track of your budget? Click here!</CardText>
                                    <a href="https://shellynguyen98.github.io/Project-1/" target="_blank"><Button>Click Me!</Button></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: '15rem' }} lg="4">
                                <CardImg top width="25%" height="171.42px" src="https://www.fullstackpython.com/img/logos/heroku.png" style={{ width: '15rem' }} alt="Card image cap" />
                                <CardBody className="text-center">
                                    <CardTitle class>Fitness Tracker</CardTitle>
                                    <CardText>Stay healthy with a fitness tracker!</CardText>
                                    <a href="https://pure-ravine-07267.herokuapp.com/?id=5f60ea46df141600175c95ba" target="_blank"><Button>Click Me!</Button></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem' }} lg="4">
                                <CardImg top width="25%" height="171.42px" src="https://www.fullstackpython.com/img/logos/heroku.png" style={{ width: '15rem' }} alt="Card image cap" />
                                <CardBody className="text-center">
                                    <CardTitle class>Burger App</CardTitle>
                                    <CardText>Keep track of burgers you haven't tried and have tried!</CardText>
                                    <a href="https://sheltered-savannah-63269.herokuapp.com/" target="_blank"><Button>Click Me!</Button></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem' }} lg="4">
                                <CardImg top width="25%" height="171.42px" src="https://www.fullstackpython.com/img/logos/heroku.png" style={{ width: '15rem' }} alt="Card image cap" />
                                <CardBody className="text-center">
                                    <CardTitle class>Future Projects</CardTitle>
                                    <CardText>In progress... Coming Soon!</CardText>
                                    <a target="_blank"><Button>Click Me!</Button></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Portfolio