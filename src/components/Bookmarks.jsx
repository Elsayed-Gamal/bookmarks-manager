import { useBookmarks } from '../contexts/BookmarksContext';
import styles from './Bookmarks.module.css';
import BookmarksList from './BookmarksList';

function Bookmarks() {
  const { bookmarks, currentCategoryToShow, setCurrentCategoryToShow } =
    useBookmarks();
  const categories = [
    ...new Set(bookmarks.map((bookmark) => bookmark.category)),
  ];

  return (
    <div className={styles.bookmarks}>
      <h2>Bookmarks</h2>
      <p>Filter bookmarks by category</p>
      <ul>
        <li
          className={currentCategoryToShow === 'all' ? 'active' : ''}
          onClick={() => setCurrentCategoryToShow('all')}
        >
          <button>All</button>
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={category === currentCategoryToShow ? 'active' : ''}
            onClick={() => setCurrentCategoryToShow(category)}
          >
            <button>{category}</button>
          </li>
        ))}
      </ul>

      <BookmarksList />
    </div>
  );
}

export default Bookmarks;
