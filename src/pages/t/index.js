import { graphql } from "gatsby"
import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"

const Techniques = ({ data }) => {

  // states will be strings.

  // in the difficulty TODOs, set the other two to false

  // for TODAY:
  // Pass the easyCheck and setEasy from here, into the Searchbar and use the setEasy to manage states from the Searchbar. Refer to oldSearchbar.js for how I did it before.
  // Category can be left out and just searched regularly, however easy med hard should be big buttons. ASC/DESC could be buttons too.

  const [easyCheck, setEasy] = useState(false)
  useEffect(() => {
    easyCheck === true ? setFilter(easy) : setFilter(ascending)
  }, [easyCheck])

  const [medCheck, setMed] = useState(false)
  useEffect(() => {

  }, [medCheck])

  const [hardCheck, setHard] = useState(false)
  useEffect(() => {

  }, [hardCheck])

  // false = ASC, true = DESC
  const [order, setOrder] = useState(false)
  useEffect(() => {
    // TODO
  }, [order])

  // ordering
  const ascending = data.ascending.nodes 
  const descending = data.descending.nodes

  // difficulty
  const easy = data.easy.nodes
  const med = data.med.nodes
  const hard = data.hard.nodes

  // category
  const basics = data.basics.nodes
  const articulation = data.articulation.nodes
  const percussion = data.percussion.nodes
  const harmonics = data.harmonics.nodes

  const [filter, setFilter] = useState(ascending)
  useEffect(() => {
    setFilterDefault(filter)
  }, [filter])

  const [filterDefault, setFilterDefault] = useState(ascending)

  return (
    <Layout title="Techniques">
      <h1>Techniques</h1>
      <div>
        <SearchBar 
          placeholder="Search Techniques..." 
          data={filter} 
          setFilter={setFilter}
          default={filterDefault}
        >
          {/* <label for="easy">
            <input 
              type="checkbox" 
              id="easy" 
              defaultChecked={easyCheck}
              onChange={() => setEasy(!easyCheck)}
            />
            Easy
          </label> */}
        </SearchBar>
      </div>
    </Layout>
  )
}

// IDEA: pass all schema variables as an object to SearchBar, and use the setters to manage them just like I managed earlier

// Need 7 schemas:
// asc, easy dsc, easy asc, med dsc, med asc, hard dsc, hard asc

// Do search filtering here
// Shouldnt need to edit the code in SearchBar component

// IDEA: Use the system I have now, with the multiple query aliases (techniques, easy, med, hard). Except use regular coding to find ones that match.
// EX: I want to find everything with "easy", "percussion", and is sorted as "DESC". The code will make a new data object using that and pass that into the SearchBar as data. Make sure to prioritize the ordering of either DESC or ASC.
// 1. Take sort query array (DESC or ASC title, default is ASC)
// 2. Take the intersection of category array if it exists
// 3. Take the intersection of difficulty array if it exists
// 2 and 3 can be swapped, 
// IDEA: To make the process more efficient, first take the length of the category and difficulty arrays and take the intersection of the array with the shorter length.

export const query = graphql`
  query TechniquesPage {

    ascending: allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    descending: allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }

    easy: allMarkdownRemark(filter: {frontmatter: {difficulty: { eq: "easy" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    med: allMarkdownRemark(filter: {frontmatter: {difficulty: { eq: "med" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    hard: allMarkdownRemark(filter: {frontmatter: {difficulty: { eq: "hard" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }

    basics: allMarkdownRemark(filter: {frontmatter: {category: { eq: "basics" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    articulation: allMarkdownRemark(filter: {frontmatter: {category: { eq: "articulation" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    percussion: allMarkdownRemark(filter: {frontmatter: {category: { eq: "percussion" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    harmonics: allMarkdownRemark(filter: {frontmatter: {category: { eq: "harmonics" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
  }
`

export default Techniques