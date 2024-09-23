document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();

    const NewDontaion = getDonationById('input-donate');
    const CurrentTextDonation = getDonationTextId('Current-Donate');
    const currentNewDonate = NewDontaion + CurrentTextDonation;
    document.getElementById('Current-Donate').innerText = currentNewDonate;

    const NewDontaion2 = getDonationById('input-donate2');
    const CurrentTextDonation2 = getDonationTextId('Current-Donate2');
    const currentNewDonate2 = NewDontaion2 + CurrentTextDonation2;
    console.log(currentNewDonate);
    document.getElementById('Current-Donate2').innerText = currentNewDonate2;

    if(isNaN(NewDontaion)){
        alert('Failed to your donation');
        return ; 
    }
    if(NewDontaion <= 0){
        alert('Negative number')
        return ;
    }

})