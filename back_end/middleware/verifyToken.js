const jwt=require("jsonwebtoken");
//verfiy token
function verfiyToken(req,res,next){
  const  authToken =req.headers.key;
  if(authToken){
    const token = authToken.split(" ")[1];
    try {
      const decoded=jwt.verify(token,"Secret123");
      req.user=decoded;
      next();
    } catch (error) {
      return res.status(401).json({message:"invaild token acces is faild "})
    }

  }else{
    return res.status(400).json({message:" ,login the account  fist"})
  }

}
module.exports={
  verfiyToken,
}