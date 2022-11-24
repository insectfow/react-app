const useClick = onClick => {
  // 클릭할때 발생하는 메소드
  const ref = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    const element = ref.current;
    if (element) {
      element.addEventListener('click', onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener('click', onClick);
      }
    }
  }, [onClick])
  return ref;
}