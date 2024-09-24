document.getElementById('btn-donate5').addEventListener('click', function(event){
    event.preventDefault();
    const NewDontaion = getDonationById('input-donate5');
    const CurrentTextDonation = getDonationTextId('Current-Donate5');

    if(NewDontaion <= 0 || isNaN(NewDontaion)){
        alert('Failed to your donation');
        return ; 
    }
    else{
        alert('CONGRATULATION SUCCESS YOUR DONATION');
    }

    const currentNewDonate = NewDontaion + CurrentTextDonation;
    document.getElementById('Current-Donate5').innerText = currentNewDonate;

    const title = document.getElementById('title');

    const div = document.createElement('div');
    div.classList.add('bg-gray-100');
    div.innerHTML = `
 <h4 class="text-xl p-6 border text-gray-500">${NewDontaion} ${title}</h4>
    <p class="text-xs p-2 border mb-4 text-gray-500">${new Date().toLocaleString()}</p>`

    document.getElementById('history-report').appendChild(div);
})