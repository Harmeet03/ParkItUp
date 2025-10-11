import { useNavigate } from "react-router"

const Navbar = () => {
    
    const to = useNavigate();
    
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-4 m-auto md:m-0 md:content md:w-70 md:py-4 md:px-8 md:flex md:flex-col md:gap-6">

                <div className="p-2 cursor-pointer text-sm md:text-xl hover:scale-90 hover:bg-cyan-100 rounded-xl transition" onClick={() => to('/dashboard')}>
                    <span className="fa fa-home"/> Dashboard 
                </div>

                <div className="p-2 cursor-pointer text-sm md:text-xl hover:scale-90 hover:bg-cyan-100 rounded-xl transition" onClick={() => to('/book_slot')}>
                    <span className="fa fa-calendar"/> Book Slot 
                </div>

                <div className="p-2 cursor-pointer text-sm md:text-xl hover:scale-90 hover:bg-cyan-100 rounded-xl transition" onClick={() => to('/history')}>
                    <span className="fa fa-list-alt"/> History 
                </div>

                <div className="p-2 cursor-pointer text-sm md:text-xl hover:scale-90 hover:bg-cyan-100 rounded-xl transition" onClick={() => to('/profile')}>
                    <span className="fa fa-user"/> Profile 
                </div>
            
            </div>
        </>
    )
}

export default Navbar