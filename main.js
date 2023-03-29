// Get DOM elements
const sidebarTrigger = document.querySelector('.sidebar-trigger');
const sidebarClose = document.querySelector('.sidebar-close');
const sidebarMenu = document.querySelector('.sidebar__menu');
const sidebarBackdrop = document.querySelector('.sidebar__backdrop');

const showSidebar = () => {
    // Add CSS class to show sidebar backdrop
    sidebarBackdrop.classList.add('sidebar__backdrop--show');
    // Add CSS class to show the sidebar menu
    sidebarMenu.classList.add('sidebar__menu--show');
};

const hideSidebar = () => {
    // Remove CSS class to show sidebar backdrop
    sidebarBackdrop.classList.remove('sidebar__backdrop--show');
    // Remove CSS class to show the sidebar menu
    sidebarMenu.classList.remove('sidebar__menu--show');
};

// Add click event listener to sidebar trigger button to display sidebar menu
sidebarTrigger.addEventListener('click', showSidebar);

// Add click event to sidebar backdrop to close the sidebar menu
sidebarBackdrop.addEventListener('click', hideSidebar);

// Add click event to sidebar close button to close the sidebar menu
sidebarClose.addEventListener('click', hideSidebar);

// Add resize window event to close the sidebar when the window is at a certain length
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        hideSidebar();
    }
})