//Variable
const estudiante = 0.2,
    trainee = 0.5,
    junior = 0.85;

//Update Cards according to discount
document.querySelector("#estudiantDiscount").textContent = "80%";
document.querySelector("#traineeDiscount").textContent = "50%";
document.querySelector("#juniorDiscount").textContent = "15%";

// Eventos

//Button Borrar formulario
document.querySelector("#borrar").addEventListener("click", function () {
    document.querySelector("#form").reset();
    console.log("clear form");
})

//Button Resumen
document.querySelector("#resumen").addEventListener("click", function () {

    let discount = getTicketDiscount()
    console.log(discount);
    let quantity = document.querySelector("#quantity").value;
    let price = 200 * quantity * discount;
    document.querySelector("#payment").value = `Total a pagar: $${price}` ;
})




//Funciones
// discount = getTicketDiscount()

function getTicketDiscount() {
    let discountValue = document.querySelector("#category").value;

    switch (discountValue) {
        case "estudiante": return estudiante;
            break;
        case "trainee": return trainee;
            break;
        case "junior": return junior;
            break;
    }
}