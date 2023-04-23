import { findTemplate } from "./util.js";
const internetErrorMessageElement = document.querySelector('.error_connect');

const showGetDataAllert = () => {
    internetErrorMessageElement.classList.remove('hidden');
};

const showSendDataAllert = () => {
    const allertElement = findTemplate('#error', '.error').cloneNode(true);
    allertElement.addEventListener('click', (evt) => {
        if (evt.target.type === 'button' || evt.target.classList.contains('error')) {
            document.body.removeChild(allertElement);
        }
    })
    allertElement.addEventListener('keydown', (evt) => {
        if (!isEscapeKey(evt)) {
        return;
        }
        evt.preventDefault();
        document.body.removeChild(element);
    }, { once: true });
    document.body.appendChild(allertElement);
    
};

export { showGetDataAllert, showSendDataAllert }