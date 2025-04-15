// JavaScript to toggle between Login and Sign-Up forms for Admin
        const adminLoginForm = document.getElementById('admin-login-form');
        const adminSignupForm = document.getElementById('admin-signup-form');
        const showAdminSignup = document.getElementById('show-admin-signup');
        const showAdminLogin = document.getElementById('show-admin-login');

        showAdminSignup.addEventListener('click', (e) => {
            e.preventDefault();
            adminLoginForm.classList.add('hidden');
            adminSignupForm.classList.remove('hidden');
        });

        showAdminLogin.addEventListener('click', (e) => {
            e.preventDefault();
            adminSignupForm.classList.add('hidden');
            adminLoginForm.classList.remove('hidden');
        });

        // JavaScript to toggle between Login and Sign-Up forms for Student
        const studentLoginForm = document.getElementById('student-login-form');
        const studentSignupForm = document.getElementById('student-signup-form');
        const showStudentSignup = document.getElementById('show-student-signup');
        const showStudentLogin = document.getElementById('show-student-login');

        showStudentSignup.addEventListener('click', (e) => {
            e.preventDefault();
            studentLoginForm.classList.add('hidden');
            studentSignupForm.classList.remove('hidden');
        });

        showStudentLogin.addEventListener('click', (e) => {
            e.preventDefault();
            studentSignupForm.classList.add('hidden');
            studentLoginForm.classList.remove('hidden');
        });