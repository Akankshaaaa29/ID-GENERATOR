// script.js file

const images = ["Sailor Failures.gif", "Fuck Yeah Pixels!.gif", "output-onlinegiftools.gif", "snorlax.gif", "Hamster-Hamtaro-Sticker-Hamste-unscreen.gif", "YetAnotherPixelArtist.gif"];
const selectedPetImages = ["sailor venus.jpg", "My Neighbor Totoro icons ----_ like _ reblog if you use or save.jpg", "🌷.jpg", "download (11).jpg","download (12).jpg","download (24).png"];
let currentIndex = 0;

function updateImage() {
    const petImage = document.getElementById("petImage");
    petImage.src = images[currentIndex];
}


function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previous() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function select() {
    const selectedPetImageSrc = selectedPetImages[currentIndex];
    localStorage.setItem("selectedImageIndex", currentIndex);
    document.getElementById("makeIdButton").disabled = false;
}
function makeid(){
    const newPageURL = 'index1.html';
    window.location.href = newPageURL;
}

window.addEventListener("DOMContentLoaded", () => {
    const selectedImageIndex = localStorage.getItem("selectedImageIndex");
    if (selectedImageIndex !== null) {
        const selectedPetImages = ["sailor venus.jpg", "My Neighbor Totoro icons ----_ like _ reblog if you use or save.jpg", "🌷.jpg", "download (11).jpg","download (12).jpg","download (24).png"];
        const selectedImageSrc = selectedPetImages[selectedImageIndex];
        if (selectedImageSrc !== "") {
            const selectedImage = document.getElementById("selected");
            selectedImage.src = selectedImageSrc;
        }
    }
});


function saveIDCard() {
    // Get user inputs
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;

    // Create a canvas to draw the ID card
    const canvas = document.createElement("canvas");
    canvas.width = 500; // Set the canvas size according to the card size in HTML
    canvas.height = 300; // Set the canvas size according to the card size in HTML
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#F2F3F4";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the border with spacing
    ctx.strokeStyle = "#23395D";
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // Load the stamp image
    const stampImage = new Image();
    stampImage.src = "Sign_in-removebg-preview.png";
    stampImage.onload = () => {
        const stampPositionX = canvas.width - stampImage.width + 180;
        const stampPositionY = canvas.height - stampImage.height +250;
        ctx.drawImage(stampImage, stampPositionX, stampPositionY, 200, 200);

        // Draw the ID card content with smaller font size
        ctx.font = " 20px 'Gaegu', cursive";
        ctx.fillStyle = "#000";
        ctx.fillText("Name: " + name, 40, 80);
        ctx.fillText("Date of Birth: " + dob, 40, 120);
        ctx.fillText("Age: " + age, 40, 160);
        ctx.fillText("Address: " + address, 40, 200);

        // Load the decorative border image
        const borderimg = new Image();
        borderimg.src = "uwu (3).png";
        borderimg.onload = () => {
            const borderimgX = canvas.width - borderimg.width -150;
            const borderimgY = canvas.height - borderimg.height +210;
            ctx.drawImage(borderimg, borderimgX, borderimgY,100,100);

            // Get the selected character image
            const selectedImageIndex = localStorage.getItem("selectedImageIndex");
            const selectedImageSrc = selectedPetImages[selectedImageIndex];
            const characterImage = new Image();
            characterImage.src = selectedImageSrc;

            // Draw the character image on the ID card
            characterImage.onload = () => {
                ctx.drawImage(characterImage, 360, 30, 100, 100); // Adjust the position and size of the character image on the card

                // Convert the canvas to a PNG image
                const dataUrl = canvas.toDataURL("image/png");

                // Create a link to download the PNG image
                const downloadLink = document.createElement("a");
                downloadLink.href = dataUrl;
                downloadLink.download = "character_id.png";
                downloadLink.click();

                // Clear local storage and disable the Make ID button
                localStorage.removeItem("selectedImageIndex");
                document.getElementById("makeIdButton").disabled = true;
            };
        };
    };
}









    
    







