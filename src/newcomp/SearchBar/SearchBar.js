
import React, { useState } from 'react'
import { SearchIcon } from '../../components/Sidebar/styles'
import { FiSearch } from 'react-icons/fi'
import Save from '../Save/Save'
import { Search, ResultLink, ResultBlock, Title, Category, SaveContainer, MetaContainer } from './styles'

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase()
    const newFilter = data.filter((value) => (
        // finds matching word
        value.frontmatter.title?.toLowerCase().includes(searchWord) ||
        value.frontmatter.category?.toLowerCase().includes(searchWord) ||
        value.frontmatter.tags?.some(eachTag => 
          searchWord.toLowerCase().includes(eachTag.toLowerCase())
        )
      )
    )
    setFilteredData(newFilter)
  }
  return (
    <div>
      <Search>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <input placeholder={placeholder} type="text" onChange={handleFilter} />
      </Search>
      {filteredData.length === 0 ? 
        <p>We have no records of this technique, but you can <a href="https://forms.gle/aSyb5cGpMMyVXTFN6">request</a> us to make a page about it.</p> 
        :
        <></>
      }
        {filteredData.map((technique) => (
          <React.Fragment key={technique.frontmatter.slug}>
            <ResultLink to={technique.frontmatter.slug}>
              <ResultBlock>
                <MetaContainer>
                  <Title>{technique.frontmatter.title}</Title>
                  <Category>
                    {technique.frontmatter.category ?
                      technique.frontmatter.category : "Uncategorized"
                    }
                  </Category>
                </MetaContainer>
                <SaveContainer>
                  <Save id={technique.frontmatter.id} />
                </SaveContainer>
              </ResultBlock>
            </ResultLink>
          </React.Fragment>
        ))}
    </div>
  )
}
export default SearchBar