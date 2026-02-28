function ReadFile(cb, filename) {
console.log("Reading file...");
setTimeout(() => {
let data = "Content of " + filename;
console.log(data)
cb(BackupToCloud, data)
}, 1000);
}
function Encrypt(cbb, data) {
console.log("Encrypting data...");
setTimeout(() => {
let encrypted = btoa(data); // simple encoding
 console.log(encrypted)
  cbb()
}, 1500);
}
function BackupToCloud() {
console.log("Backing up to cloud...");
setTimeout(() => {
let cloudUrl = "<https://cloud.storage.com/backup_>" + Date.now();
console.log(cloudUrl)

}, 2000);
}
ReadFile(Encrypt, "cloudstorage")