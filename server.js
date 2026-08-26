const express = require("express")

app = express()

app.get("/health", (req, res) => {
  res.send({
    "status": true,
    "name": "testing platform",
  })
})

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000")
})