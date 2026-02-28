function FetchEmail(cb, emailId) {
console.log("Fetching email...");
setTimeout(() => {
let email = { id: emailId, content: "Hello World" };
cb(MoveToInbox, email);
}, 1000);
}
function ScanForVirus(cbb, email) {
console.log("Scanning for virus...");
setTimeout(() => {
email.scanned = true;
cbb(email);
}, 1500);
}
function MoveToInbox(email) {
console.log("Moving to inbox...");
setTimeout(() => {
email.location = "inbox";
}, 1000);
}
FetchEmail(ScanForVirus, "xyz@gmail.com");