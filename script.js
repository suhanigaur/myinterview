function getStarted() {
    alert("Welcome! Let's prepare for your interviews.");
  }
  
  function startPractice() {
    alert("Starting your practice session!");
  }
  function startInterview(category) {
    alert(`Starting your ${category} interview practice!`);
    // Redirect to a new page (e.g., practice.html) for the chosen category
    window.location.href = `practice.html?category=${encodeURIComponent(category)}`;
  }
  
  <script>
  // Retrieve the difficulty level from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const difficulty = urlParams.get('difficulty');

  console.log(difficulty); // You can use this variable to adjust the AI's behavior
</script>
