import car from '../assets/car2.png'
import brand from '../assets/brand.png'
import { useNavigate } from 'react-router'
import { login } from '../services/authAPI'
import { useState } from 'react'

const SignIn = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        try{
            const res = await login(form)
            setError(false)
            setLoading(false)

            if(res.role === 'admin'){
                to('/admin/dashboard')
                setLoading(false);
            }
            else{
                to('/dashboard')
                setLoading(false);
            }
        }

        catch(e){
            console.log('Login failed')
            setError(true)
            setLoading(false)
        }
    }

    const to = useNavigate()  

    return(
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg justify-center items-center flex">
            {/* <div className="bg-white md:bg-blue-400 w-9/10 h-9/10 m-auto rounded-lg justify-center items-center flex"> */}
                <div className="flex text-center md:gap-8 lg:gap-16 sm:flex-row sm:justify-center items-center m-auto md:w-215 py-10 px-5">
                    <div>
                        <img src={car} className="hidden md:block md:w-90 lg:w-80 rounded-xl md:h-75 md:rounded-4xl"/>
                    </div>
                    <div className='py-4 px-10 md:px-6 lg:px-10 rounded-xl bg-gray-100'>
                        <div className='flex justify-between items-center'>
                            <p className='text-4xl text-left py-4'> Login </p>
                            <img src={brand} width={60} className='py-4'/>
                        </div>
                        <form className='flex flex-col gap-4 py-8' onSubmit={handleSubmit}>
                            <input required onChange={handleChange} value={form.email} className='bg-white py-2 px-4' type='text' name='email' placeholder='Email'/>
                            <input required onChange={handleChange} value={form.password} className='bg-white py-2 px-4' type='password' name='password' placeholder='Password'/>
                            <p> Read <span onClick={() => to('/conditions')} className='text-cyan-600 italic cursor-pointer'>Terms and Conditions.</span> </p>
                            {loading ? (
                                <button disabled className='bg-gray-400 py-2 px-4 rounded-lg text-white cursor-not-allowed'> Loading... </button>
                            ):
                            (
                                <button className='bg-cyan-600 py-2 px-4 rounded-lg text-white cursor-pointer hover:scale-90 transition cursor-pointer'> Login </button>
                            )}
                            <p className='text-sm'> Don't have an account? <span className='underline cursor-pointer' onClick={() => to('/sign_up')}> Sign Up </span> </p>
                            {error && <p className='text-red-500 text-sm'> Something went wrong. </p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn