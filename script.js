const mode = document.getElementById('mode_icon');

// Show Password Check box //
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password-checkbox');

showPasswordCheckbox.addEventListener('change', function() {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});