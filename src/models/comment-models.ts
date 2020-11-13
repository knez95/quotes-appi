import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quote } from "./quote-model";


@Entity("comments")
export class Comment{

@PrimaryGeneratedColumn()
id :number ;


@Column({
    name : "quote_id",
    type : "int"
})
quoteID :number;


@Column({
name : "comment_text",
type: "text" 
})
commentText : string 

@Column({
name :"comment_date",
type : "date"
})
commentDate : Date ;
     
@ManyToOne(type=> Quote,quote =>quote.comments)
@JoinColumn({name : "quote_id"})
quote : Quote ;
}

