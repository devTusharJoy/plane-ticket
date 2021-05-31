function handleTicketNumber(ticket, increase){
    let ticketInput = document.getElementById(ticket + '-ticket');
    let ticketCount = parseInt(ticketInput.value);

    let newCount = ticketCount;
    if(increase == true){
        newCount = ticketCount + 1;
    }

    if(increase == false  && ticketCount > 0){
        newCount = ticketCount - 1;
    }

    ticketInput.value = newCount;

}

