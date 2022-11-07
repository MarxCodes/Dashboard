// const util = require('util');
// const multer = require('multer');
// const { GridFsStorage } = require('multer-gridfs-storage');

// const storage = new GridFsStorage({
//   url: process.env.MONGO_URI,

//   file: (req,file) => {
//     const match = ["image/png", "image/jpeg"];

//     if(match.indexOf(file.mimetype) === -1) {
//       const fileName = `${Date.now()}-dashboard-${file.originalName}`;
//       return fileName;
//     }

//     return {
//       bucketName: 'img-bucket', 
//       fileName: `${Date.now()}-dashboard-${file.originalName}`,
//       relatedUser: req.user.userId
//     }
//   }
// })

// var uploadFiles = multer({storage}).single("file");
// var upgloadFileMiddleware = util.promisify(uploadFiles);

// module.exports = upgloadFileMiddleware;