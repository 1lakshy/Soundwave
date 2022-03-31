const bcrypt = require("bcryptjs")

class HashService {

  async hashOtp(data){

       return bcrypt.hash( data , 10);

 

    }

}
console.log(this.hashOtp)

module.exports = new HashService();