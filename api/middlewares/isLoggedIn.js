const isLoggedIn = async(req,res, next) =>{

    try{
        // To replace user checking logic
        const loggedIn = true

        if(!loggedIn){
            return res.sendStatus(401)
        }

        return next()
    } catch (e) {
        return next(e)
    }
}

export default isLoggedIn;