document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();

    const NewDontaion = getDonationById('input-donate');
    const CurrentTextDonation = getDonationTextId('Current-Donate');
    const currentNewDonate = NewDontaion + CurrentTextDonation;
    document.getElementById('Current-Donate').innerText = currentNewDonate;

    
    if(isNaN(NewDontaion)){
        alert('Failed to your donation');
        return ; 
    }
    if(NewDontaion <= 0){
        alert('Negative number')
        return ;
    }

})