
  document.getElementById('loader-wrapper').classList.add('hidden');
    setTimeout(function() {
      window.location.href = 'home.html'; // Chuyển qua trang mới sau khi loading animation kết thúc
    }, 4000); // Thời gian loading animation, ở đây là 2 giây (2000ms)