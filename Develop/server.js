const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync Sequelize models to the database
sequelize.sync({ force: false }).then(() => { // Set force: true to drop tables and re-create them
  // Start the server after syncing models
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
