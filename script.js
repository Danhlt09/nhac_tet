// Tạo đối tượng audio
const audio = new Audio('tetbinhan.mp3');
audio.loop = true; // Lặp lại nhạc

// Lấy nút từ DOM
const playButton = document.getElementById('playButton');

// Gán sự kiện click cho nút
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play(); // Phát nhạc
    playButton.textContent = 'Tạm dừng nhạc';
  } else {
    audio.pause(); // Tạm dừng nhạc
    playButton.textContent = 'Phát nhạc';
  }
});