import React, { useState } from "react"
import { Card, Button, Alert, Container, Row, Col, ListGroup } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"


export default function Dashboard() {

    return (
        <Container className="">

            <Row>

<Col>

          <Card className=" align-items-center mb-2 p-10" bg="primary" style={{ height: '30rem' }}>
            <Card.Header className="w-100 text-center">
            this is project card
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
            </Card.Body>
          </Card>

          </Col>

<Col>

          <Card className=" align-items-center mb-2" bg="secondary" style={{ height: '30rem' }}>
            <Card.Header className="w-100 text-center">
            this is design card
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush" >
        <ListGroup.Item >Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
            </Card.Body>
          </Card>
          </Col>

          </Row>

          <Row>

          <Col>

          <Card className=" align-items-center mb-2" bg="danger" style={{ height: '30rem' }}>
            <Card.Header className="w-100 text-center">
            this is material card
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
            </Card.Body>
          </Card>
</Col>
          <Col>

          <Card className=" align-items-center mb-2" bg="info" style={{ height: '30rem' }}>
            <Card.Header className="w-100 text-center">
            this is labor card
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
            </Card.Body>
          </Card>
          </Col>
          </Row>

          <Row>

          <Col>

          <Card className=" align-items-center mb-2" bg="success" style={{ height: '30rem' }}>
          <Card.Header className="w-100 text-center">
            this is closeout card
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
</Card.Body>
          </Card>
          </Col>
</Row>

        </Container>
      )

}