// script.js
window.onload = function() {
  // Dynamic data for the profile
  const profileData = {
    name: "Team Divyora",
    jobTitle: "Samadhan2.0 Winners",
    bio: "Passionate about coding, open-source, and new technologies. Always learning and growing.",
    profileImage: "https://www.example.com/profile.jpg",  // Replace with your image URL
   
  };

  // Update the content dynamically
  document.getElementById('profile-name').innerText = profileData.name;
  document.getElementById('profile-job').innerText = profileData.jobTitle;
  document.getElementById('profile-bio').innerText = profileData.bio;
  document.getElementById('profile-image').src = profileData.profileImage;

};
