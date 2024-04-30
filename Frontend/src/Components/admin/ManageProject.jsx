import React,{useState, useEffect} from 'react'

const ManageProject = () => {
    const [Data, setData] = useState([])

    const fetchProjectData = async () => {
        const res = await fetch('http://localhost:4000/project/getall')
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchProjectData()
    }, [])

    const deleteProject = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:4000/project/delete/" + id, {
            method: "DELETE",
        });
        if (res.status === 200) {
            fetchProjectData();
        }
    }

    const displayProject = () =>{
        return Data.map((user) => (
            <tr>
                <td>{user.ptitle}</td>
                <td>{user.pdescription}</td>
                <td>
                    <button onClick = {() => { deleteProject(project._id)}} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ))
    }
  return (
    <div>
        <header className='text-center mt-5'>
            <div className="container">
                <h1 className='font-3 text-white'>Manage Project</h1>
            </div>
        </header>

        <div className="container mt-5 text-white">
            <table className="table table-dark">
                <thead>
                    <tr className='text-white'>
                        <th>Title</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayProject()}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageProject