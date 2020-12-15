import React, {useState, useEffect} from 'react'

// Components
import JobBoardComponent from "./components/JobBoardComponent"
import data from "./assets/data.json"

const App = () => {
  
  const [jobs, setJobs] = useState([])

  useEffect(() => setJobs(data), [])
  
  return (
    <>
      {
        jobs.length === 0 ? (<p>Fetching jobs...</p>) : (
          jobs.map(job => <JobBoardComponent job={job} key={job.id}/>)
        )
      }
    </>
  )
}

export default App
