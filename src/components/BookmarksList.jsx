import { useBookmarks } from '../contexts/BookmarksContext';
import styles from './BookmarksList.module.css';

function BookmarksList() {
  const { bookmarks, currentCategoryToShow, removeBookmark } = useBookmarks();

  return (
    <ul className={styles.bookmarksList}>
      {currentCategoryToShow === 'all' &&
        bookmarks.map((bookmark) => (
          <li key={bookmark.title}>
            <span>{bookmark.category}</span>
            <a href={bookmark.url} target="_blank">
              {bookmark.title}
            </a>
            <button onClick={() => removeBookmark(bookmark.title)}>
              Delete
            </button>
          </li>
        ))}

      {currentCategoryToShow !== 'all' &&
        bookmarks
          .filter((bookmark) => bookmark.category === currentCategoryToShow)
          .map((bookmark) => (
            <li key={bookmark.title}>
              <span>{bookmark.category}</span>
              <a href={bookmark.url} target="_blank">
                {bookmark.title}
              </a>
              <button onClick={() => removeBookmark(bookmark.title)}>
                Delete
              </button>
            </li>
          ))}

      {/* <li>
        <span>Search</span>
        <a href="www.google.com" target="_blank">
          Google
        </a>
        <button>Delete</button>
      </li>
      <li>
        <span>Search</span>
        <a href="www.google.com" target="_blank">
          Google
        </a>
        <button>Delete</button>
      </li>
      <li>
        <span>Search</span>
        <a href="www.google.com" target="_blank">
          Google
        </a>
        <button>Delete</button>
      </li> */}
    </ul>
  );
}

export default BookmarksList;
