<script>
    document.addEventListener("DOMContentLoaded", function () {
      const menuIcon = document.getElementById("menuIcon");
      const sidebar = document.getElementById("sidebar");

      menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        sidebar.classList.toggle("active");
      });

      document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
          sidebar.classList.remove("active");
        }
      });
    });
  </script>
