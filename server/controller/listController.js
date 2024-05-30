const ListModel = require('../models/ListModel')
const UserModel = require('../models/userModel')
module.exports={
    AddTask: async(req,res)=>{
        try {
            console.log(req.body);
            const { title, id } = req.body;
            const existingUser = await UserModel.findById(id);
            if (existingUser) {
              const list = new ListModel({ title, user: existingUser });
              await list.save().then(() => res.status(200).json({ list :list, messege:"Task Added Succsessfully"}));
              existingUser.list.push(list);
              existingUser.save()
            }
          } catch (error) {
            console.log(error);
            res.status(500).json({ message:error.message });
          }
    }
}