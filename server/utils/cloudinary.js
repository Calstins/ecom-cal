const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
});

const cloudinaryUpload = async (fileToUploads) => {
    return new Promise ((resolve)=>{
        cloudinary.uploader.upload(fileToUploads, (result)=>{
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id,
                },
                {
                  resource_type: 'auto',  
                }
            )
        })
    })
}

const cloudinaryDelete = async (fileToUploads) => {
    return new Promise ((resolve)=>{
        cloudinary.uploader.destroy(fileToUploads, (result)=>{
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id,
                },
                {
                  resource_type: 'auto',  
                }
            )
        })
    })
}

module.exports = {cloudinaryUpload, cloudinaryDelete};