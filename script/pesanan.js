let jumlahBasoAci = 0;
let jumlahSosisSolo = 0;
let jumlahMojito = 0;
let selectedMojitoVariants = [];
let jumlahSodalicious = 0;

function plusButtonBaso() {
    jumlahBasoAci++;
    let nilaiBaso = document.getElementById("isiPesananHargaTombolValueBaso").innerText;
    document.getElementById("inputNilaiBaso").value = nilaiBaso;
    document.getElementById("isiPesananHargaTombolValueBaso").innerText = jumlahBasoAci;
}

function minusButtonBaso() {
    if (jumlahBasoAci > 0) {
        jumlahBasoAci--;
        let nilaiBaso = document.getElementById("isiPesananHargaTombolValueBaso").innerText;
        document.getElementById("inputNilaiBaso").value = nilaiBaso;
        document.getElementById("isiPesananHargaTombolValueBaso").innerText = jumlahBasoAci;   
    }
}

function plusButtonSosis() {
    jumlahSosisSolo++;
    let nilaiSosis = document.getElementById("isiPesananHargaTombolValueSosis").innerText;
    document.getElementById("inputNilaiSosis").value = nilaiSosis;
    document.getElementById("isiPesananHargaTombolValueSosis").innerText = jumlahSosisSolo;
}

function minusButtonSosis() {
    if (jumlahSosisSolo > 0) {
        jumlahSosisSolo--;
        let nilaiSosis = document.getElementById("isiPesananHargaTombolValueSosis").innerText;
        document.getElementById("inputNilaiSosis").value = nilaiSosis;
        document.getElementById("isiPesananHargaTombolValueSosis").innerText = jumlahSosisSolo;
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
    let nilaiSoda = document.getElementById("isiPesananHargaTombolValueSoda").innerText;
    document.getElementById("inputNilaiSoda").value = nilaiSoda;
    document.getElementById("isiPesananHargaTombolValueSoda").innerText = jumlahSodalicious;
}

function minusButtonSoda() {
    if (jumlahSodalicious > 0) {
        jumlahSodalicious--;
        let nilaiSoda = document.getElementById("isiPesananHargaTombolValueSoda").innerText;
        document.getElementById("inputNilaiSoda").value = nilaiSoda;
        document.getElementById("isiPesananHargaTombolValueSoda").innerText = jumlahSodalicious;
    }
}

function handleCheckboxClick(variantId) {
    const checkbox = document.getElementById(variantId);
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