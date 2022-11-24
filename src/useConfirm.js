export const useConfirm = (message, onConfirm, onCancel) => {
  // 클릭할때 confirm 기능해주는 메소드
  if (typeof onConfirm !== 'function') {
    return;
  }

  if (typeof onCancel !== 'function') {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  }

  return confirmAction;

}