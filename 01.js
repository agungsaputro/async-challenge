const fs = require('fs')

const readDir = new Promise((resolve, reject) =>{
    fs.readdir('/','utf8',(err,file) =>{
        resolve(file)
    })
})

readDir.then((data) =>{
    console.log(data)
})