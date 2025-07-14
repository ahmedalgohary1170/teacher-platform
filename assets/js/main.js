document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('mobile-menu-icon');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            } else {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            }
        });
    }

    // Login Page Tabs
    const studentTab = document.getElementById('student-tab');
    const teacherTab = document.getElementById('teacher-tab');
    const studentForm = document.getElementById('student-form');
    const teacherForm = document.getElementById('teacher-form');

    if (studentTab && teacherTab) {
        studentTab.addEventListener('click', () => {
            studentTab.classList.add('tab-active');
            studentTab.classList.remove('tab-inactive', 'text-gray-500');
            teacherTab.classList.add('tab-inactive', 'text-gray-500');
            teacherTab.classList.remove('tab-active');
            studentForm.classList.remove('hidden');
            teacherForm.classList.add('hidden');
        });

        teacherTab.addEventListener('click', () => {
            teacherTab.classList.add('tab-active');
            teacherTab.classList.remove('tab-inactive', 'text-gray-500');
            studentTab.classList.add('tab-inactive', 'text-gray-500');
            studentTab.classList.remove('tab-active');
            teacherForm.classList.remove('hidden');
            studentForm.classList.add('hidden');
        });
    }
});
