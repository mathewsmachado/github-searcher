export function setModalRoot() {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.append(modalRoot);
}

export function unsetModalRoot() {
  document.getElementById('modal-root')?.remove();
}
