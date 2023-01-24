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
            <h2>PROJECTS</h2>
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush" className="w-100">
            <h4>
        <ListGroup.Item className="bg-primary">PROJECT 1</ListGroup.Item>
        <ListGroup.Item className="bg-primary">PROJECT 2</ListGroup.Item>
        <ListGroup.Item className="bg-primary">PROJECT 3</ListGroup.Item>
        </h4>
      </ListGroup>
            </Card.Body>
          </Card>

          </Col>

<Col>

          <Card className=" align-items-center mb-2" bg="secondary" style={{ height: '30rem' }}>
            <Card.Header className="w-100 text-center">
            <h2>DESIGNS</h2>
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush" >
              <h4>
        <ListGroup.Item className="bg-secondary">DESIGN 1</ListGroup.Item>
        <ListGroup.Item className="bg-secondary">DESIGN 2</ListGroup.Item>
        <ListGroup.Item className="bg-secondary">DESIGN 3</ListGroup.Item>
        </h4>
      </ListGroup>
            </Card.Body>
          </Card>
          </Col>

          </Row>

          <Row>

          <Col>

          <Card className=" align-items-center mb-2" bg="danger" style={{ height: '30rem' }}>
            <Card.Header className="w-100 text-center">
            <h2>MATERIAL</h2>
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
            <h4>
        <ListGroup.Item className="bg-danger">MATERIAL LIST 1</ListGroup.Item>
        <ListGroup.Item className="bg-danger">MATERIAL LIST 2</ListGroup.Item>
        <ListGroup.Item className="bg-danger">MATERIAL LIST 3</ListGroup.Item>
        </h4>
      </ListGroup>
            </Card.Body>
          </Card>
</Col>
          <Col>

          <Card className=" align-items-center mb-2" bg="info" style={{ height: '30rem' }}>
            <Card.Header className="w-100 text-center">
            <h2>LABOR</h2>
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
            <h4>

        <ListGroup.Item className="bg-info">LABOR HOURS 1</ListGroup.Item>
        <ListGroup.Item className="bg-info">LABOR HOURS 1</ListGroup.Item>
        <ListGroup.Item className="bg-info">LABOR HOURS 1</ListGroup.Item>
        </h4>

      </ListGroup>
            </Card.Body>
          </Card>
          </Col>
          </Row>

          <Row>

          <Col>

          <Card className=" align-items-center mb-2" bg="success" style={{ height: '30rem' }}>
          <Card.Header className="w-100 text-center">
          <h2>CLOSEOUTS</h2> 
            </Card.Header>
            <Card.Body>
            <ListGroup variant="flush">
            <h4>

        <ListGroup.Item className="bg-success">CLOSEOUTS 1</ListGroup.Item>
        <ListGroup.Item className="bg-success">CLOSEOUTS 2</ListGroup.Item>
        <ListGroup.Item className="bg-success">CLOSEOUTS 3</ListGroup.Item>
        </h4>
      </ListGroup>
</Card.Body>
          </Card>
          </Col>
</Row>

        </Container>
      )

}