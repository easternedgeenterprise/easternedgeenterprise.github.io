function askQuote(product){

let phone = "919875421001";

let message = "Hi, I would like to know the price for " + product;

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");

}
