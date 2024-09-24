document.getElementById('btn-donate6').addEventListener('click', function(event){
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate6');
    const CurrentTextDonation = getDonationTextId('Current-Donate6');
    const currentNewDonate = NewDontaion + CurrentTextDonation;
    document.getElementById('Current-Donate6').innerText = currentNewDonate;


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
    <h4 class="text-xl text-gray-500">${NewDontaion} ${title}</h4>
    <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>`

    document.getElementById('history-report').appendChild(div);
})