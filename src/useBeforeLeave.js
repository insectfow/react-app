export const useBeforeLeave = (onBefore) => {
  // 윈도우 화면을 벗어날때 감지하는 메소드
  const handle = event => {
    const {clientY
  } = event;
    if (clientY >= 0) onBefore();
  }
  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return;
    }

    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, [])
}