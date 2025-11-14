const admin = async (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(403).json({
            message: 'Access denied! You are not an Admin.'
        })
    }

    next()
}

export default admin