document.addEventListener("DOMContentLoaded", function () {
  const footer = `
   <!-- Footer  -->
    <!-- Footer Section -->
       <footer class="bg-gray-900 text-white">
      <div class="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Publion Research</h3>
          <p class="text-gray-400">Empowering knowledge through accessible and impactful research publications.</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Journals</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <p class="text-gray-400">Email: editor@publion.id</p>
          <p class="text-gray-400">Phone: +62 812-3456-7890</p>
        </div>
      </div>
      <div class="bg-gray-800 text-center py-4">
        <p class="text-sm text-gray-400">&copy; 2025 PT Publion Research Ventures. All rights reserved.</p>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    footerContainer.innerHTML = footer;
  }
});

function generateQuickLink(label) {
  return `
    <li>
      <a href="#" class="text-gray-300 hover:text-white transition duration-300 flex items-center">
        <span class="mr-2">›</span>${label}
      </a>
    </li>
  `;
}

function generateSocialIcons() {
  return `
    ${['facebook', 'twitter', 'linkedin', 'youtube'].map(icon =>
      `<a href="#" class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300">
        <span class="text-white text-lg">${icon === 'youtube' ? '▶' : icon.charAt(0).toUpperCase()}</span>
      </a>`).join('')}
  `;
}
