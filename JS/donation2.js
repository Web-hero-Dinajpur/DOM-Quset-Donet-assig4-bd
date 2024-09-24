document.getElementById('btn-donate2').addEventListener('click', function(event){
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate2');
    const CurrentTextDonation = getDonationTextId('Current-Donate2');
    const currentNewDonate = NewDontaion + CurrentTextDonation;
    document.getElementById('Current-Donate2').innerText = currentNewDonate;


    const title = document.getElementById('title');

    if(isNaN(NewDontaion)){
        alert('Failed to your donation');
        return ; 
    }
    if(NewDontaion < 0){
        alert('Failed to your donation')
        return NewDontaion;
    }
    else{
        alert('CONGRATULATION SUCCESS YOUR DONATION');
    }
 
    const div = document.createElement('div');
    div.classList.add('bg-red-100');
    div.innerHTML = `
    <h4>${NewDontaion} ${title}</h4>`

    document.getElementById('history-report').appendChild(div);
})