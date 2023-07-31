const express = require("express");
const routes = require('./routes/blogPostRoutes');
const app = express();

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  app.use(express.json());
  app.use(routes);  
  require("./db/database")
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
