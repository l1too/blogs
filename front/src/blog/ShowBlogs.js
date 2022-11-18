import axios from 'axios'

import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = ()=> {
// primero configuro los hooks
    const [blogs, setBlog] = useState([])
    useEffect( ()=> {
        getBlogs()
    },[])

// procedimineto para mostrar todos los blogs
    const getBlogs = async()=> {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

// procedimiento para eliminar un blog
const deleteBlog = async (id)=> {
       await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>

                                <th>Content</th>

                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {  blogs.map( (blog)=> (
                                <tr key = {blog.id}>
                                    <td> { blog.title } </td>
                                    <td> { blog.content } </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i class="fa-solid fa-pen-to-square fa-lg"></i></Link>
                                        <button onClick={()=> deleteBlog(blog.id)} className='btn btn-danger'><i class="fa-regular fa-trash-can fa-lg"></i></button>
                                    </td>
                                </tr>
                            )) } 
                        </tbody>
                    </table>
                    <Link to={'/create'} className="btn btn-primary mt-2 mb-2 fa-xl"><i class="fa-solid fa-plus"></i></Link>
                </div>
            </div>
        </div>
    )

}

export default CompShowBlogs