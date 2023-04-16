import {
  newPost,
  getPosts,
  loginLogin,
  logOut,
} from '../../firebase/auth.js';

export default () => {
  const publishContainer = document.createElement('div');

  const publishScreen = `
   <section>
    <img id='bumerangue-gif' src='assets/imagens/bumerangue.gif'>
    <textarea id='publication-text-publish' name='textarea' placeholder='Qual ação deseja compartilhar?'></textarea>
       <button id='cancel-button' type='button'  href='#feed'> Cancelar </button>
    <button id='publication-button-publish'> Publicar </button>
    <button id='logout-publish'> logout </button>
    <!--icones emojis reações-->
    <h2> Entendendo as reações</h2>
    <img id='reactions-gif' src='assets/imagens/reacoes.gif'>
    </section>
   `;

  publishContainer.innerHTML = publishScreen;

  const btnLogout = publishContainer.querySelector('#logout-publish');
  const textPost = publishContainer.querySelector('#publication-text-publish');
  const btnPost = publishContainer.querySelector('#publication-button-publish');

  btnPost.addEventListener('click', async () => {
    if (textPost.value === '') {
      alert('Post vazio, por favor digite algo!');
    }
    await newPost(textPost.value);
    const posts = await getPosts();
    post(posts);
  });

  async function listPosts() {
    const posts = await getPosts();
    post(posts);
  }

  listPosts();

  btnLogout.addEventListener('click', () => {
    console.log('deslogou');
    logOut(loginLogin);
  });
};

return publishContainer;

/** const buttonPub = publishContainer.querySelector('#publication-button-publish');
buttonPub.addEventListener('click', async (e) => {
  e.preventDefault();
  const textPub = publishContainer.querySelector('#publication-text-publish').value;
if (textPub === '') {
  alert('Preencha todos os campos!');
    } else {
      if (localStorage.getItem('editStatus') === 'false') {
        await publishPost(postText, postSubject);
      } else {
        const postId = localStorage.getItem('postId');
        await editPost(postId, postText, postSubject);
      }

      window.location.hash = '#feed';
    }
  });  return publishpublishContainer; */
