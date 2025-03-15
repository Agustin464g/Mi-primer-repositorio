document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: window.innerWidth < 768 ? 'listMonth' : 'dayGridMonth',
      locale: 'es',
      height: 300,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: window.innerWidth < 768 ? 'listMonth' : 'dayGridMonth,listMonth'
      },
      events: [
        {
          title: 'vs Rivales FC',
          start: '2023-03-15',
          backgroundColor: '#ef4444'
        },
        {
          title: 'vs Deportivo Central',
          start: '2023-03-22',
          backgroundColor: '#3b82f6'
        },
        {
          title: 'vs Atlético Unidos',
          start: '2023-03-29',
          backgroundColor: '#ef4444'
        }
      ]
    });
    calendar.render();
    
    // Ajustar calendario en cambio de tamaño de ventana
    window.addEventListener('resize', function() {
      calendar.changeView(window.innerWidth < 768 ? 'listMonth' : 'dayGridMonth');
      calendar.setOption('headerToolbar', {
        left: 'prev,next today',
        center: 'title',
        right: window.innerWidth < 768 ? 'listMonth' : 'dayGridMonth,listMonth'
      });
    });
  });