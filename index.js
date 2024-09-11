const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes.js');
const vehicleRoutes = require('./routes/vehicleRoutes.js');
const subadminRoutes = require('./routes/subadminRoutes.js');
const maintenanceRoutes = require('./routes/maintenanceRoutes.js');
require('./db/db.js');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes for users
app.use('/api/customers', userRoutes);

//Routes for subadmins
app.use('/api/subadmin', subadminRoutes);

//Route for invoice 
app.use('/api/invoice', invoiceRoutes);
app.use('/api/getinvoice', invoiceRoutes);

//Route for vehicle
app.use('/api/vehicles', vehicleRoutes);

//Route for maintenance
app.use('/api/maintenance', maintenanceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
