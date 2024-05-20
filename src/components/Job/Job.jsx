import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { id, image, estate_title, description, price, facilities, status, button } = job;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-10">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {estate_title}
                </h2>
                <p>{description}</p>
                <p>{price}</p>

                <div className="card-actions justify-start">
                    <p>{facilities[0]}</p>
                    <p>{facilities[1]}</p>
                    <p>{facilities[2]}</p>

                </div>
                <Link to={`/job/${id}`}>
                <button className="btn btn-accent">{button}</button>
                </Link>
            </div>
        </div>
    );
};

export default Job;