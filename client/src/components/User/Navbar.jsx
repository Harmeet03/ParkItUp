import { useNavigate } from "react-router"
import { resetSlots } from "../../services/adminAPI";

const Navbar = () => {
    
    const to = useNavigate();

    return (
        <>
            <div className="flex md:flex-col m-auto md:m-0 md:content md:w-70 md:py-4 md:px-8 md:gap-6 gap-8">

                <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-100 rounded-xl transition" onClick={() => to('/dashboard')}>
                    <span className="fa fa-home"/>
                    <span className="hidden md:block"> Dashboard </span>
                </div>

                <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-100 rounded-xl transition" onClick={() => to('/book_slot')}>
                    <span className="fa fa-calendar"/> 
                    <span className="hidden md:block"> Book Slot </span>
                </div>

                <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-100 rounded-xl transition" onClick={() => to('/history')}>
                    <span className="fa fa-list-alt"/> 
                    <span className="hidden md:block"> History </span>
                </div>

                <div className="p-2 flex items-center gap-2 cursor-pointer text-2xl md:text-xl hover:scale-90 hover:bg-cyan-100 rounded-xl transition" onClick={() => to('/profile')}>
                    <span className="fa fa-user"/> 
                    <span className="hidden md:block"> Profile </span>
                </div>
            </div>
        </>
    )
}

export default Navbar