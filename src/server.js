app.get("/terms-of-service", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "terms-of-service.html"))
})

app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "privacy-policy.html"))
})
