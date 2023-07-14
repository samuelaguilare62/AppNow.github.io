const commentForm = document.getElementById('comment-form');
const commentsSection = document.getElementById('comments');
let comments = [];

window.addEventListener('load', loadComments);
commentForm.addEventListener('submit', submitComment);

function loadComments() {
  comments = JSON.parse(localStorage.getItem('comments')) || [];
  renderComments();
}

function renderComments() {
  commentsSection.innerHTML = '';

  comments.forEach((comment, index) => {
    const commentHTML = generateCommentHTML(comment, index);
    commentsSection.innerHTML += commentHTML;

    if (comment.replies) {
      comment.replies.forEach((reply) => {
        const replyHTML = generateReplyHTML(reply);
        commentsSection.innerHTML += replyHTML;
      });
    }
  });
}

function generateCommentHTML(comment, index) {
  return `
        <div class="comment">
            <div class="name">${comment.name}:</div>
            <div class="content">${comment.comment}</div>
            <div class="actions">
                <button onclick="editComment(${index})" class="editcomen">Editar</button>
                <button onclick="deleteComment(${index})" class="delete">Eliminar</button>
                <button onclick="replyComment(${index})" class="responder">Responder</button>
            </div>
        </div>
    `;
}

function generateReplyHTML(reply) {
  return `
        <div class="reply">
            <div class="name"><em>En respuesta a ${reply.replyTo}:</em> ${reply.name}:</div>
            <div class="content">${reply.comment}</div>
        </div>
    `;
}

function submitComment(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  const newComment = { name, comment };
  comments.push(newComment);
  localStorage.setItem('comments', JSON.stringify(comments));

  commentForm.reset();
  renderComments();
}

function editComment(index) {
  const commentToEdit = comments[index];

  document.getElementById('name').value = commentToEdit.name;
  document.getElementById('comment').value = commentToEdit.comment;

  commentForm.removeEventListener('submit', submitComment);
  commentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    commentToEdit.name = document.getElementById('name').value;
    commentToEdit.comment = document.getElementById('comment').value;

    localStorage.setItem('comments', JSON.stringify(comments));

    commentForm.reset();
    renderComments();

    commentForm.removeEventListener('submit', arguments.callee);
    commentForm.addEventListener('submit', submitComment);
  });
}

function deleteComment(index) {
  comments.splice(index, 1);
  localStorage.setItem('comments', JSON.stringify(comments));
  renderComments();
}

function replyComment(index) {
  const replyName = prompt('Ingrese su nombre:');
  const replyComment = prompt('Ingrese su respuesta:');

  if (replyName && replyComment) {
    const replyTo = comments[index].name;
    const reply = { name: replyName, comment: replyComment, replyTo };
    comments.push(reply);
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
  }
}

loadComments();
