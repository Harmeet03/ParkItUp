import { useState, useEffect } from 'react'
import Navbar from '../../components/Admin/Navbar'
import { users } from '../../services/allUserAPI'

const Users = () => {

    const [data, setData] = useState('')

    const fetchUsers = async () => {
        try{
            const res = await users()
            setData(res.all_users)
        }
        catch(e){
            console.error('Unable to fetch users')
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="bg-black w-full h-screen flex">
            <div className="bg-gray-900 w-9/10 h-9/10 m-auto rounded-lg p-5">
                <div className="items-center text-center">
                    <p className="text-2xl sm:text-4xl text-white"> USERS </p>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    <Navbar/>
                    <table className="m-auto w-full">
                            <thead>
                                <tr className="flex text-sm text-white sm:text-xl py-8">
                                    <th className="m-auto"> Name </th>
                                    <th className="m-auto"> Email </th>
                                    <th className="m-auto"> Username </th>
                                </tr>
                            </thead>
                            <tbody>
                                <div className="bg-black text-white py-4 rounded-2xl overflow-y-scroll h-[50vh]">
                                {data && data.length > 0 ? (
                                    data.map(d => (
                                        <tr key={d._id} className="flex text-xs sm:text-sm py-2">
                                            <td className="m-auto px-1"> {d.name}  </td>
                                            <td className="m-auto px-1"> {d.email} </td>
                                            <td className="m-auto px-1"> {d.username} </td>
                                        </tr>
                                    ))
                                ) : (
                                    <div className='text-center flex flex-cols items-center justify-center text-white text-xl h-[40vh]'>
                                        <p> No user yet </p>
                                    </div>
                                )}
                                </div>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users