import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const ViewProject = () => {
    const {id} = useParams();
    const [project, setProject] = useState({});

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:3000/project/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProject(data);
        };
        useEffect(() => {
            fetchProject();
        }, []);
    }

  return (
    <div className='mt-40 p-10'>
      <h1>Product Details</h1>
      <h2>{project.pname}</h2>
      <h3>{project.pprice}</h3>
      <h3>{project.pdescription}</h3>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ViewProject