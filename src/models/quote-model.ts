import{Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm" ;
import {Comment} from "./comment-models" ;
@Entity("quotes")
export class Quote{
    
      @PrimaryGeneratedColumn({
          name : "id"
      })
     id : number ;


    @Column({
    name :"quote_text" ,
    nullable : false ,
    length : 500,
    type : "varchar"  
    })
    quoteText:string;


    @Column({
      name: "quote_narrator" ,
      nullable :true ,
      length : 100 ,
      type : "varchar"

    })
    quoteNarrator : string ;

    @Column({
        name : "quote_date" ,
        nullable : false ,
        type: "date"
    })
    quoteDate : Date ;
    @OneToMany(type => Comment ,comment =>comment.quote)
comments :Comment[] ;
}