document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate');
    const totalDonate = getDonationTextId('Current-Balance');
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current-Balance").innerText = NewTotalDonat;
})

document.getElementById('btn-donate2').addEventListener('click', function (event) {
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate2');
    const totalDonate = getDonationTextId('Current-Balance');
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current-Balance").innerText = NewTotalDonat;
})