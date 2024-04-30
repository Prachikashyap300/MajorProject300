import React,{useState, useEffect} from 'react'

const ManageUser = () => {
    const [Data, setData] = useState([])

    const fetchProjectData = async () => {
        const res = await fetch('http://localhost:4000/user/getall')
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
        const res = await fetch("http://localhost:4000/user/delete/" + id, {
            method: "DELETE",
        });
        if (res.status === 200) {
            fetchProjectData();
        }
    }

    const displayProject = () =>{
        return Data.map((user) => (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick = {() => { deleteProject(user._id)}} className="btn btn-danger">Delete</button>
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
                        <th>Name</th>
                        <th>Email</th>
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

export default ManageUser