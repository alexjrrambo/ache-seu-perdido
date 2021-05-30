import React, { useState } from 'react'

import objectList from '../../mocks/objectList'
import {
  Container,
  Content,
  SearchItem,
  ObjectImage,
  ObjectInfos
} from './styles'

const SearchResults = () => {
  const [objectsList, setObjectsList] = useState(objectList)

  return (
    <Container>
      <Content>
        <h1>Resultados da busca</h1>
        {objectsList.map(object => (
          <SearchItem>
            <ObjectImage>
              Imagem do objeto
            </ObjectImage>
            <ObjectInfos>
              <h2>{object.objectName}</h2>
              <span>{object.location}</span>
              <span>Contato: {object.contact.phone} falar com {object.contact.name}</span>
            </ObjectInfos>
          </SearchItem>
        ))}
      </Content>
    </Container>
  )
}

export default SearchResults
