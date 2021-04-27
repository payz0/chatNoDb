let express = require('express')
let server = express()
let app = require('http').createServer(server)
let port =  3001
let socket = require('socket.io').listen(app)
let fs = require('fs')

let dataPesan = []

socket.on('connection',(io)=>{
		fs.readFile('db.json','utf8',(err,data)=>{
			try{
				dataPesan = JSON.parse(data)
				dataPesan.forEach((val)=>{
					socket.emit('load awal',val)
				})
			}catch{
				console.log('tidak ada file')
			}
		})
	

	console.log('user connected')
	io.on('send pesan',(data)=>{
		dataPesan.push(data)
		fs.writeFile('db.json',JSON.stringify(dataPesan),(err)=>{
			if(err) throw err
			console.log('file created')
		})
		socket.emit('pesan baru',data)
	})
})

app.listen(port,()=>{console.log(`server running ${port}`)})
