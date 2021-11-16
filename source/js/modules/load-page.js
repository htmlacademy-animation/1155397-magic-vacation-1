export default () => {

  let getBodyActive = () => {
    const a = document.querySelector(`body`);

    a.classList.add(`has-loaded`);
  };

  window.onload = function () {
    getBodyActive();
  };
};
