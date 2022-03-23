import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BsShare } from "react-icons/bs";
import { GoRocket } from "react-icons/go";
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
  Row,
  Col,
  Stack,
  Accordion,
} from "react-bootstrap";

const PageWrapper = styled.div`
  background-image: url("https://cdn.wallpapersafari.com/86/96/scHYQB.png");
  background: rgb(2, 0, 36);
  background-repeat: repeat;
  background-size: 100% 100%;
  background-position: center;
  color: #b8cae0;
  /* color: #baa09e; */

  .header-text h1 {
    background: -webkit-linear-gradient(45deg, #7c1d24, yellow, #3675c5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .navigation {
    padding-top: 50px;
    padding-bottom: 40px;
  }
  .sub {
    font-size: 24px;
    font-weight: 500;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .join {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 30px;
    /* margin-top: 30px; */
  }
  .custom-btn {
    margin-top: 30px;
  }
  .text {
    margin-bottom: 60px;
  }

  .join::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    padding: 2px;
    background: linear-gradient(45deg, red, blue);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  .rocket {
    margin-left: 10px;
  }
  .timer {
    margin-top: 150px;
  }
  @media screen and (min-width: 768px) {
    .time {
      font-weight: bold;
      font-size: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    .time {
      font-weight: bold;
      font-size: 18px;
    }
    .about-text {
      margin-bottom: 40px;
    }
  }

  .time {
    /* animation: flash 0.2s ease infinite alternate; */
    /* text-shadow: 0 0 5px #fc0303, 0 0 10px #fc0303, 0 0 20px #fc0303, */
    /* text-shadow: 0 0 5px #03cafc, 0 0 10px #03cafc, 0 0 20px #03cafc; */
  }
  /* @keyframes flas {
    /* (B1) FROM RED */
    from {
      text-shadow: 0 0 5px #fc0303, 0 0 10px #fc0303, 0 0 20px #fc0303,
        0 0 40px #fc0303;
    }
    /* (B2) TO BLUE */
    to {
      text-shadow: 0 0 5px #03cafc, 0 0 10px #03cafc, 0 0 20px #03cafc,
        0 0 40px #03cafc;
    }
  } */

  .timer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-top: 100px; */
    font-size: 30px;
  }

  .title {
    color: #ffffff;
  }

  .abs-header {
    font-size: 50px;
    background: -webkit-linear-gradient(45deg, #7c1d24, yellow, #3675c5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .abs-centered {
    font-size: 25px;
  }

  .abs-share,
  .abs-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .abs-share span {
    padding: 10px;
  }

  .glass {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    /* color: #e3adfe; */
    margin-top: 150px;
    margin-bottom: 150px;
  }

  .foot {
    padding-top: 100px;
  }

  .steps-content {
    .zig-zag {
      background: -webkit-linear-gradient(90deg, #7c1d24, yellow, #3675c5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: 300px;
    }
    .steps-content-center {
      .zig-zag {
        width: 500px;
      }
    }
  }
  .zig {
    margin-top: 100px;
    margin-bottom: 100px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .footer {
    padding-bottom: 100px;
    font-size: 16px;

    .p-foot {
      border-bottom: 2px solid yellow;
    }
  }

  .c-wrapper {
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to bottom, red, yellow, rgba(0, 0, 0, 0)) 1
      100%;
    padding-right: 20px;
    padding-left: 20px;
  }

  .section2 {
    margin-top: 150px;
    margin-bottom: 150px;
  }
  .now {
    margin-top: 150px;
    font-size: 22px;
    font-weight: 400;
    padding-bottom: 7px;
  }

  .pyhero {
    font-weight: bold;
    margin-top: 50px;
    font-size: 22px;
  }
`;

export const Home = () => {
  //   const [show, setShow] = React.useState(true);
  const [checked, setChecked] = useState(false);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const style = {
    background: "rgba(255, 255, 255, 0.25)",
    boSshadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(4px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

  let interval = useRef();

  const countDown = () => {
    const startDate = new Date("November 30, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = startDate - now;

      const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setDays(daysLeft);
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);
      }
    });
  };

  useEffect(() => {
    countDown();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <PageWrapper>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant="dark"
        className="navigation"
      >
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

      <Stack gap={2} className="col-md-8 mx-auto c-wrapper">
        <div className="header-text">
          <h1 style={{ textAlign: "center", fontSize: "60px" }}>
            Pyfest22 Nigeria - November 2022
          </h1>
          <p className="pyhero" style={{ textAlign: "center" }}>
            PyFest2022— Nigeria's Python Developers Conference. Every year the
            brighest software Engineers and Enthusiasts converge to discuss the
            latest technologies
          </p>
          <div className="join now">
            <p> Join us this November</p>
          </div>
        </div>
      </Stack>

      {/* <hr /> */}
      <Stack
        className="d-flex justify-content-center py-4 px-4 col-md-6 mx-auto timer"
        direction="horizontal"
        gap={2}
      >
        <span className="time">{days}</span>
        <sub>Days</sub>
        <span className="time">{hours}</span> <sub>Hours</sub>{" "}
        <span className="time">{minutes}</span> <sub>Minutes</sub>
        <span className="time">{seconds}</span> <sub>Seconds</sub>
      </Stack>

      <Stack gap={2} className="col-md-6 mx-auto py-4 px-4 glass">
        <div>
          <div className="d-flex justify-content-center steps-content-center abs-header">
            <p className="zig-zag">Taking Python to new heights</p>
          </div>
          <p>
            The PyFest conference is an event for creatives. We discuss more
            than the future of Python software development - but what design
            means in the hearts and minds of the worlds favorite creative
            leaders. Modern development teams are using feature management to
            build better software faster, with less risk. Pyfest22 will focus on
            the technology, people, and processes that make it possible to
            continuously deliver better user experiences and more powerful
            software while staying in total control.
          </p>
          <div className="abs-share">
            <p>
              Share event{" "}
              <span>
                <BsShare color={"blue"} />
              </span>{" "}
            </p>{" "}
          </div>
        </div>
      </Stack>
      <Container className="section2">
        <Row>
          <Col className="about-text" xs={12} md={4}>
            <Card.Title>SHOWCASE YOUR ACHIEVEMENTS</Card.Title>
            <Card.Text>
              Take to one of multiple vertical stages. A highly visible learning
              platform in front of python-driven audience to retell the amazing
              work your company is doing in key sectors influenced by software
              products and python adoption: government, finance, and more.{" "}
            </Card.Text>
          </Col>
          <Col className="about-text" xs={12} md={4}>
            <Card.Title>EXPRESS YOUR VIEWS</Card.Title>
            <Card.Text>
              Get involved as a panellist. Join a brilliant group of python
              influencers to position yourself as a genuine thought leader in
              front of potential customers and influence their sourcing
              decisions during their python-powered transformation.{" "}
            </Card.Text>
          </Col>
          <Col xs={12} md={4}>
            <Card.Title>BE A PART OF THE NARRATIVE</Card.Title>
            <Card.Text>
              Get involved as a panellist. Join a brilliant group of python
              influencers to position yourself as a genuine thought leader in
              front of potential customers and influence their sourcing
              decisions during their python-powered transformation.{" "}
            </Card.Text>
          </Col>
        </Row>
      </Container>

      <Stack gap={2} className="col-md-8 mx-auto">
        <h1>Frequently asked questions</h1>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item style={style} eventKey="0">
            <Accordion.Header>
              What is Pyfest22 Conference? And who is this for?
            </Accordion.Header>
            <Accordion.Body>TBA</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item style={style} eventKey="1">
            <Accordion.Header>
              Why are we hosting pyfest22 conference?
            </Accordion.Header>
            <Accordion.Body>TBA</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item style={style} eventKey="2">
            <Accordion.Header>Is there a Code of Conduct?</Accordion.Header>
            <Accordion.Body>TBA</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item style={style} eventKey="3">
            <Accordion.Header>
              Where is Pyfest22 Conference being held?
            </Accordion.Header>
            <Accordion.Body>TBA</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item style={style} eventKey="4">
            <Accordion.Header>
              Don't see your question addressed here?
            </Accordion.Header>
            <Accordion.Body>TBA</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Stack>

      <Container className="d-flex justify-content-center foot">
        <p className="join custom-btn"> Click to register</p>
      </Container>
      <Container className="zig">
        <div className="d-flex justify-content-start steps-content">
          <p className="zig-zag">
            Come and empower your team to deliver and control their software in
            an effective and optimised way. Keep to the industry best practices
          </p>
        </div>
        <div className="d-flex justify-content-center steps-content">
          <p className="zig-zag">
            At Pyfest22, attendees will have the oppotunity to network and
            connect with the best in the industry and stand a chance to win
            amazing prizes
          </p>
        </div>
        <div className="d-flex justify-content-end steps-content">
          <p className="zig-zag">
            Discover which tech skill will help you grow your business across
            borders. Explore and learn the most viable and trending tech skills
            today
          </p>
        </div>
      </Container>

      <Container className="d-flex justify-content-center footer">
        <hr />
        <p className="mb-0 d-flex justify-content-center p-foot">
          <span>Come let's do it the pythonic way!</span>{" "}
          <span className="rocket">
            <GoRocket size={22} color={"red"} />
          </span>
        </p>
      </Container>
    </PageWrapper>
  );
};
