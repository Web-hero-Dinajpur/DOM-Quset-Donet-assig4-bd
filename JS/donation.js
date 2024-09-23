document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();

    const NewDontaion = getDonationById('input-donate');
    console.log(NewDontaion);

    const CurrentTextDonation = getDonationTextId('Current-Donate');
    console.log(CurrentTextDonation);
})