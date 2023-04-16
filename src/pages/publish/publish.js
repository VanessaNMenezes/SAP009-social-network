import {
  newPost,
  editPost,
} from '../../firebase/firestore.js';

export default () => {
  const publishContainer = document.createElement('div');
  const publishScreen = `

  <section>
  <img id='bumerangue-gif' src='assets/imagens/bumerangue.gif'>

    <input id='publication' type='textArea' placeholder= 'O que deseja compartilhar?'> </input>

    <a id='cancel-button' type='button'  href='#feed'> Cancelar </a>
    <a id='publication-button'type='button'href='#feed'> Publicar </a>

    <!--icones emojis reações-->
    <h2> Entendendo as reações</h2>
    <img id='reactions-gif' src='assets/imagens/reacoes.gif'>
  </section>
  
      `;

  publishContainer.innerHTML = publishScreen;

  return publishContainer;
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
