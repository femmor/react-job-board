import React from 'react'

const JobBoardComponent = ({ job: { id, newJob, company, logo, featured, position, role, level, postedAt, contract, location, languages, tools }, handleTagClick}) => {

    const tags = [role, level];

    if (tools) {
        tags.push(...tools)
    }

    if (languages) {
        tags.push(...languages)
    }

    return (
        <div className="mt-8">
            <div className="flex md:flex-row flex-col bg-white shadow-md m-4 p-6 mt-16 md:mt-0 rounded border-l-4 border-green-600">
                <div>
                    <img src={logo} alt="job-logo" className="w-20 h-20 -mt-16 md:mt-0"/>
                </div>
                <div className="flex flex-col ml-4 mt-4 md:mt-0 justify-between">
                    <div className="flex items-center space-x-4">
                        <h3 className="text-green-500 font-bold">{company}</h3>
                        {newJob && <span className="uppercase bg-green-400 px-2 py-1 text-white text-xs font-semibold rounded-full">new!</span>}
                        {featured && <span className="uppercase bg-gray-400 px-2 py-1 text-white text-xs font-semibold rounded-full">featured</span>}
                    </div>
                    <h2 className="font-bold text-xl">{position}</h2>
                    <p className="text-gray-700">
                        {postedAt} . {contract} . {location}
                    </p>
                </div>
                <div className="border border-gray-100 mt-2 md:hidden">

                </div>
                <div className="flex flex-wrap items-center md:ml-auto m-4">
                    {
                        tags ? tags.map(tag => (
                            <button onClick={() => handleTagClick(tag)} className="px-2 py-1 mr-2 text-green-600 font-semibold tracking-tight text-md bg-green-100 mb-2">{tag}</button>
                        )) : null
                    } 
                </div>
            </div>
        </div>
    )
}

export default JobBoardComponent
