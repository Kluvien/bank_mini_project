// PayPak Application

document.addEventListener('DOMContentLoaded', function() {
    console.log('PayPak App Loaded');
    initializeSidebar();
    initializeCharts();
});

function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarToggleTop = document.getElementById('sidebarToggleTop');
    const sidebar = document.getElementById('accordionSidebar');
    
    // Desktop sidebar toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('toggled');
        });
    }
    
    // Mobile sidebar toggle
    if (sidebarToggleTop) {
        sidebarToggleTop.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !sidebarToggleTop.contains(e.target)) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        }
    });
    
    // Close sidebar when clicking on a menu item (mobile)
    const sidebarLinks = sidebar.querySelectorAll('.nav-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
    });
}

function initializeCharts() {
    const transactionCtx = document.getElementById('transactionChart');
    if (transactionCtx && typeof Chart !== 'undefined') {
        new Chart(transactionCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt'],
                datasets: [{
                    label: 'Pemasukan',
                    data: [4200, 5100, 6000, 5800, 6200, 5900, 6500, 5400, 6000, 5400],
                    borderColor: '#1cc88a',
                    tension: 0.3
                }, {
                    label: 'Pengeluaran',
                    data: [3000, 2900, 3500, 3200, 2800, 3100, 3400, 2900, 3300, 3200],
                    borderColor: '#e74a3b',
                    tension: 0.3
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true
            }
        });
    }

    const categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx && typeof Chart !== 'undefined') {
        new Chart(categoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Makanan', 'Transport', 'Belanja', 'Lainnya'],
                datasets: [{
                    data: [35, 25, 30, 10],
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e']
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true
            }
        });
    }
}

function showTransfer() {
    alert('Fitur Transfer akan segera hadir!');
}

function showDeposit() {
    alert('Fitur Setor Tunai akan segera hadir!');
}

function showWithdraw() {
    alert('Fitur Tarik Tunai akan segera hadir!');
}

function showHistory() {
    alert('Fitur Riwayat Transaksi akan segera hadir!');
}

function showSettings() {
    alert('Fitur Pengaturan akan segera hadir!');
}

function logout() {
    if(confirm('Apakah Anda yakin ingin keluar?')) {
        alert('Logout berhasil!');
        window.location.href = 'views/login.html';
    }
}
