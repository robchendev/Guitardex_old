
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Search, SearchIcon } from './styles'
import SearchResult from '../SearchResult/SearchResult'

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
      {filteredData.length === 0 && 
        <p>We have no records of this technique, but you can <a href="https://forms.gle/aSyb5cGpMMyVXTFN6">request</a> us to make a page about it.</p>
      }
        {filteredData.map((technique) => (
          <SearchResult
            slug={technique.frontmatter.slug}
            title={technique.frontmatter.title}
            category={technique.frontmatter.category}
            difficulty={technique.frontmatter.difficulty}
            id={technique.frontmatter.id}
          />
        ))}
    </div>
  )
}

export default SearchBar