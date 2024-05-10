let jumlahBasoAci = 0;
let jumlahSosisSolo = 0;
let jumlahMojito = 0;
let selectedMojitoVariants = [];
let jumlahSodalicious = 0;

function plusButtonBaso() {
    jumlahBasoAci++;
    document.getElementById("inputNilaiBaso").value = jumlahBasoAci;
    document.getElementById("isiPesananHargaTombolValueBaso").innerText = jumlahBasoAci;
}

function minusButtonBaso() {
    if (jumlahBasoAci > 0) {
        jumlahBasoAci--;
        document.getElementById("isiPesananHargaTombolValueBaso").innerText = jumlahBasoAci;
        document.getElementById("inputNilaiBaso").value = jumlahBasoAci;
    }
}

function plusButtonSosis() {
    jumlahSosisSolo++;
    document.getElementById("inputNilaiSosis").value = jumlahSosisSolo;
    document.getElementById("isiPesananHargaTombolValueSosis").innerText = jumlahSosisSolo;
}

function minusButtonSosis() {
    if (jumlahSosisSolo > 0) {
        jumlahSosisSolo--;
        document.getElementById("isiPesananHargaTombolValueSosis").innerText = jumlahSosisSolo;
        document.getElementById("inputNilaiSosis").value = jumlahSosisSolo;
    }
}

function plusButtonMojito() {
    jumlahMojito++;
    document.getElementById("isiPesananHargaTombolValueMojito").innerText = jumlahMojito;
    updateMojitoInput();
}

function minusButtonMojito() {
    if (jumlahMojito > 0) {
        jumlahMojito--;
        document.getElementById("isiPesananHargaTombolValueMojito").innerText = jumlahMojito;
        updateMojitoInput();
    }
}

function plusButtonSoda() {
    jumlahSodalicious++;
    document.getElementById("inputNilaiSoda").value = jumlahSodalicious;
    document.getElementById("isiPesananHargaTombolValueSoda").innerText = jumlahSodalicious;
}

function minusButtonSoda() {
    if (jumlahSodalicious > 0) {
        jumlahSodalicious--;
        document.getElementById("isiPesananHargaTombolValueSoda").innerText = jumlahSodalicious;
        document.getElementById("inputNilaiSoda").value = jumlahSodalicious;
    }
}

function handleCheckboxClick(variantId) {
    const checkbox = document.getElementById(variantId);
    const checkboxes = document.querySelectorAll('.majito');
    checkboxes.forEach((box) => {
        if (box.id !== variantId) {
            box.checked = false;
        }
    });
    if (checkbox.checked) {
        selectedMojitoVariants.push(checkbox.nextElementSibling.textContent.trim());
    } else {
        selectedMojitoVariants = selectedMojitoVariants.filter(variant => variant !== checkbox.nextElementSibling.textContent.trim());
    }
    updateMojitoInput();
} 

function updateMojitoInput() {
    const inputValue = jumlahMojito + (selectedMojitoVariants.length > 0 ? ' ' + selectedMojitoVariants.join(', ') : '');
    document.getElementById("inputNilaiMojito").value = inputValue;
}

function redirect() {
    setTimeout(function() {
        alert("Pesanan terkirim, silahkan tunggu pesan Whatsapp dari kami :)");
        window.location.href = "index.html"; 
    }, 1000);
}

window.addEventListener("DOMContentLoaded", function() { const formPemesanan = document.getElementById('pemesanan'); formPemesanan.addEventListener("submit", function(e) { e.preventDefault(); const data = new FormData(formPemesanan); const action = e.target.action; fetch(action, { method: 'POST', body: data, }) .then(() => { window.location.replace('https://warung-sijawa.vercel.app/') }) }) }); 