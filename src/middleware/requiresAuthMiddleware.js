import tokenService from "../service/tokenService.js";

export const requiresAuth = () => {
  return async (req, res, next) => {
    try{
        if(process.env.NODE_ENV === 'development') return next()
        await tokenService.verifyToken(req)
        return next()
    }catch (error) {
      error.statusCode = 401;
      return next(error);
    }
  };
};

export default { requiresAuth };