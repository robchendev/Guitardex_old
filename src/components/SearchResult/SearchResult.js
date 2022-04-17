import React from 'react'
import { ResultLink, ResultBlock, Title, Category, SaveContainer, MetaContainer } from './styles'
import Save from '../Save/Save'
import DifficultyStripe from '../DifficultyStripe/DifficultyStripe'
import DiffContainer from '../DifficultyStripe/DiffContainer'

const SearchResult = ({ slug, title, category, difficulty, id }) => {
  return (
    <React.Fragment key={slug}>
      <ResultLink to={slug}>
        
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
      </ResultLink>
    </React.Fragment>
  )
}

export default SearchResult