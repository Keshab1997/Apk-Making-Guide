function copyCode(id) {
    var copyText = document.getElementById(id).innerText;
    
    navigator.clipboard.writeText(copyText).then(function() {
        // Find the button that was clicked
        // We look for buttons that call this function with this specific ID
        let btns = document.querySelectorAll(`button[onclick="copyCode('${id}')"]`);
        
        btns.forEach(btn => {
            let originalText = btn.innerText;
            // Change button text/icon temporarily
            if(btn.classList.contains('copy-token-btn')) {
                btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            } else {
                btn.innerText = "Copied!";
                btn.style.backgroundColor = "#22c55e"; // Green
            }

            // Revert back after 2 seconds
            setTimeout(() => {
                if(btn.classList.contains('copy-token-btn')) {
                    btn.innerHTML = '<i class="fas fa-copy"></i> Copy Token';
                } else {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "";
                }
            }, 2000);
        });

    }, function() {
        alert("কপি করতে সমস্যা হয়েছে!");
    });
}