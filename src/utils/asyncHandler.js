const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((error)=>next(error))
    }
}
//this function acts as a wrapper which when passed a async function converts it into a function which uses both resolve and catch for error handling

export {asyncHandler}