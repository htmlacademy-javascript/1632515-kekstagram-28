const modalElement = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const commentElement = commentList.querySelector('.social__comment');
const commentLoaderButton = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');
const COMMENTS_DEFAULT = 5;

const getInfoPicture = (({ url, likes, comments, descriptions }) => {
  modalElement
    .querySelector('.big-picture__img')
    .querySelector('img').src = url;
  modalElement
    .querySelector('.likes-count').textContent = likes;
  modalElement
    .querySelector('.comments-count').textContent = comments.length;
  modalElement
    .querySelector('.social__caption').textContent = descriptions;
});

const removeComments = () => {
  commentList.innerHTML = '';
  commentLoaderButton.classList.remove('hidden');
};

const commentsFragment = document.createDocumentFragment();
const getInfoComment = (obj) => {
  const comment = commentElement.cloneNode(true);
  removeComments();

  obj.comments.forEach(({ avatar, name, message }) => {
    const cloneComment = comment.cloneNode(true);
    cloneComment
      .querySelector('.social__picture').src = avatar;
    cloneComment
      .querySelector('.social__picture').alt = name;
    cloneComment
      .querySelector('.social__text').textContent = message;
    commentsFragment.append(cloneComment);
  });
  commentList
    .append(commentsFragment);
};

const loadComments = () => {
  const comments = commentList.children;
  const lowerLimit = Number(commentLoaderButton.dataset.value);
  let upperLimit = lowerLimit + COMMENTS_DEFAULT;
  const maxValue = Number(commentLoaderButton.dataset.maxValue);

  if (upperLimit >= maxValue) {
    upperLimit = maxValue;
    commentLoaderButton.classList.add('hidden');
  }

  for (let i = lowerLimit; i < upperLimit; i++) {
    comments[i].classList.remove('hidden');
  }
  commentLoaderButton.dataset.value = upperLimit;
  commentCount.innerHTML = `${upperLimit} из <span class="comments-count">${maxValue}</span> комментариев`;
};

export {
  getInfoPicture,
  getInfoComment,
  loadComments,
  removeComments,
};
