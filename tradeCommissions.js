function tradeCommissions(input) {
    let town = input[0];
    let sells = Number(input[1]);

    let comissions = 0;    

    switch (town) {
        case "Sofia":
            if (sells < 0) {
                console.log("error");
            } else if (sells >= 0 && sells <= 500) {
                comissions = 0.05;
                console.log((sells * comissions).toFixed(2));
            } else if (sells > 500 && sells <= 1000) {
                comissions = 0.07;
                console.log((sells * comissions).toFixed(2));
            } else if (sells > 1000 && sells <= 10000) {
                comissions = 0.08;
                console.log((sells * comissions).toFixed(2));
            } else {
                comissions = 0.12;
                console.log((sells * comissions).toFixed(2));
            }
            break;

        case "Varna":
            if (sells < 0) {
                console.log("error");
            } else if (sells >= 0 && sells <= 500) {
                comissions = 0.045;
                console.log((sells * comissions).toFixed(2));
            } else if (sells > 500 && sells <= 1000) {
                comissions = 0.075;
                console.log((sells * comissions).toFixed(2));
            } else if (sells > 1000 && sells <= 10000) {
                comissions = 0.10;
                console.log((sells * comissions).toFixed(2));
            } else {
                comissions = 0.13;
                console.log((sells * comissions).toFixed(2));
            }
            break;

        case "Plovdiv":
            if (sells < 0) {
                console.log("error");
            } else if (sells >= 0 && sells <= 500) {
                comissions = 0.055;
                console.log((sells * comissions).toFixed(2));
            } else if (sells > 500 && sells <= 1000) {
                comissions = 0.08;
                console.log((sells * comissions).toFixed(2));
            } else if (sells > 1000 && sells <= 10000) {
                comissions = 0.12;
                console.log((sells * comissions).toFixed(2));
            } else {
                comissions = 0.145;
                console.log((sells * comissions).toFixed(2));
            }
            break;
            default:
                console.log("error");
    }

}

tradeCommissions(["tutre", "15000"])