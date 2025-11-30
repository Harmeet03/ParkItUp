export const profile = async (req, res) => {
    try{
        const { _id, name, username, email, role } = req.user
        res.status(200).json({ 
            _id, 
            name, 
            username, 
            email,
            role
        });
    }   
    catch(e){
        res.status(500).json({ message: 'Server error fetching profile.' });
        console.error('Profile fetch error:', e);
    }     
}