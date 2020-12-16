import React, {useState, useEffect} from 'react'

// Components
import JobBoardComponent from "./components/JobBoardComponent"
import data from "./assets/data.json"

import bgImage from "./assets/images/bg-header-desktop.svg"

const App = () => {
  
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => setJobs(data), [])

  const filterFunc = ({role, level, tools, languages}) => {

    const tags = [role, level];

    if (filters.length === 0) {
      return true
    }

    if (tools) {
        tags.push(...tools)
    }

    if (languages) {
        tags.push(...languages)
    }

    return tags.some(tag => filters.includes(tag))
  }

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag])
  }

  const handleFilterRemove = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter))
  }

  const filteredJobs = jobs.filter(filterFunc)

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className="bg-green-100">
      <header className="bg-green-400 py-16 " style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: "cover",
      }}>
      </header>
      <div className="py-5 container m-auto">
        <div>
          {
            filters.length > 0 && <div className="flex flex-wrap justify-between items-center space-x-4 bg-white shadow-md m-4 p-6 mt-16 md:mt-0 rounded border-l-4">
            <div>
            <span className="text-xl py-1">Filters: </span>
            <span>
            {filters.length > 0 && filters.map(filter => 
              (<span onClick={() => handleFilterRemove(filter)} className="cursor-pointer px-2 pb-1 mr-2 text-green-600 font-semibold tracking-tight text-md bg-green-100 mb-2 relative">x {filter}</span>))}
            </span>
            </div>
            <span>
              {filters.length > 0 && <button className="bg-red-600 text-white px-3 py-1 focus:outline-none" onClick={() => clearFilters()}>Clear</button>}
            </span>
          </div>
          }
          {
            jobs.length === 0 ? (<p>Fetching jobs...</p>) : (
              filteredJobs.map(job => <JobBoardComponent job={job} key={job.id} handleTagClick={handleTagClick}/>)
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
