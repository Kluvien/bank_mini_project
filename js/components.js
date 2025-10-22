// Load sidebar and topbar components
function loadComponents() {
    // Load sidebar
    fetch('/includes/sidebar.html')
        .then(response => response.text())
        .then(data => {
            const sidebarContainer = document.getElementById('sidebar-container');
            if (sidebarContainer) {
                sidebarContainer.innerHTML = data;
                highlightActiveMenu();
            }
        })
        .catch(error => console.error('Error loading sidebar:', error));

    // Load topbar
    fetch('/includes/topbar.html')
        .then(response => response.text())
        .then(data => {
            const topbarContainer = document.getElementById('topbar-container');
            if (topbarContainer) {
                topbarContainer.innerHTML = data;
                initializeSidebar();
            }
        })
        .catch(error => console.error('Error loading topbar:', error));
}

// Highlight active menu based on current page
function highlightActiveMenu() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.sidebar .nav-item');
    
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') === currentPath) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize sidebar toggle functionality
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

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
});
