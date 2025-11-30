import brand from '../assets/brand.png'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const to = useNavigate()
    return(
        <nav>
            <div className='flex justify-around items-center'>
                <img src={brand} width={120}/>
                <div>
                    <button className='px-8 py-2 rounded-full bg-cyan-600 text-white cursor-pointer hover:scale-90 transition' onClick={() => to('/sign_in')}> Login </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar