document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validation
    const name = document.getElementById('adminName').value.trim();
    const phone = document.getElementById('adminPhone').value.trim();
    const email = document.getElementById('adminEmail').value.trim();

    if (!name || !phone || !email) {
        alert('Please fill in all required fields');
        return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    const newUpdate = {
        title: name,
        phone: phone,
        email: email,
        hours: document.getElementById('officeHours').value.trim(),
        location: document.getElementById('officeLocation').value.trim(),
    };

    // Save to adminUpdates array
    const updates = JSON.parse(localStorage.getItem('adminUpdates')) || [];
    updates.push(newUpdate);

    localStorage.setItem('adminUpdates', JSON.stringify(updates));
    alert('Contact information updated successfully!');
    this.reset();
});

// Load function (Optional for form auto-fill)
function loadContactInfo() {
    const savedData = JSON.parse(localStorage.getItem('adminUpdates')) || [];
    if (savedData.length > 0) {
        const latestUpdate = savedData[savedData.length - 1]; // Load last entry
        document.getElementById('adminName').value = latestUpdate.title || '';
        document.getElementById('adminPhone').value = latestUpdate.phone || '';
        document.getElementById('adminEmail').value = latestUpdate.email || '';
        document.getElementById('officeHours').value = latestUpdate.hours || '';
        document.getElementById('officeLocation').value = latestUpdate.location || '';
    }
}

window.addEventListener('load', loadContactInfo);
