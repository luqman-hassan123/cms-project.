const express = require('express');
const app = express();
const dotenv = require('dotenv');
const ministryRoutes = require('./routes/ministryRoutes');
const departmentRoute = require('./routes/departmentRoute');
const employeeRoute = require('./routes/employeeRoute');
const carRoute =  require ('./routes/carRoute')
const driverRoute = require('./routes/driverRoute');
const empCarAllocationRoutes = require ('./routes/empCarAllocationRoutes')
const CarDriverReservationRoute = require('./routes/carDriverReservationRoute');
const carEmployeeHistoryRoute = require('./routes/carEmployeeHistoryRoute')
const dbConfig = require("./config/dbConfig");
const driverCarHistoryRoute = require("./routes/driverCarHistoryRoute");
const userRoute = require ('./routes/userRoute')
const fuelRoute = require ('./routes/fuelRoute')
const budgetRoute = require ('./routes/budgetRoute')
const maintenanceRoute = require ('./routes/maintenanceRoute')
const setupRelationships = require('./models/Relationships')
const authRoutes = require("./routes/authRoutes");
const userRoleRoute = require('./routes/userRoleRoute')
const permissionRoute = require ('./routes/permissionRoute')

dotenv.config();
//Routes-> Controller -> Services -> Buissness Logic + Repositoies
app.use(express.json());
const basePath = "/api";
app.use(basePath + '/ministries', ministryRoutes); 
app.use( basePath + '/department', departmentRoute); 
app.use( basePath + '/employee', employeeRoute)
app.use(basePath + '/car' , carRoute)
app.use(basePath + '/driver' ,driverRoute)
app.use(basePath+ '/empCarAllocation', empCarAllocationRoutes)
app.use(basePath + '/carDriverReservation', CarDriverReservationRoute)
app.use(basePath + '/carEmployeeHistory', carEmployeeHistoryRoute)
app.use(basePath + '/drivercarhistory', driverCarHistoryRoute);
app.use(basePath + '/user', userRoute)
app.use(basePath + '/fuel', fuelRoute)
app.use(basePath + '/budget' , budgetRoute)
app.use(basePath + '/maintenance' , maintenanceRoute)
app.use(basePath +  '/auth', authRoutes);
app.use(basePath + '/userRole', userRoleRoute)
app.use(basePath + '/permission', permissionRoute)

const connectDB = async () => {
    try {
      await dbConfig.authenticate();
      console.log("Database connected successfully.");
      setupRelationships();
      console.log("Relationships initialized.");
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  };
  connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
