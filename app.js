// increase and decrease amount

function handleTicketNumber(ticket, increase){
    let ticketCount = getInputValue(ticket);

    let newTicket = ticketCount;
    if(increase == true){
        newTicket = ticketCount + 1;
    }

    if(increase == false  && ticketCount > 0){
        newTicket = ticketCount - 1;
    }

    document.getElementById(ticket + '-ticket').value = newTicket;
    
    totalCost();
    
    

}

// total cost

function totalCost(){
    let firstClassTicket = getInputValue('firstClass');
    let economyClassTicket = getInputValue('economyClass');

    let totalPrice = firstClassTicket * 150 + economyClassTicket * 100;
    document.getElementById('sub-Total').innerText = totalPrice;

    let tax = totalPrice * 0.1;
    document.getElementById('tax').innerText = tax;

    let totalAmount = totalPrice + tax;
    document.getElementById('total-Amount').innerText = totalAmount;
}

function getInputValue(ticket){
    let ticketInput = document.getElementById(ticket + '-ticket');
    let ticketCount = parseInt(ticketInput.value);

    return ticketCount;
}

// modal

var modalBg = document.querySelector('.modal-bg');

document.querySelector('.btn-style').addEventListener('click', function(){
  modalBg.classList.add('open');
})
document.querySelector('.close-modal').addEventListener('click', function(){
  modalBg.classList.remove('open');
})