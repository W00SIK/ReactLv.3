import ReactDom from 'react-dom'

export const ModalPotal = ({children}) =>{
    const el = document.getElementById("modal");
    return ReactDom.createPortal(children, el);
};

export const ModalBPotal = ({children}) =>{
    const el = document.getElementById("modal");
    return ReactDom.createPortal(children, el);
};

export const SelectOverPotal = ({children}) =>{
    const el = document.getElementById("select");
    return ReactDom.createPortal(children, el);
};