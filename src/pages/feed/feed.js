import { deletePost,
  likePost,
  editPos
 } from '../../firebase/auth.js';

export default () => {
  const feedContainer = document.createElement('div');

  const feedScreen = `
    <section>
     <div id='menu'>
      <img src='assets/imagens/logo.png' id='feed-logo' alt='Logotipo QA- Qualidade de ações'>
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

  return feedContainer;
};

feedContainer.innerHTML = template;
  const postArea = document.getElementById('post-area');
  postArea.innerHTML = '';
  postArea.appendChild(feedContainer);

  const btnLike = document.querySelectorAll('.btn-like');
  const btnEdit = document.querySelectorAll('.btn-edit');
  const btnDelete = document.querySelectorAll('.btn-delete'); // id é unico

  btnLike.forEach((element) => {
    element.addEventListener('click', (e) => {
      const postId = e.target.dataset.id;

      likePost(postId)
        .then(() => {
          document.location.reload(true);
        }).catch(() => {
          console.log('deu ruim');
        });
    });
  });

  // editar
  btnEdit.forEach((element) => {
    element.addEventListener('click', (e) => {
      const postId = e.target.dataset.id;
      const textEdit = prompt('Edite seu post');

      editPost(postId, textEdit)
        .then(() => {
          document.location.reload(true);
        }).catch(() => {
          console.log('deu ruim no edit');
        });
    });
  });

  // deletar
  btnDelete.forEach((element) => {
    element.addEventListener('click', (e) => {
      const postId = e.target.dataset.id;
      if (window.confirm('Deseja mesmo deletar?')) {
        deletePost(postId)
          .then(() => {
            document.location.reload(true);
          }).catch(() => {
            console.log('deu ruim no delete');
          });
      }
    });
  });
};
