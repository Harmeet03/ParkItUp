import Navbar from "../../components/User/Navbar"

const History = () => {
    return (
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-2xl sm:text-4xl"> BOOKING HISTORY </p>
                    <div className="text-sm cursor-pointer sm:text-xl flex gap-2 items-center"> 
                        <span className="fa fa-user bg-cyan-100 p-2 rounded-full"/>
                        <p> Harmeet </p> 
                    </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">

                    <Navbar/>

                    <table className="m-auto w-full">
                        <thead>
                            <tr className="flex text-xl sm:text-4xl py-8">
                                <th className="m-auto"> Slot </th>
                                <th className="m-auto"> Date </th>
                                <th className="m-auto"> Time </th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className="bg-gray-100 py-4 rounded-2xl overflow-y-scroll h-[55vh]">
                                <tr className="flex text-xl sm:text-4xl py-8">
                                    <td className="m-auto px-1"> P1 </td>
                                    <td className="m-auto px-1"> 11/11/2025 </td>
                                    <td className="m-auto px-1"> 15:15 </td>
                                </tr>
                                <tr className="flex text-xl sm:text-4xl py-8">
                                    <td className="m-auto px-1"> P1 </td>
                                    <td className="m-auto px-1"> 11/11/2025 </td>
                                    <td className="m-auto px-1"> 15:15 </td>
                                </tr>
                                <tr className="flex text-xl sm:text-4xl py-8">
                                    <td className="m-auto px-1"> P1 </td>
                                    <td className="m-auto px-1"> 11/11/2025 </td>
                                    <td className="m-auto px-1"> 15:15 </td>
                                </tr>
                                <tr className="flex text-xl sm:text-4xl py-8">
                                    <td className="m-auto px-1"> P1 </td>
                                    <td className="m-auto px-1"> 11/11/2025 </td>
                                    <td className="m-auto px-1"> 15:15 </td>
                                </tr>
                                <tr className="flex text-xl sm:text-4xl py-8">
                                    <td className="m-auto px-1"> P1 </td>
                                    <td className="m-auto px-1"> 11/11/2025 </td>
                                    <td className="m-auto px-1"> 15:15 </td>
                                </tr>
                                <tr className="flex text-xl sm:text-4xl py-8">
                                    <td className="m-auto px-1"> P1 </td>
                                    <td className="m-auto px-1"> 11/11/2025 </td>
                                    <td className="m-auto px-1"> 15:15 </td>
                                </tr>
                                <tr className="flex text-xl sm:text-4xl py-8">
                                    <td className="m-auto px-1"> P1 </td>
                                    <td className="m-auto px-1"> 11/11/2025 </td>
                                    <td className="m-auto px-1"> 15:15 </td>
                                </tr>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default History