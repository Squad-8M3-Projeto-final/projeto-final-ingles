

function openEmailClient() {

    var destinatario = 'destinatario@email.com';
    var assunto = 'Assunto do Email';
    var corpo = 'Corpo do Email';

    var mailtoLink = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpo);

    window.location.href = mailtoLink;
}

function openLoginModal() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'block';
  }
  
  function closeLoginModal() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'none';
  }
  
  function doLogin() {
    var username = document.getElementById('username').value;
  

    if (username.trim() !== '') {

      document.getElementById('logi').style.display = 'none';
  

      document.querySelector('.nav-list .active').innerText = username;
  
      // Fecha o modal
      closeLoginModal();
    } else {
      alert('Por favor, insira um nome de usuário.');
    }
  }
  
  // Fecha o modal se clicar fora da área do modal
  window.onclick = function (event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
      closeLoginModal();
    }
  };