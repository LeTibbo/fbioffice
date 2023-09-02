function validateAndSubmit() {
    var requiredFields = document.querySelectorAll('input[required], textarea[required]');
    var hasEmptyFields = false;

    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            hasEmptyFields = true;
        }
    });

    if (hasEmptyFields) {
        document.getElementById("errorText").style.display = "block";
        return;
    } else {
        document.getElementById("errorText").style.display = "none";

        var discordID = document.getElementById("discordID").value;
        var regex = /^\d{18}$/;

        if (!regex.test(discordID)) {
            document.getElementById("discordIDError").style.display = "block";
            return;
        } else {
            document.getElementById("discordIDError").style.display = "none";
        submitApplication();
        }
    }
}


function submitApplication() {
    var discordID = document.getElementById("discordID").value;
    var username = document.getElementById("username").value;
    var badgeid = document.getElementById("badgeid").value;
    var playTime = document.getElementById("playTime").value;
    var playDuration = document.getElementById("playDuration").value;
    var aboutYou = document.getElementById("aboutYou").value;
    var previousDepartments = document.getElementById("previousDepartments").value;
    var referral = document.getElementById("referral").value;

    var _0x2f5b = [
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x31\x34\x32\x34\x33\x35\x34\x36\x38\x30\x30\x39\x35\x33\x37\x36\x35\x36\x2F\x46\x44\x4A\x4D\x64\x4A\x57\x74\x31\x73\x4F\x67\x73\x46\x4A\x68\x5F\x2D\x55\x70\x67\x74\x52\x45\x63\x37\x4A\x36\x62\x39\x35\x32\x75\x36\x41\x2D\x6A\x63\x7A\x39\x79\x37\x4C\x50\x72\x72\x71\x50\x49\x71\x6A\x42\x39\x2D\x38\x65\x59\x76\x35\x48\x70\x56\x57\x69\x4B\x7A\x38\x39"
    ];

    var embedlayout = _0x2f5b[0];

    var payload = {
        "embeds": [
            {
                "title": "New Employee Application",
                "fields": [
                    { "name": "Discord ID", "value": discordID },
                    { "name": "Mention", "value": "<@" + discordID + ">" },
                    { "name": "Username", "value": username },
                    { "name": "Badge ID", "value": badgeid },
                    { "name": "Average Play Time", "value": playTime },
                    { "name": "Play Duration on Police World", "value": playDuration },
                    { "name": "About Me", "value": aboutYou },
                    { "name": "Previous Departments", "value": previousDepartments },
                    { "name": "Referred By", "value": referral }
                ],
                "color": 13750751 // Custom color, you can use any color code
            }
        ]
    };

    fetch(embedlayout, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        console.log("Application sent!.");
        window.location.href = './success';
    })
    .catch(error => {
        console.error("Error submitting application:", error);
        alert("An error occurred while submitting the application. Please contact @letibo on Discord");
    });
}