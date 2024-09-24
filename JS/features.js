
document.getElementById('show-donation-section').addEventListener('click', function () {
    const bg = document.getElementById('show-donation-section');
    bg.style.backgroundColor= '#B4F461';
    ShowSectionById('add-Donation-section');    
})

document.getElementById('show-history-section').addEventListener('click', function () {
    const bg = document.getElementById('show-history-section');
    bg.style.backgroundColor = '#B4F461';
    ShowSectionById('add-history-section');
})