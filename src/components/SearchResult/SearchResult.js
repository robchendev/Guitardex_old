import React from 'react'
import { ResultLink, ResultBlock, Title, Category, SaveContainer, MetaContainer } from './styles'
import Save from '../Save/Save'

const SearchResult = ({ slug, title, category, difficulty, id }) => {
  return (
    <React.Fragment key={slug}>
      <ResultLink to={slug}>
        <ResultBlock>
          <MetaContainer>
            <Title>{title}</Title>
            <Category>
              {category ? category : "Uncategorized"}{difficulty && ` - ${difficulty}`}
            </Category>
          </MetaContainer>
          <SaveContainer>
            <Save id={id} />
          </SaveContainer>
        </ResultBlock>
      </ResultLink>
    </React.Fragment>
  )
}

export default SearchResult