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
    },

    EditTask:async(req,res)=>{
        
            try {
              console.log(req.body,"hii");
              const { task } = req.body;
              console.log(req.params.taskId)
              const list = await ListModel.findByIdAndUpdate(req.params.taskId, { title:task },{new:true});
              list.save().then(() => res.status(200).json({ message: "Task Updated" ,UpdtaedTask:list}));
            } catch (error) {
                console.log(error);
                res.status(500).json({ message:error.message });
            }
          
    },

    DeleteTask: async(req,res)=>{
        try {
            const taskId = req.params.taskId;

            // Find and delete the task
            const task = await ListModel.findByIdAndDelete(taskId);
            if (!task) {
                return res.status(404).json({ message: "Task not found." });
            }
    
            // Remove the task reference from all users' lists
            await UserModel.updateMany(
                { list: taskId },
                { $pull: { list: taskId } }
            );
    
            res.status(200).json({ message: "Task Deleted" });
          
          } catch (error) {
            console.log(error);
                res.status(500).json({ message:error.message });
          }
    },
     getAllTask : async (req, res) => {
      try {
        const { UserId } = req.params;
    
        // Check if UserId is provided
        if (!UserId) {
          return res.status(400).json({ message: "UserId is required" });
        }
    
        // Fetch the list of tasks for the given UserId
        const list = await ListModel.find({ user: UserId }).sort({ createdAt: -1 });
    
        // If list is not empty, return it; otherwise, return a "No tasks found" message
        if (list.length !== 0) {
          res.status(200).json({ list });
        } else {
          res.status(200).json({ message: "No tasks found" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    },
    
   
    
}