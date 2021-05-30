import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  InfosContent,
  FormContent
} from './styles'

const Home = () => {
  return (
    <Container>
      <InfosContent>
        <h1>Ache seu perdido</h1>
        <span>Perdeu? Não sabe onde encontrar?</span>
        <span>Nós te ajudamos.</span>
      </InfosContent>
      <FormContent>
        <input placeholder="Estado" />
        <input placeholder="Cidade" />
        <input placeholder="Nome do objeto" />

          <Link to="/busca-de-objetos">
            Buscar
          </Link>

      </FormContent>
    </Container>
  )
}

export default Home
