
import cloudinary from '../utils/cloudinary.js'


export const Uploadfile = (req,res, next)=> {
    if(!req.file) {
        return res.status(400).json({
            message : "no file uploaded"
        })
    }
    // cloudinary uploader
      const stream = cloudinary.uploader.upload_stream(
         {folder : "MUSTAFE_uploader", resource_type : "auto"},
        (error,result)=> {
            if(error) return next(error);
// 3️⃣ Response client-ka
            return res.status(201).json({
                sucess : true,
                fileUrl : result.secure_url
            })
        }
    )
     // 4️⃣ Dirida buffer-ka Multer (RAM) Cloudinary
    stream.end(req.file.buffer)
}