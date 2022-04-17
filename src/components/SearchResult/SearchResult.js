import React from 'react'
import { ResultLink, ResultContainer, ResultBlock, Title, Category, SaveContainer, MetaContainer } from './styles'
import Save from '../Save/Save'
import DiffContainer from '../DiffContainer/DiffContainer'

const SearchResult = ({ slug, title, category, difficulty, id }) => {
  return (
    <React.Fragment key={slug}>
      <ResultLink to={slug}>
        <ResultContainer>
          <ResultBlock>
            {/* <DifficultyStripe difficulty={difficulty} /> */}
            <MetaContainer>
              <Title>{title}</Title>
              <Category>
              {difficulty && <DiffContainer difficulty={difficulty} />}{category ? category : "Uncategorized"}
              </Category>
            </MetaContainer>
            <SaveContainer>
              <Save id={id} />
            </SaveContainer>
          </ResultBlock>
        </ResultContainer>
      </ResultLink>
    </React.Fragment>
  )
}

export default SearchResult