
 document.getElementById('show-donation-section').addEventListener('click', function () {
     ShowSectionById('add-Donation-section');    
 })

 document.getElementById('show-history-section').addEventListener('click', function () {
     ShowSectionById('add-history-section');
 })


const donation = document.getElementById('show-donation-section');
const history = document.getElementById('show-history-section');

history.addEventListener('click', function () {
    history.classList.add(
        "bg-[#b4f461]",        
    );
    history.classList.remove("text-gray-600");
    donation.classList.remove(
        "bg-[#b4f461]",        
    );
    donation.classList.add("text-gray-600")
});
donation.addEventListener('click', function(){
    donation.classList.add(
        "bg-[#b4f461]",        
    );
    donation.classList.remove("text-gray-600");
    history.classList.remove(
        "bg-[#b4f461]",        
    );
    history.classList.add("text-gray-600")
})
