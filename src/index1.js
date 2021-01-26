const express=require("express");
const app=express();
const path=require("path");
const port = process.env.PORT || 8000;
const staticPath= path.join(__dirname, "../public/project");
//builting middleware
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("hello aakash");
});
app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})
