import { Component } from '@angular/core';
import * as socketIo from 'socket.io-client';
import {NgxImageCompressService} from 'ngx-image-compress';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  socket = socketIo('http://localhost:3001')
  message:any = []
  pesan:any = {}
  image:boolean = false
  chat:boolean = false
  loading:boolean = true
  gambar:any

  constructor(private imageCompress: NgxImageCompressService, private ng2ImgMax: Ng2ImgMaxService){}

  imgResultBeforeCompress:string;
  imgResultAfterCompress:string;
  ngOnInit(){
    // this.socket.on
    this.socket.on('load awal',(data)=>{
      // this.message = data
      this.message.push(data)
      if(this.message.length){
        this.loading = false
        console.log('data awal')
      }
      
    })
    this.socket.on('pesan baru',(data)=>{
      if(data.user != this.pesan.user){
        this.message.push(data)
      }
    })
  }

  compressFile() {
  
    this.imageCompress.uploadFile().then(({image, orientation}) => {
    
      this.imgResultBeforeCompress = image;
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.imgResultAfterCompress = result;
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
          // console.log(result)
        }
      );
      
    });
    
  }

  async uploadFoto(event){
    // this.compressFile()
    let image = event.target.files[0];
    this.ng2ImgMax.compressImage(image,  .5).subscribe(
      result => {
        console.log(result)
        let uploadedImage = new File([result], result.name);
        const reader = new FileReader();
              reader.onload = async e =>{ 
                // url = 
               this.gambar = reader.result 
              }
              reader.readAsDataURL(image);
      },
      error => {
        console.log('😢 Oh no!', error);
      })
    }

    
  // }

  kirim(){
    this.message.push(this.pesan)
    this.socket.emit('send pesan',this.pesan)
    this.pesan = {user:this.pesan.user}
    this.image = false
  }

  upload(event){
    this.image = true
    let img = <File>event.target.files[0]
    // console.log(img.type.substr(0,5))
    let reader = new FileReader()
    reader.onload = e =>{this.pesan.img = reader.result;
    }
    reader.readAsDataURL(img)
    this.pesan.type = img.type.substr(0,5)
    // reader.readAsBinaryString(img)
    // console.log(this.pesan.img)
  }
}
