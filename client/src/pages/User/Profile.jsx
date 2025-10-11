import Navbar from '../../components/User/Navbar'

const Profile = () => {
    return (
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5">

                <div className="flex flex-row items-center justify-between">
                    <p className="text-2xl sm:text-4xl"> PROFILE </p>
                    <div className="text-sm cursor-pointer sm:text-xl flex gap-2 items-center"> 
                        <span className="fa fa-user bg-cyan-100 p-2 rounded-full"/>
                        <p> Harmeet </p> 
                    </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    
                    <Navbar/>

                    <div className="w-full p-5 bg-gray-100 m-auto rounded-xl">
                        <div className="bg-white p-5 rounded-xl sm:w-4/5 m-auto">
                            <div className="flex flex-col text-4xl sm:text-6xl flex gap-2 items-center justify-center"> 
                                <span className="fa fa-user bg-cyan-100 p-2 rounded-full p-10"/>
                                <div className='text-center flex flex-col gap-4'>
                                    <p className='text-xl sm:text-4xl font-bold'> Harmeet Singh Dhanjal </p>
                                    <i><p className='text-sm sm:text-xl'> harry123 </p></i>
                                    <i><p className='text-sm sm:text-xl'> hsdhanjal2003@gmail.com </p></i>
                                    <p className='text-sm sm:text-xl'> 9971391713 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile