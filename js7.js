// code kite bole run kat web
window.addEventListener("load", function() {
    // sume gmbo kecik ade
    var thumbs = document.getElementById("thumbnails");

    // Pastikan thumbnails ade
    if (!thumbs) return;

    // Event delegation untuk klik pada gambar kecil
    thumbs.addEventListener("click", function(e) {
        if (e.target.tagName.toLowerCase() === 'img') {

            // Cari main gmbo dan overlay
            var featuredImage = document.querySelector("#featured img");
            var overlayText = document.querySelector("#featured .overlay");

            // Tukar main gmbo dan teks overlay to gmbo kecik
            featuredImage.src = e.target.src;
            featuredImage.alt = e.target.alt;
            overlayText.textContent = e.target.alt;
        }
    });
});
