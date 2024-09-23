document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const NewDontaion = getDonationById('input-donate');
    const totalDonate = getDonationTextId('Current');
    const NewTotalDonat = totalDonate - NewDontaion;
    
    document.getElementById("Current").innerText = NewTotalDonat;
})