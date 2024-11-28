let currentSlideIndex = 0; // Indeks untuk melacak slide yang sedang ditampilkan
const slides = [
    '', // Konten untuk slide 1 tidak disimpan di sini, akan diatur manual
    `<div class="p-6 my-auto mx-auto">
        <div class="flex justify-center items-center mb-8">
            <img class="max-w-20 sm:max-w-32 me-4" src="./assets/image/cone.webp">
            <div>
                <div class="sm:text-2xl font-semibold">The website is</div>
                <div class="text-xl sm:text-4xl font-bold">under reconstruction</div>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:justify-center space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 mx-auto">
            <a class="button discord" href="https://mineforge.id/discord" title="Discord">
                <i aria-label="Discord" class="fa-brands fa-discord"></i> Discord
            </a>
            <a class="button instagram" href="https://instagram.com/agjuliawan" title="Instagram">
                <i aria-label="Instagram" class="fa-brands fa-instagram"></i> Instagram
            </a>
            <a class="button github" href="https://github.com/ZiwoxYT" title="Github">
                <i aria-label="Github" class="fa-brands fa-github"></i> GitHub
            </a>
        </div>
    </div>`,
    `<div class="p-6 my-auto mx-auto">
        <div class="flex justify-center items-center mb-8">
            <img class="max-w-20 sm:max-w-32 me-4" src="./assets/image/cone.webp">
            <div>
                <div class="sm:text-2xl font-semibold">The website is</div>
                <div class="text-xl sm:text-4xl font-bold">under reconstruction</div>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:justify-center space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 mx-auto">
            <a class="button discord" href="https://mineforge.id/discord" title="Discord">
                <i aria-label="Discord" class="fa-brands fa-discord"></i> Discord
            </a>
            <a class="button instagram" href="https://instagram.com/agjuliawan" title="Instagram">
                <i aria-label="Instagram" class="fa-brands fa-instagram"></i> Instagram
            </a>
            <a class="button github" href="https://github.com/ZiwoxYT" title="Github">
                <i aria-label="Github" class="fa-brands fa-github"></i> GitHub
            </a>
        </div>
    </div>`,
    `<div class="p-6 my-auto mx-auto">
        <div class="flex justify-center items-center mb-8">
            <img class="max-w-20 sm:max-w-32 me-4" src="./assets/image/cone.webp">
            <div>
                <div class="sm:text-2xl font-semibold">The website is</div>
                <div class="text-xl sm:text-4xl font-bold">under reconstruction</div>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:justify-center space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 mx-auto">
            <a class="button discord" href="https://mineforge.id/discord" title="Discord">
                <i aria-label="Discord" class="fa-brands fa-discord"></i> Discord
            </a>
            <a class="button instagram" href="https://instagram.com/agjuliawan" title="Instagram">
                <i aria-label="Instagram" class="fa-brands fa-instagram"></i> Instagram
            </a>
            <a class="button github" href="https://github.com/ZiwoxYT" title="Github">
                <i aria-label="Github" class="fa-brands fa-github"></i> GitHub
            </a>
        </div>
    </div>`,
    `<div class="p-6 my-auto mx-auto">
        <div class="flex justify-center items-center mb-8">
            <img class="max-w-20 sm:max-w-32 me-4" src="./assets/image/cone.webp">
            <div>
                <div class="sm:text-2xl font-semibold">The website is</div>
                <div class="text-xl sm:text-4xl font-bold">under reconstruction</div>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:justify-center space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 mx-auto">
            <a class="button discord" href="https://mineforge.id/discord" title="Discord">
                <i aria-label="Discord" class="fa-brands fa-discord"></i> Discord
            </a>
            <a class="button instagram" href="https://instagram.com/agjuliawan" title="Instagram">
                <i aria-label="Instagram" class="fa-brands fa-instagram"></i> Instagram
            </a>
            <a class="button github" href="https://github.com/ZiwoxYT" title="Github">
                <i aria-label="Github" class="fa-brands fa-github"></i> GitHub
            </a>
        </div>
    </div>`,
];


// Fungsi untuk toggle tema tetap sama
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('themeToggleButton');
    const leftArrow = document.getElementById('leftArrowButton');
    const rightArrow = document.getElementById('rightArrowButton');

    // Toggle dark mode and light mode on body
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update button appearance and icon
    if (body.classList.contains('dark-mode')) {
        button.classList.remove('light-mode');
        button.classList.add('dark-mode');
        button.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon

        // Update arrow button styles for dark mode
        leftArrow.classList.remove('light-mode');
        leftArrow.classList.add('dark-mode');
        rightArrow.classList.remove('light-mode');
        rightArrow.classList.add('dark-mode');
    } else {
        button.classList.remove('dark-mode');
        button.classList.add('light-mode');
        button.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon

        // Update arrow button styles for light mode
        leftArrow.classList.remove('dark-mode');
        leftArrow.classList.add('light-mode');
        rightArrow.classList.remove('dark-mode');
        rightArrow.classList.add('light-mode');
    }
}

// Fungsi untuk pindah ke slide berikutnya
function slideToNext() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateContent("next");
    }
}

// Fungsi untuk pindah ke slide sebelumnya
function slideToPrevious() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateContent("previous");
    }
}

// Fungsi untuk memperbarui konten berdasarkan arah slide
function updateContent(direction) {
    const content = document.getElementById('content');

    // Reset animasi sebelum menambah animasi baru
    content.classList.remove('slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right');

    // Tambah class animasi berdasarkan arah
    if (direction === "next") {
        content.classList.add('slide-out-left'); // Animasi keluar ke kiri
        setTimeout(() => {
            // Jika currentSlideIndex == 0, kita tampilkan konten asli halaman utama
            if (currentSlideIndex === 0) {
                loadMainContent(); // Fungsi untuk memulihkan halaman utama
            } else {
                content.innerHTML = slides[currentSlideIndex];
            }
            content.classList.remove('slide-out-left');
            content.classList.add('slide-in-right'); // Animasi masuk dari kanan
            toggleArrowVisibility(); // Update tampilan panah
        }, 500);
    } else {
        content.classList.add('slide-out-right'); // Animasi keluar ke kanan
        setTimeout(() => {
            if (currentSlideIndex === 0) {
                loadMainContent(); // Fungsi untuk memulihkan halaman utama
            } else {
                content.innerHTML = slides[currentSlideIndex];
            }
            content.classList.remove('slide-out-right');
            content.classList.add('slide-in-left'); // Animasi masuk dari kiri
            toggleArrowVisibility(); // Update tampilan panah
        }, 500);
    }

    // Pastikan arrow buttons tetap terlihat di atas konten selama animasi
    document.getElementById('leftArrowButton').style.zIndex = '1001';
    document.getElementById('rightArrowButton').style.zIndex = '1001';
}

// Fungsi untuk memulihkan halaman utama
function loadMainContent() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="p-6 my-auto mx-auto">
            <div class="flex justify-center items-center mb-8">
                <img class="max-w-20 sm:max-w-32 mx-auto" src="./assets/image/cone.webp" alt="Profile Image">
            </div>
            <div class="text-center mb-8">
                <div class="text-xl sm:text-4xl font-bold mb-1">Angga Juliawan</div>
                <div class="sm:text-3xl font-semibold">Informatics Engineering Student at INSTIKI | Learn Web Programming</div>
                <div class="sm:text-3xl font-semibold">Enthusiastic about the Latest Technology and Innovation</div>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-center space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 mx-auto">
                <a class="button discord" href="https://mineforge.id/discord" title="Discord">
                    <i aria-label="Discord" class="fa-brands fa-discord"></i> Discord
                </a>
                <a class="button instagram" href="https://instagram.com/agjuliawan" title="Instagram">
                    <i aria-label="Instagram" class="fa-brands fa-instagram"></i> Instagram
                </a>
                <a class="button github" href="https://github.com/ZiwoxYT" title="Github">
                    <i aria-label="Github" class="fa-brands fa-github"></i> GitHub
                </a>
            </div>
        </div>
    `;
}

// Fungsi untuk mengatur tampilan panah berdasarkan slide
function toggleArrowVisibility() {
    const leftArrow = document.getElementById('leftArrowButton');
    const rightArrow = document.getElementById('rightArrowButton');

    // Panah kiri tidak muncul di slide pertama
    if (currentSlideIndex === 0) {
        leftArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'flex'; // Muncul di slide kedua dan seterusnya
    }

    // Panah kanan tidak muncul di slide terakhir
    if (currentSlideIndex === slides.length - 1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'flex'; // Muncul di slide sebelum terakhir
    }
}

// Add event listeners for the buttons
document.getElementById('themeToggleButton').addEventListener('click', toggleTheme);
document.getElementById('rightArrowButton').addEventListener('click', slideToNext);
document.getElementById('leftArrowButton').addEventListener('click', slideToPrevious);

// Atur tampilan panah pada saat halaman dimuat
toggleArrowVisibility();
