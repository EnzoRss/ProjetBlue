const request = require("./request");
let FunctionApp = function FunctionAPP(list_event,nbr_tour,choix_cons,data,type){
    if (nbr_tour % 2 === 0) {
        let nb_event
        while (true) {
            let verif = 0;
            nb_event = Math.floor(Math.random() * (9 - 1) + 1)
            for (let i = 0; i < list_event.length; i++) {
                if (nb_event !== list_event[i]) {
                    verif++
                }
            }
            if (verif === list_event.length){
                break;
            }
        }
        list_event.push()
        console.log(nb_event)
        type = "event"
        console.log("ajout event")
        if( nbr_tour === (2 +(8/3))){
            type.event = "marchand"

        } else {
            data.Data = request.event(nb_event)
        }
    } else {
        type = "consequence"
        data.Data=request.cons(list_event[(nbr_tour/2)],choix_cons)
    }
    data.type = type
    console.log("Data" + JSON.stringify(data))

    return list_event,nbr_tour,choix_cons,data;
}


module.exports = {FunctionApp}