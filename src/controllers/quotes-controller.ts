// implementacija odgovora na zahtjev,(akcije)

import{Request,response,Response} from "express";
import { Quote } from "../models/quote-model";
import { QuoteRepository } from "./../repositories/quote-repository";



export const getAllQuotes = (request :Request,response : Response) => {

    let quoteRepository = new QuoteRepository() ;    
    quoteRepository.getAllQuotes().then(data =>{
        response.send(data);
    }).catch(err =>{
        response.send(err);
    })
}

export const getQuoteById = (request :Request,response : Response) =>{
    let quoteRepository = new QuoteRepository() ;
    quoteRepository.geteQuoteById(+request.params.id).then(data => {
        response.send(data);
    }).catch(err=> {
        response.send(err) ;
    })
}

export const insertQuote = (request :Request,response : Response) =>{
   let quote =Object.create(request.body);
   let quoteRepository = new QuoteRepository() ;
   quoteRepository.insertQuote(quote).then(data => {
 
     response.send(data) ;
   }).catch(err => {
       response.send(err)
   })  
}

    




export const updateQuote = (request :Request,response : Response) =>{
   let quote = Object.create(request.body) ; 
 
    
   let quoteRepository = new QuoteRepository() ;
   quoteRepository.updateQuote(quote).then(data => {
 
     response.send(data) ;
   }).catch(err => {
       response.send(err)
   })  
   
}

export const deleteQuote =(request :Request,response : Response) =>{
    let quoteRepository = new QuoteRepository() ;
    quoteRepository.deleteQuote(+request.params.id).then(data => {
     response.send({ stats: "OK" ,
                    data }) ;   
              
                }).catch(err => {
                    response.send(err);
                })
            


}


export const getQuotesCustomQuery = (request: Request,response : Response ) => {

    let quoteRepository = new QuoteRepository() ;
    quoteRepository.getQuotesCustomQuery().then( data => {
        response.send(data);
    }).catch(err => {
        response.send(err) ;
    })
}



 