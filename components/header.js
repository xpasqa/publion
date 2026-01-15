document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <header class="bg-white shadow-lg">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <a href="/index.html" class="text-black-600 font-semibold text-xl">Publion Research</a>

          <nav class="hidden md:flex space-x-6 text-sm">
            <a href="/about.html" class="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="/katalog-buku.html" class="text-gray-600 hover:text-blue-600 transition">Books</a>
            <a href="/journals.html" class="text-gray-600 hover:text-blue-600 transition">Journals</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition">Research</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition">Connect</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition">Conference</a>
          </nav>

          <div class="md:hidden">
            <button id="menu-toggle" class="text-gray-700 focus:outline-none" aria-label="Toggle menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div class="hidden md:flex items-center gap-4">
            <a href="/login.html" class="px-4 py-2 text-sm text-white bg-black rounded-md hover:bg-teal-500">Login</a>
            <a href="/register.html" class="hidden stealm:inline-block px-4 py-2 text-sm text-black border border-black rounded-md hover:bg-black hover:text-white">Register</a>
          </div>
        </div>

        <div id="mobile-menu" class="md:hidden hidden flex flex-col mt-4 space-y-2 text-sm bg-white shadow-md rounded-md p-4">
          <a href="/about.html" class="block text-gray-700 hover:text-teal-600">About</a>
          <a href="/katalog-buku.html" class="block text-gray-700 hover:text-teal-600">Books</a>
          <a href="/journals.html" class="block text-gray-700 hover:text-teal-600">Journals</a>
          <a href="#" class="block text-gray-700 hover:text-teal-600">Research</a>
          <a href="#" class="block text-gray-700 hover:text-teal-600">Connect</a>
          <a href="#" class="block text-gray-700 hover:text-teal-600">Conference</a>
          <div class="flex justify-between gap-2 mt-4">
            <a href="/login.html" class="w-1/2 text-center px-4 py-2 text-sm text-white bg-black rounded-md hover:bg-teal-500">Login</a>
            <a href="/register.html" class="w-1/2 text-center px-4 py-2 text-sm text-black border border-black rounded-md hover:bg-black hover:text-white">Register</a>
          </div>
        </div>
      </div>
    </header>
    `;

  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.innerHTML = header;

    const toggleBtn = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }
});
