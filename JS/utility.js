function getDonationById(id){
    const InputDonate = document.getElementById(id).value;
    const DonateValue = parseFloat(InputDonate);
    return DonateValue;
}

function getDonationTextId(id){
    const CurrentDonation = document.getElementById(id).innerText;
    const currentText = parseFloat(CurrentDonation);
    return currentText;
}