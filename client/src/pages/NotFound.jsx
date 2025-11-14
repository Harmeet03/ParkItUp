import { useNavigate } from 'react-router'

const NotFound = () => {
    const to = useNavigate()

    return (
        <div className="bg-black px-10 flex flex-col gap-4 justify-center items-center text-center h-screen text-white">
            <p className="text-4xl md:text-6xl"> Page not found </p>
            <p className="cursor-pointer bg-blue-800 rounded-2xl hover:scale-90 transition p-4 w-40 text-lg md:text-xl px-4" onClick={() => {to('/')}}> Back </p>
        </div>
    )
}

export default NotFound