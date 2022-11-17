export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitme = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitme, [title]);
  return setTitle;
}