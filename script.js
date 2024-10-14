// Sample JavaScript to simulate resource search functionality

function searchResources() {
    const searchBar = document.getElementById("searchBar").value;
    const resourceResults = document.getElementById("resourceResults");

    if (searchBar.trim() === "") {
        resourceResults.innerHTML = "<p>Please enter a search term.</p>";
    } else {
        // Simulated search result
        resourceResults.innerHTML = `<p>Results for "${searchBar}":</p>
            <ul>
                <li>Emergency Shelter at ABC School, 2 km away</li>
                <li>Food Distribution Center at XYZ Park, 3 km away</li>
                <li>Medical Aid available at DEF Hospital, 4 km away</li>
            </ul>`;
    }
}
// Function to make an emergency call to the entered phone number
function makeEmergencyCall() {
    const contactName = document.getElementById("contactName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const callStatus = document.getElementById("callStatus");

    if (contactNumber.trim() === "") {
        callStatus.innerHTML = "Please enter a valid phone number.";
        callStatus.style.color = "red";
    } else {
        // Create a clickable link to make the call
        const callLink = `tel:${contactNumber}`;
        window.location.href = callLink;
        callStatus.innerHTML = `Calling ${contactName || "the contact"}...`;
        callStatus.style.color = "green";
    }
}
// Toggle the mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});