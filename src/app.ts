// program koji se izvrsava na serveru 


import express, { request } from "express" ;


import quotesRouter from "./routing/quotes-routing" ;
import commentRouter from "./routing/comments-routing"
//za konekciju sa bazom
import {dbconfig} from "./common/config" ;
import { createConnection} from "typeorm" ;

// za parsiranje body dijela 
import bodyParser from "body-parser" ; 
import commentsRouter from "./routing/comments-routing";

class App {

    serverApp : express.Application ;

      constructor(){
          this.serverApp=express()
          this.config() ;
          this.connectToDb ()
          this.routing() ;
          
        }

          private config(){
           this.serverApp.use(bodyParser.json());
          }

      
    private routing(){
//ruta - URL sablon + tip zahtjeva
//za svaku rutu,definisemo akciju,odnosno,kako da izgleda
     this.serverApp.use("/quotes",quotesRouter) ;
     this.serverApp.use("/comments",commentRouter)
  }


   private connectToDb(){
 createConnection(dbconfig).then(connection => {
    console.log("Successfully connected !");
}).catch(err=>{
   console.log("Error while connecting")
   console.log(err) ; 
 })
   }
}

let serverInstace = new App().serverApp ;
export default serverInstace ;

