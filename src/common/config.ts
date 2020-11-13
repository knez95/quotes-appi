import {ConnectionOptions} from "typeorm" ;
import path from "path" ;


export const dbconfig : ConnectionOptions = {
    
    
    type :"mysql" ,
    host: "localhost" ,
    port: 3306 ,
    username:"root",
    password:"milos",
    database: "quotes_db" ,
    entities : [
        path.join(__dirname,"./../models/*.ts")
    ] 
     

}