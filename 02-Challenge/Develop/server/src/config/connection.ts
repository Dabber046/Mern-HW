import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://jjmin94:<db_password>@dabber.cjswv.mongodb.net/?retryWrites=true&w=majority&appName=Dabber");

export default mongoose.connection;
