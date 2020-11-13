import serverInstace from "./app";
// samo strtuje serverski program


console.log(__dirname) ;

serverInstace.listen(3000, (err) =>
 {
    if(err) {
        console.log("error while starting server");
    }

    else{
        console.log("server started at port 3000")}

/*4 osnovna tipa zahtjeva GET,POST<DELETE,Put  */
    })  