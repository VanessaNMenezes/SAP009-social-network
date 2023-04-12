export default () => {
  const feedContainer = document.createElement('div');

  const feedScreen = `
    <section id='page-timeline'>
    <div class="div-logo-timeline">
    <img src="./assets/logo-" id="logo-timeline" class="logo-image-timeline" alt="">
  </div>
  <nav role="navigation">
  <div id="menuToggle">   
    <span></span>
    <span></span>
    <span></span>   
    <ul id="menu">
    <li><a href="#timeline">Home</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a id="menu-sair" href="#">Sair</a></li>
  </ul>
  </div>
</nav>
     <div id='menu'>
     <p class="feed">Olá,</p> 
     <div class="div-feed-button">
       <p class="feed-name">$user.displayName</p>
      <img src='assets/imagens/logo.png' id='feed-logo' alt='Logotipo QA- Qualidade de ações'>
      <div class="timeline-content">
      <div class="div-post-type"><button type="button" id="last-posts" class="post-type">Últimos posts</button>
      <button type="button" id="user-posts" class="post-type">Meus posts</button>
      <button type="button" id="user-favorites" class="post-type">Meus favoritos</button>
      </div>
      <div class="container-postList">
      $ListPost() 
      </div>
      </div>
    <div id="modal-wrapper">
    <div id="modal-container"></div>
      <img src='assets/imagens/perfil.png'><p> PERFIL </p>
      <a href='#publish'> <img src='assets/imagens/publicar.png' alt='Imagem publicação' id='image-publish'> PUBLICAR </a>
      <a href='#login'> <img src='assets/imagens/logout.png' alt='Imagem publicação' id='image-publish'> SAIR </a>
      <div>    
      <img id='bumerangue-gif' src='assets/imagens/bumerangue.gif'>
      <input placeholder='criar-publicação'></input>
      <input placeholder='minha-publicação'></input>
      <input type='button' value='outra-pubicação'></input>
    
    </section>

    `;

  feedContainer.innerHTML = feedScreen;

   //COLOCAR AQUI OS AS MANIPULAÇÕES DINAMICAS DO DOM, PEGANDO OS IDS DO HTML E/OU C
  // COLOCAR OS EVENTOS DOS BOTOES DE ENTRAR, ENTRAR C/ GOOGLE E CADASTRAR
  // CRIAR AS CONDICIONAIS SE O EMAIL E/OU SENHA ESTIVEREM ERRADOS, OU SE O EMAIL JÁ FOR OU NÃO CADASTRADO, ETC...v

  //return containerPost;
//};
