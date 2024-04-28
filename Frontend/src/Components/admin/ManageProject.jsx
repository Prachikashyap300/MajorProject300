import React,{useState, useEffect} from 'react'

const ManageProject = () => {
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:4000/project/getall')
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    const deleteProduct = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:4000/project/delete/" + id, {
            method: "DELETE",
        });
        if (res.status === 200) {
            fetchUserData();
        }
    }

    const displayUser = () =>{
        return Data.map((user) => (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick = {() => { deleteProduct(user._id)}} className="btn btn-danger">Delete</button>
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
                    {displayUser()}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageProject