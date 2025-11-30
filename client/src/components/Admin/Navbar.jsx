import { useNavigate } from "react-router"
import { logout } from '../../services/authAPI'

const Navbar = () => {
    const to = useNavigate()

    const logoutUser = async () => {
        try{
            const res = await logout()
            console.log('User Logged Out.')
            to('/')
        }
        catch(e){
            console.error('Error during logout:', e);
        }
    }

    return (
        <div className="text-white flex md:flex-col m-auto md:m-0 md:content md:w-70 md:py-4 md:px-8 md:gap-6 sm:gap-8 gap-2">

            <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-900 rounded-xl transition" onClick={() => to('/admin/dashboard')}>
                <span className="fa fa-home"/> 
                <span className="hidden md:block"> Dashboard  </span>
            </div>

            <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-900 rounded-xl transition" onClick={() => to('/admin/bookings')}>
                <span className="fa fa-calendar"/> 
                <span className="hidden md:block"> Bookings  </span>
            </div>

            <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-900 rounded-xl transition" onClick={() => to('/admin/users')}>
                <span className="fa fa-group"/> 
                <span className="hidden md:block"> Users </span>
            </div>

            <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-900 rounded-xl transition" onClick={() => to('/admin/reports')}>
                <span className="fa fa-folder-o"/> 
                <span className="hidden md:block"> Reports  </span>
            </div>
            
            <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-900 rounded-xl transition" onClick={() => to('/admin/slots')}>
                <span className="fa fa-square"/> 
                <span className="hidden md:block"> Slots  </span>
            </div>
            
            <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-900 rounded-xl transition">
                <span className="fa fa-arrow-circle-o-left"/> 
                <span className="hidden md:block" onClick={logoutUser}> Logout </span>
            </div>
        
        </div>
    )
}

export default Navbar