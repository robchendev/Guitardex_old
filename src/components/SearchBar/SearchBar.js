import React, { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { Search, SearchIcon } from './styles'
import SearchResult from '../SearchResult/SearchResult'

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase()
    const newFilter = data.filter((value) => (
      value.frontmatter.title?.toLowerCase().replace(/-/g, ' ').includes(searchWord.replace(/-/g, ' ')) ||
      value.frontmatter.category?.toLowerCase().includes(searchWord) ||
      value.frontmatter.difficulty?.toLowerCase().includes(searchWord)
    ))
    setFilteredData(newFilter)
  }
  return (
    <div>
      <Search>
        <SearchIcon>
          <HiSearch />
        </SearchIcon>
        <input 
          placeholder={placeholder} 
          type="text" 
          onChange={handleFilter}
          autoComplete="off" 
        />
      </Search>
      {filteredData.length === 0 && 
        <p>Sorry, either this search algorithm isn't good enough yet, or we have no records of this technique. If the latter is true, you can <a href="https://forms.gle/aSyb5cGpMMyVXTFN6">request</a> us to make a page about the technique you're looking for.</p>
      }
        {filteredData.map((technique) => (
          <SearchResult
            key={technique.frontmatter.slug}
            title={technique.frontmatter.title}
            category={technique.frontmatter.category}
            difficulty={technique.frontmatter.difficulty}
            id={technique.frontmatter.id}
            prereqs={technique.frontmatter.prereqs}
          />
        ))}
    </div>
  )
}

export default SearchBar