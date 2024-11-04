const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const name=req.body || 'World'
    res.send(`Hello ${name}`)
});

app.post("/api/users/:id",(req,res)=>{
    res.send(`Hello user ${req.params.id}`)
})

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;