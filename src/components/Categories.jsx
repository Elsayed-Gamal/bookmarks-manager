import { useBookmarks } from '../contexts/BookmarksContext';
import styles from './Categories.module.css';
import Message from './Message';

function Categories() {
  const { bookmarks, setCurrentCategoryToAdd } = useBookmarks();
  const categories = [
    ...new Set(bookmarks.map((bookmark) => bookmark.category)),
  ];

  function handleClick(e) {
    setCurrentCategoryToAdd(e.target.textContent);
  }

  return (
    <div className={styles.categories}>
      <h2>Categories you can add to form</h2>
      {categories.length === 0 && <Message>Please add a bookmark</Message>}
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={handleClick}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
