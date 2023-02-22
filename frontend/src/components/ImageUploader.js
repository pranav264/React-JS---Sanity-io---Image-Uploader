import React, { useState } from 'react';
import client from "../client";


const ImageUploader = () => {

    const [imageTitle, setImageTitle] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleImageTitleChange = (e) => {
        setImageTitle(e.target.value);
    }

    const handleImageFileChange = (e) => {
        setImageFile(e.target.files[0]);
    }

    const onImageFileUpload = (e) => {
        e.preventDefault();
        if (imageFile.type === "image/jpeg" || imageFile.type === "image/png") {
            client.assets
                .upload("image", imageFile, {
                    contentType: imageFile.type,
                    filename: imageFile.name
                })
                .then((document) => {
                    client.create({
                        _type: "my_images",
                        image_title: imageTitle,
                        image: {
                            _type: "image",
                            asset: {
                                _type: "reference",
                                _ref: document._id
                            }
                        }
                    })
                        .then((res) => {
                            console.log(`Image was created with the id: ${res._id}`);
                        })
                })
        }
        else {
            alert("File type not supported. Upload only jpeg or png files.")
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center shadow-md w-96 mt-20 mx-auto">
                <h2 className="mt-5 text-gray-700 font-semibold text-2xl">Upload your Image</h2>
                <p className="mt-5 text-gray-500">File should be Jpeg, Png,...</p>
                <form className="flex flex-col p-10" onSubmit={onImageFileUpload}>
                    <input className="mt-4 p-2 border border-gray-300 rounded-md" type="text" value={imageTitle} onChange={handleImageTitleChange} placeholder="Title of your image..." />
                    <input className="mt-4 p-3 bg-gray-200 border border-gray-300 rounded-md h-72" onChange={handleImageFileChange} type="file" />
                    <label className="mt-3">Or drag your file above</label>
                    <input type="submit" value="Upload File" className="p-2 bg-blue-500 text-white rounded-md mt-5 hover:cursor-pointer" />
                </form>
            </div>
        </>
    )
}

export default ImageUploader
