document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate');
    const totalDonate = getDonationTextId('Current-Balance');
    if(NewDontaion <= 0 || isNaN(NewDontaion)){
        return ; 
    }
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current-Balance").innerText = NewTotalDonat;
})

document.getElementById('btn-donate2').addEventListener('click', function (event) {
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate2');
    const totalDonate = getDonationTextId('Current-Balance');
    if(NewDontaion <= 0 || isNaN(NewDontaion)){
        return ; 
    }
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current-Balance").innerText = NewTotalDonat;
})

document.getElementById('btn-donate3').addEventListener('click', function (event) {
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate3');
    const totalDonate = getDonationTextId('Current-Balance');
    if(NewDontaion <= 0 || isNaN(NewDontaion)){
        return ; 
    }
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current-Balance").innerText = NewTotalDonat;
})

document.getElementById('btn-donate4').addEventListener('click', function (event) {
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate4');
    const totalDonate = getDonationTextId('Current-Balance');
    if(NewDontaion <= 0 || isNaN(NewDontaion)){
        return ; 
    }
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current-Balance").innerText = NewTotalDonat;
})

document.getElementById('btn-donate5').addEventListener('click', function (event) {
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate5');
    const totalDonate = getDonationTextId('Current-Balance');
    if(NewDontaion <= 0 || isNaN(NewDontaion)){
        return ; 
    }
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current-Balance").innerText = NewTotalDonat;
})

document.getElementById('btn-donate6').addEventListener('click', function (event) {
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate6');
    const totalDonate = getDonationTextId('Current-Balance');
    if(NewDontaion <= 0 || isNaN(NewDontaion)){
        return ; 
    }
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current-Balance").innerText = NewTotalDonat;
})