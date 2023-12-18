function doLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação, por exemplo, verificar em um banco de dados
    // Neste exemplo, vamos apenas exibir uma mensagem de sucesso no console.
    console.log('Login successful! Welcome, ' + username);
  }