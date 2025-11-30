import Navbar from "../../components/User/Navbar"
import { profile } from '../../services/profileAPI'
import { addFeedback } from '../../services/feedbackAPI.js'
import { useEffect, useState } from 'react'

const Feedback = () => {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const [form, setForm] = useState({
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    const getProfile = async () => {
        try{
            const res = await profile()
            setData(res)
        }
        catch(e){
            console.error('Error fetching profile:', e);
        }
    } 

    const postFeedback = async (e) => {
        e.preventDefault()
        setLoading(true)

        try{
            const res = await addFeedback(form)
            setLoading(false)
            setError(false)
            console.log(res)

            if(res.success === true){
                setLoading(false)
                setSubmitted(true)
                setForm({
                    message: ''
                })
            }
        }
        catch(e){
            console.error('Error submitting feedback:', e);
            setLoading(false)
            setSubmitted(false)
            setError(true)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return(
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5">
                
                <div className="flex flex-row items-center justify-between">
                    <p className="text-2xl sm:text-4xl"> FEEDBACK </p>
                    <div className="text-sm cursor-pointer sm:text-xl flex gap-2 items-center"> 
                        <span className="fa fa-user bg-cyan-100 p-2 rounded-full"/>
                        <p> {data.username} </p> 
                    </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    <Navbar/>
                    <div className="w-full p-5 bg-gray-100 m-auto rounded-xl overflow-y-scroll h-[64vh] sm:h-[70vh]">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0">
                            <div className="sm:w-1/2">
                                <p className="text-3xl sm:text-4xl"> Give us a chance to improve. We are here to improve your experience. </p>
                            </div>
                            <form className="sm:w-1/2 flex flex-col gap-4" onSubmit={postFeedback}>
                                <input required onChange={handleChange} value={form.message} name="message" className="p-4 sm:w-full h-[25vh] sm:h-[50vh] text-xl bg-white rounded-xl" placeholder="Type here..."/>
                                {loading ? (
                                    <p className="cursor-not-allowed text-2xl p-4 bg-green-100 rounded-xl transition text-center"> Sending... </p>                 
                                ) : (
                                    <button type="submit" className="cursor-pointer text-2xl p-4 bg-green-500 rounded-xl hover:scale-95 transition text-white"> Send </button>
                                )}
                                {submitted &&
                                    <span className="text-center text-green-500"> Thankyou for your feedback! </span>
                                }
                                {error && 
                                    <span className="text-center text-red-500"> Something went wrong! </span>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback