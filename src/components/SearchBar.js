import styled from '@emotion/styled'
import { Link } from "gatsby"
import React, { useState } from 'react'
import { COLORS } from '../styles/theme'
import { v } from '../styles/variables'
import { SSearchIcon } from './Sidebar/styles'
import { AiOutlineSearch } from 'react-icons/ai'

export const Search = styled.div`
  
`

const SearchInput = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border: 1px solid var(--color-bg3, ${COLORS.bg3.light});
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing} 0 0;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
  margin-bottom: 1em;
`

const DataResult = styled.div`
  // resetting styling
  a {
    border: none;
    padding: 0;
    color: var(--color-text, ${COLORS.text.light});
  }
  a:hover {
    border: none;
    background-color: transparent;
    color: var(--color-text, ${COLORS.text.light});
  }
  p:not(:last-child) {
    margin: 0;
  }
`

const DataResultBlockLink = styled(Link)`
  
`

const DataResultBlock = styled.div`
  /* background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
   */
  border-bottom: 1px solid var(--color-bg3, ${COLORS.bg3.light});
  padding: ${v.mdSpacing} ${v.mdSpacing};
  transition: 0.3s;
  :hover {
    margin-left: 1em;
    border-left: 3px solid var(--color-link, ${COLORS.link.light});
    color: var(--color-link, ${COLORS.link.light});
  }
`

const DataResultTitle = styled.h3`
  margin-bottom: 0;
`

const DataResultCategory = styled.p`
  color: ${COLORS.placeholder};
  text-transform: capitalize;
`

const DataResultPreReq = styled.p`
  color: ${COLORS.placeholder};
`



const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase()
    const newFilter = data.filter((value) => {
      return (
        // true if any of this is true
        value.frontmatter.title?.toLowerCase().includes(searchWord) ||
        value.frontmatter.category?.toLowerCase().includes(searchWord) ||
        value.frontmatter.tags?.some(eachTag => {
          return searchWord.toLowerCase().includes(eachTag.toLowerCase())
        })
      )
    })
    setFilteredData(newFilter)
  }
  return (
    <Search>
      <SearchInput>
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input placeholder={placeholder} type="text" onChange={handleFilter} />
      </SearchInput>

      
      <DataResult>
        {/* data = techniques.nodes from pages/techniques/index */}
        {filteredData.map((technique, key) => {
          return (
            <React.Fragment key={technique.frontmatter.slug}>
              <DataResultBlockLink to={technique.frontmatter.slug}>
                <DataResultBlock >
                  <DataResultTitle>
                    {technique.frontmatter.title}
                  </DataResultTitle>
                  <DataResultCategory>
                    {technique.frontmatter.category ?
                      technique.frontmatter.category
                      :
                      "Uncategorized"
                    }
                  </DataResultCategory>
                  <DataResultPreReq>
                    Req:{' '}
                    {technique.frontmatter.prereqs ? 
                      technique.frontmatter.prereqs.map(prereq => prereq.name).join(", ") 
                      :
                      "None"  
                    }
                  </DataResultPreReq>
                  
                </DataResultBlock>
              </DataResultBlockLink>
            </React.Fragment>
          )
        })}
      </DataResult>
    </Search>
  )
}

export default SearchBar