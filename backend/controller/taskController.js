import Task from "../models/Task.js";

export const creteTask = async (req, res, next) => {
  try {
    let { title, description, status } = req.body;
    const usertask = await Task.create({
      title,
      description,
      status,
      createdBy: req.user._id,
    });

    res.status(201).json(usertask);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next)=> {
    try {

        const usertask = await Task.find({createdBy : req.user._id})

        if(usertask.length === 0){
            return res.status(400).json({
                message : 'task not found gettasks'
            })
        }

        res.status(200).json(usertask)
        
    } catch (error) {
        next(error)
    }
}


export const updateTask = async (req, res, next)=> {

    try {
        const usertask = await Task.findOneAndUpdate(

            {
            _id : req.params.id,
            createdBy : req.user._id,
          },

             req.body,
             {new : true}   // return updated task
        )

        if(!usertask) {
            return res.status(400).json({
                message : 'task not found por not yours'
            })
        }

        res.status(200).json(usertask)
        
    } catch (error) {
        next(error)
    }
}


export const DeleteTask = async(req, res, next)=> {
    try {
        const usertask = await Task.findOneAndDelete({
            _id : req.params.id,
            createdBy : req.user._id
        })

        if(!usertask){
            return res.status(400).json({
                message : "user has not been deleted"
            })
        }
        res.status(200).json({
            message : 'task deleted'
        })
        
    } catch (error) {
        next(error)
    }
}