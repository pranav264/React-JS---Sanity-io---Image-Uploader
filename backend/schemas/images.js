export default {
    name: "my_images",
    title: "myImages",
    type: "document",
    fields: [
        {
            name: "image_title",
            title: "Image Title",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image"
        },
        {
            name: "user",
            title: "User",
            type: "reference",
            to: [{ type: "user_login" }]
        }
    ],
}