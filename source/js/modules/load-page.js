export default () => {

  let getBodyActive = () => {
    const a = document.querySelector(`body`);

    a.classList.add(`active-page`);
  };

  window.onload = function () {
    getBodyActive();
  };
};
