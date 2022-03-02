import React from "react";
import styled from "styled-components";
import {
  Button,
  Alert,
  Card,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Offcanvas,
  Table,
  ToggleButton,
} from "react-bootstrap";

const PageWrapper = styled.div`
  /* background-image: url("https://i.ytimg.com/vi/bCwpGoybTwY/maxresdefault.jpg"); */
  /* background-image: url("https://img.freepik.com/free-photo/python-programming-language-phone-screen-with-code-elements-digital-language-3d_327483-551.jpg?size=626&ext=jpg"); */
  /* background-image: url("https://wallpaperbat.com/img/13093-black-technology-wallpaper-top-free-black-technology.png"); */
  background-image: url("https://futureskillsprime.in/sites/default/files/2021-12/Desktop-Python%20Programming.jpg");
  background-repeat: repeat;
  background-size: 100% 100%;
  background-position: center;

  color: #baa09e;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;

const CenterWrapper = styled.div`
  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 900px) {
    width: 45%;
    margin: 0 auto;
  }
  /* background-color: blue; */
`;
const HeaderWrapper = styled.h1`
  font-weight: bold;
  transform: scale(1.2, 1.5);
`;

export const Home = () => {
  //   const [show, setShow] = React.useState(true);
  const [checked, setChecked] = React.useState(false);

  return (
    <PageWrapper>
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiREjHpsolL5RsjWAgCW4dLj1KqNa3gYwJw&usqp=CAU"
              alt="py-img"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Sponsor</Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <ToggleButton
                  className="mb-2"
                  id="toggle-check"
                  type="checkbox"
                  variant="outline-primary"
                  checked={checked}
                  value="1"
                  onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                  Register
                </ToggleButton>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-4 ">
        <Alert variant="">
          <Container className="d-flex justify-content-center align-items-center flex-column">
            <Alert.Heading>
              <HeaderWrapper>
                Pyfest22 Nigeria - November 2022
              </HeaderWrapper>
            </Alert.Heading>
            <p>
              Every year the brighest software Engineers and Enthusiasts
              converge to discuss the latest technologies
            </p>{" "}
            <p>Dedicated to the craft of Building Applications with Python</p>
            <p> Join us this November</p>
            <hr />
            <ToggleButton
              className="mb-2"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
            >
              Register
            </ToggleButton>
          </Container>
        </Alert>
      </Container>

      <CenterWrapper>
        <Alert variant="">
          <Container className="d-flex justify-content-center align-items-center flex-column py-5">
            <p className="lh-lg text-justify container-fluid centered">
              PyFest2022 Nigeria Python Developers Conference The PyFest
              conference is an event for creatives. We discuss more than the
              future of Python software development - but what design means in
              the hearts and minds of the worlds favorite creative leaders.
            </p>
          </Container>
        </Alert>
      </CenterWrapper>

      <Container className="d-flex justify-content-center">
        <Card.Body className="w-25">
          <Card.Title>Early Bird Ticket Now Available</Card.Title>
          <Card.Text>
            Register now and stand a chance to win a free ticket
          </Card.Text>
          <Button variant="primary">Get Ticket</Button>
        </Card.Body>
        <Card.Body className="w-25">
          <Card.Title>Register to Attend</Card.Title>
          <Card.Text>
            Click Register below to book your spot for the conference
          </Card.Text>
          <Button variant="primary">Register</Button>
        </Card.Body>
      </Container>
    </PageWrapper>
  );
};
