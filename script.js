function showSelectedSubject() {
  const dropdown = document.getElementById('subjectDropdown');
  const selectedSubject = dropdown.value;
  const contentDiv = document.getElementById('content');
  
    switch (selectedSubject) {
        case 'math':
            contentDiv.innerHTML = `
      <h2>Math Tutoring</h2>
      <p>We offer math tutoring services for various levels and topics.</p>
      <img src="images/math.jpg" alt="Math Image">
    `;
            break;
}
