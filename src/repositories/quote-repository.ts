import { getManager } from "typeorm"
import { Quote } from "./../models/quote-model"

export   class QuoteRepository {

      getAllQuotes = () => {
     return getManager().getRepository(Quote).find() ;
     }

    geteQuoteById = (id:number) => {
        
           return getManager().getRepository(Quote).findOne(id,{ relations:["comments"] } ) ;
    }

     insertQuote = (quote : Quote) =>{
         return getManager().getRepository(Quote).insert(quote) 


    }

    deleteQuote = (id : number ) =>{
     return getManager().getRepository(Quote).delete(id)

    }
    
    updateQuote = (quote : Quote) => {
        return getManager().getRepository(Quote).save(quote)
    }

    getQuotesCustomQuery = () => {

        return getManager().query("SELECT * from quotes WHERE id = ?",[1])
    }
}