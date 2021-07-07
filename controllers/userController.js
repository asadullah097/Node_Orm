const {User ,Role}=require('../models');

exports.userCreate=async function(req,res){
    const user=await User.create({
        firstName:"asad",
        lastName:"khan",
        roleId:1
    })
    res.send("working");
}
exports.userIndex=async function(req,res){
    const user=await User.findAll({
        include: [
            {
              model: Role,
            },
          ],
    })
    res.send(user);
}