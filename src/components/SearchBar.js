import styled from '@emotion/styled'
import { Link } from "gatsby"
import React, { useState } from 'react'
import { COLORS } from '../styles/theme'
import { v, maxq } from '../styles/variables'
import { SSearchIcon } from './Sidebar/styles'
import { FiSearch } from 'react-icons/fi'
import Save from './Save'

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
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
  margin: 0 0 5px 0;
  position: relative;
  transition: 0.3s ease margin;
  :hover {
    margin-left: 1em;
    color: var(--color-link, ${COLORS.link.light});
  }
`

const DataResultTitle = styled.h4`
  margin-bottom: 0.1em;
`

const DataResultCategory = styled.p`
  color: ${COLORS.placeholder};
  text-transform: capitalize;
`

const DataResultPreReq = styled.p`
  color: ${COLORS.placeholder};
`

const SaveItemButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
  height: 100%;
  width: 5em;
  padding: 2px 0 0 6px;
  ${maxq[1]} {
    width: 4em;
  }
`

const DataResultMetaContainer = styled.div`
  width: 85%;
  ${maxq[1]} {
    width: 72%;
  }
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
          <FiSearch />
        </SSearchIcon>
        <input placeholder={placeholder} type="text" onChange={handleFilter} />
      </SearchInput>

      {filteredData.length === 0 ? <p>We have no records of this technique, but you can <a href="https://forms.gle/aSyb5cGpMMyVXTFN6">request</a> us to make a page about it.</p> : <></>}
      <DataResult>
        {/* data = techniques.nodes from pages/techniques/index */}
        {filteredData.map((technique) => {
          return (
            <React.Fragment key={technique.frontmatter.slug}>
              <DataResultBlockLink to={technique.frontmatter.slug}>
                <DataResultBlock >
                  <DataResultMetaContainer>
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
                    {/* <DataResultPreReq>
                      Req:{' '}
                      {technique.frontmatter.prereqs ?
                        technique.frontmatter.prereqs.map(prereq => prereq.name).join(", ")
                        :
                        "None"
                      }
                    </DataResultPreReq> */}
                  </DataResultMetaContainer>

                  <SaveItemButtonContainer>
                    <Save id={technique.frontmatter.id} />

                  </SaveItemButtonContainer>
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