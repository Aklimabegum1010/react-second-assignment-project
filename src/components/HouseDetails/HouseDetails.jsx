import { useLoaderData, useParams } from "react-router-dom";


const HouseDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={job.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{job. estate_title}</h1>
                        <p className="py-3">Description : {job.description}</p>
                        <p className="py-3">Location : {job.location}</p>
                        <p className="py-3">Area : {job.area}</p>
                        <p className="py-3">Price : {job.price}</p>
                        <p className="py-6">Status : {job.status}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDetails;
