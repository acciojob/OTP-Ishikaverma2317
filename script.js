// Select all OTP input fields
const codes = document.querySelectorAll('.code');

// Focus the first input automatically when the page loads
codes[0].focus();

codes.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    // Only allow numbers
    if (!/^[0-9]$/.test(value)) {
      e.target.value = ''; // Clear invalid input
      return;
    }

    // Move to next input automatically
    if (value !== '' && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    // Handle backspace key
    if (e.key === 'Backspace') {
      if (e.target.value === '' && index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = ''; // Clear previous box
      } else {
        e.target.value = ''; // Clear current box
      }
    }
  });
});
