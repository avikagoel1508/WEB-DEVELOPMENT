function UploadImage(cb, imageName) {
console.log("Uploading image...");
setTimeout(() => {
    
let imageUrl = "temp/" + imageName;
console.log(imageUrl);
cb(SaveToGallery, imageUrl)
}, 2000);
}
function ApplyFilter(cbb, imageUrl) {
console.log("Applying filter...");
setTimeout(() => {

let filteredImage = imageUrl.replace('.jpg', '_filtered.jpg');
console.log(filteredImage);
cbb(filteredImage);
}, 1500);
}
function SaveToGallery(filteredImage) {
console.log("Saving to gallery...");
setTimeout(() => {
let finalPath = "gallery/" + filteredImage.split('/').pop();
console.log(finalPath);
}, 1000);
}
UploadImage(ApplyFilter, "photo.jpg");