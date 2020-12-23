const express = require('express')
const app = express()
var port = process.env.PORT || 3000

const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());

  app.get('/websiteStatus', function (req, res) {
    let url = req.query.url;

    if (!url) {
      res.status(500).send(
        { website: url,
          error: 'Missing url'
        })
        return
    }
    fetch(url)
    .then(function(response) {
      if (response.ok) {
        res.status(200).send(
          { website: url,
            websiteStatus: 'ok'
          })
      } else {
        res.status(200).send(
          { website: url,
            websiteStatus: response.status
          })
      }
    })
    .catch(function(error) {
      res.status(500).send(
        { website: url,
          error: error
        })
    })
  })

  app.listen(port, 
    () => console.log(`Example app listening at http://localhost:${port}`))