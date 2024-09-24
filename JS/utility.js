function getDonationById(id) {
    const InputDonate = document.getElementById(id).value;
    const DonateValue = parseFloat(InputDonate); 
    return DonateValue;
    
}

function getDonationTextId(id) {
    const CurrentDonation = document.getElementById(id).innerText;
    const currentText = parseFloat(CurrentDonation);  
    return currentText;
}

function ShowSectionById(id){
    // all section hidden 
    document.getElementById('add-Donation-section').classList.add('hidden');
    document.getElementById('add-history-section').classList.add('hidden');

    // section show by click in btn 
    document.getElementById(id).classList.remove('hidden');
}
