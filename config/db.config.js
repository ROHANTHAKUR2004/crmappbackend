require('dotenv').config();

const mongoDbUri = 'mongodb+srv://rohanthakur89768:1L8RxgVnmRSpCKNw@crm.zk0mpv3.mongodb.net/CRm?retryWrites=true&w=majority&appName=CRm ';
const dbName = "CRm";
module.exports = { mongoDbUri, dbName };