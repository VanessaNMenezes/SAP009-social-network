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
  return feedContainer
//* if (localStorage.getItem('editStatus') === 'true') {containerPost.querySelector('#textAreaPost').value = localStorage.getItem('postText');containerPost.querySelector('#selectSubjects').value = localStorage.getItem('postSubject');}

  //*const submitPublish = containerPost.querySelector('#submitPublish');

  //*submitPublish.addEventListener('click', async (e) => {
    //e.preventDefault();
    //const postText = containerPost.querySelector('#textAreaPost').value;
    //const postSubject = containerPost.querySelector('#selectSubjects').value;

    //if (postText === '' || postSubject === 'typeTitle') {
      // eslint-disable-next-line no-alert
      //alert('Preencha todos os campos!');
    //} else {
      //if (localStorage.getItem('editStatus') === 'false') {
        //await publishPost(postText, postSubject);
      //} else {
        //const postId = localStorage.getItem('postId');
        //await editPost(postId, postText, postSubject);
      //}

      //window.location.hash = '#feed';
    //}
  //});

 // const cancelPublish = containerPost.querySelector('#btnCancel');

  //cancelPublish.addEventListener('click', (e) => {
    //e.preventDefault();
    //window.location.hash = '#feed';
  //});

  //return containerPost;
//};
