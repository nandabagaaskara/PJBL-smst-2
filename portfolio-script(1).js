// ===== HAMBURGER MENU =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// ===== FORM =====
const form = document.getElementById("biodata-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ambil data
        const nama = document.getElementById("nama-lengkap").value.trim();
        const tempatLahir = document.getElementById("tempat-lahir").value.trim();
        const tanggalLahir = document.querySelector('input[name="tgl_lahir"]').value;
        const email = document.querySelector('input[name="email"]').value.trim();
        const password = document.getElementById("password").value;
        const alamat = document.getElementById("story").value.trim();
        const agama = document.getElementById("agama").value;
        const telepon = document.getElementById("Telepon").value.trim();

        const jk = document.querySelector('input[name="jk"]:checked');

        const hobi = document.querySelectorAll(
            '#form input[type="checkbox"]:checked'
        );

        // ===== VALIDASI =====
        if (
            nama === "" ||
            alamat === "" ||
            tempatLahir === "" ||
            tanggalLahir === "" ||
            email === "" ||
            password === "" ||
            agama === "" ||
            telepon === "" ||
            !jk ||
            hobi.length === 0
        ) {
            alert("Semua form wajib diisi!");
            return;
        }

        // Ambil hobi
        let daftarHobi = [];

        hobi.forEach(function(item) {
            daftarHobi.push(
                item.parentElement.textContent.trim()
            );
        });

        // Password jadi bintang
        const passwordBintang = "*".repeat(password.length);

        // Container hasil
        const dataContainer = document.querySelector(".data-container");

        if (!dataContainer) {
            alert("Container output tidak ditemukan!");
            return;
        }

        // Buat kotak hasil
        const kotak = document.createElement("div");
        kotak.classList.add("kotak-data");

        kotak.innerHTML = `
            <h3>Data Yang Dikirim</h3>

            <p><strong>Nama Lengkap:</strong> ${nama}</p>
            <p><strong>Alamat:</strong> ${alamat}</p>
            <p><strong>Tempat Lahir:</strong> ${tempatLahir}</p>
            <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${passwordBintang}</p>
            <p><strong>Jenis Kelamin:</strong> ${jk.nextSibling.textContent.trim()}</p>
            <p><strong>Hobi:</strong> ${daftarHobi.join(", ")}</p>
            <p><strong>Agama:</strong> ${agama}</p>
            <p><strong>No Telepon:</strong> ${telepon}</p>
        `;

        // Tambahkan hasil
        dataContainer.appendChild(kotak);

        alert("Data berhasil dikirim!");

        // Reset form
        form.reset();

        // Scroll ke hasil
        kotak.scrollIntoView({
            behavior: "smooth"
        });
    });
}