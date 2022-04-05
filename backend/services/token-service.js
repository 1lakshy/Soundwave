const jwt = require("jsonwebtoken");
const refreshModel = require("../Models/refresh-models")
const accessTokenSecret = process.env.JWT_ACCESS_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET

class TokenService {

 generateTokens(payload){
    const accessToken = jwt.sign(payload, accessTokenSecret ,{
        expiresIn: "1h"
    });

    const refreshToken = jwt.sign(payload, refreshTokenSecret ,{
        expiresIn: "1y"
    })

    return {accessToken ,refreshToken }

    }


    async  storeRefreshToken(token,userId){

        try{
           await refreshModel.create({
                token,
                userId
            }) 
        }catch(err){
            console.log(err.message)
        }
    


    }
}


module.exports = new TokenService();