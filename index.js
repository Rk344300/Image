const express=require("express");
const upload=require("express-fileupload");
const app=express()
app.use(upload())
app.get('/',(req,res) =>{
    res.sendFile(__dirname +'/image.html')

})
app.post('/',(req,res) =>{
    if(!req.files)
    res.send("dont choose file")
    else{
    console.log(req.files)
    var imagefile=req.files.file
    var imagename=req.files.file.name
    


    imagefile.mv('./upload/'+imagename,function(err){
        if (err){
            res.send(err)
        }else{
            res.send("file uploaded")
        }
    })
    }

})

app.listen(5000, ()=> console.log("server is running.."));