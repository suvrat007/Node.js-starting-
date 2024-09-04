function generateRandomNum(){
    return Math.floor(Math.random() * 100 + 1);
}
function celciusToFaran(celcius){
    return (celcius *9) /5 + 32;
}
module.export = {
    generateRandomNum,
    celciusToFaran
};