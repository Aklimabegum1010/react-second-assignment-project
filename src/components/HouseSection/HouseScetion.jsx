import { useEffect, useState } from "react";
import Job from "../Job/Job";


const HouseScetion = () => {

    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div className="my-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Houses</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, nam.</p>
            </div>
            <div className="grid grid-cols-3">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default HouseScetion;