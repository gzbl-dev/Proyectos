/*
  Hoja de scripts de la aplicación.
  Aquí va toda la interactividad de tu página.
*/

function openPrintPage() {
  // ⚠️ ESTA FUNCIÓN ESTÁ ROTA. 
  // Necesitas crear el archivo 'cv_for_print_english.html' o eliminar/cambiar esta función.
  const printWindow = window.open('./src/utils/cv_for_print_english.html', '_blank');

  // El código original intentaba imprimir la nueva ventana
  if (printWindow) {
    printWindow.onload = function () {
      printWindow.focus(); // Enfoca la nueva ventana
      printWindow.print(); // Abre el diálogo de impresión
      
      // Cierra la ventana después de imprimir (esto puede no funcionar en todos los browsers)
      printWindow.onafterprint = function () {
        printWindow.close();
      };
    };
  } else {
    // Esto ocurre si el navegador bloquea las ventanas emergentes
    alert("No se pudo abrir la ventana para imprimir. Revisa si tu navegador está bloqueando ventanas emergentes.");
  }
}


// ===================================
// === LÓGICA DE MODO OSCURO (NUEVA) ===
// ===================================

// Esta función se ejecuta inmediatamente al cargar la página
// para establecer el tema correcto y evitar parpadeos (flickering).
(function() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Aplica 'dark' si está en localStorage O si el sistema lo prefiere
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();


// Esta es la función que llama tu botón HTML
function toggleDarkMode() {
  // Alterna la clase 'dark' en el elemento <html>
  const isDark = document.documentElement.classList.toggle('dark');
  
  // Guarda la preferencia del usuario en localStorage
  if (isDark) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}