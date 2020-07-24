import React, { useState, useEffect } from 'react'

import { Form, Row, Col, Button, Table } from 'react-bootstrap'

import api from '../../../../api/leads'

export default function LeadsList() {
  const [leads, setLeads] = useState([])
  const [owner, setOwner] = useState({})
  const buscarLeads = () => {
    console.log(owner)
    api.list({ owner }).then(result => {
      setLeads(result.data)
    })
  }
  useEffect(() => {}, [])
  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Seu e-mail"
              value={owner.email}
              onChange={e => {
                setOwner({ ...owner, email: e.target.value })
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Chave de acesso"
              value={owner.psw}
              onChange={e => {
                setOwner({ ...owner, psw: e.target.value })
              }}
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={() => buscarLeads()}>
              Listar Leads
            </Button>
          </Col>
        </Row>
      </Form>
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Parâmetros de Origem</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => {
            return (
              <tr key={lead._id}>
                <td>{index + 1}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.params}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}
