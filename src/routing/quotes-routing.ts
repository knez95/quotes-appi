import express  from "express" ;

import * as quotesController from "./../controllers/quotes-controller"

const quotesRouter = express.Router() ;


/* odavde doneseno pa skraceno dolje
1. quotesRouter.get("",quotesController.getAllQuotes);

2. quotesRouter.get("/:id",quotesController.getQuoteById) ;
3. quotesRouter.post("",quotesController.insertQuote) ; 
4. quotesRouter.put("",quotesController.updateQuote) ;
5. quotesRouter.delete("/:id",quotesController.deleteQuote) ; */


// 1. dovlacenje svih entiteta iz DB
 // 3. Unos entita
 // 4. Update entieta 


quotesRouter.route("").get(quotesController.getAllQuotes)
                      .post(quotesController.insertQuote)
                      .put(quotesController.updateQuote) ;


// 2. Dovlacenje jednog specificnog entieta iz DB
// 5. Brisanje entieta
 quotesRouter.route("/:id").get(quotesController.getQuoteById) 
                           .delete(quotesController.deleteQuote) ;                   


//TEST za custom QUery

quotesRouter.route("/custom/query").get(quotesController.getQuotesCustomQuery) ;

 



export default quotesRouter ;