import car from '../assets/car3.png'
import brand from '../assets/brand.png'
import { useNavigate } from 'react-router'


const SignUp = () => {
    const to = useNavigate()
    return(
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg justify-center items-center flex">
            {/* <div className="bg-white md:bg-blue-400 w-9/10 h-9/10 m-auto rounded-lg justify-center items-center flex"> */}
                <div className="flex text-center md:gap-8 lg:gap-16 sm:flex-row sm:justify-center items-center m-auto md:w-215 py-10 px-5">
                    <div>
                        <img src={car} className="hidden md:block md:w-90 lg:w-100 rounded-xl md:h-75 md:rounded-4xl"/>
                    </div>
                    <div className='py-4 px-10 md:px-6 lg:px-10 rounded-xl bg-gray-100'>
                        <div className='flex justify-between items-center'>
                            <p className='text-4xl text-left py-4'> Signup </p>
                            <img src={brand} width={60} className='py-4'/>
                        </div>
                        <form className='flex flex-col gap-4 py-8'>
                            <input required className='bg-white py-2 px-4' type='text' name='name' placeholder='Name'/>
                            <input required className='bg-white py-2 px-4' type='text' name='email' placeholder='Email'/>
                            <input required className='bg-white py-2 px-4' type='password' name='password' placeholder='Password'/>
                            <button className='bg-cyan-600 py-2 px-4 rounded-lg text-white cursor-pointer hover:scale-90 transition cursor-pointer'> Signup </button>
                            <p className='text-sm'> Already have an account? <span className='underline cursor-pointer' onClick={() => to('/sign_in')}> Sign In </span> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp