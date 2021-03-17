const express = require('express')
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json());


const submitForm = require('./routes/submit-form')
const projects = require('./routes/projects')

// Import API Routes
app.use(submitForm);
app.use(projects);


module.exports = app


if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
