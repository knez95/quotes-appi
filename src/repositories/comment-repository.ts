import { Comment } from "../models/comment-models";
import {getManager} from "typeorm"
export class CommentRepository {

    insertComment = (comment : Comment  ) =>{
        return getManager().getRepository(Comment).insert(comment)  
    }
} 