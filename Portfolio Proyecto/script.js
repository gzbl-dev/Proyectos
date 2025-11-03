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
      
      // Cierra la ventana después de imprimir (esto puede no funcionar en todos los navegadores)
      printWindow.onafterprint = function () {
        printWindow.close();
      };
    };
  } else {
    // Esto ocurre si el navegador bloquea las ventanas emergentes
    alert("No se pudo abrir la ventana para imprimir. Revisa si tu navegador está bloqueando ventanas emergentes.");
  }
}

// Puedes añadir más funciones aquí
// Ejemplo:
// function toggleDarkMode() {
//   document.documentElement.classList.toggle('dark');
// }