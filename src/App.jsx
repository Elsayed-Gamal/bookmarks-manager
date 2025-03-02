import styles from './App.module.css';
import BookmarksProvider from './contexts/BookmarksContext';
import BookmarkForm from './components/BookmarkForm';
import Categories from './components/Categories';
import Bookmarks from './components/Bookmarks';

function App() {
  return (
    <BookmarksProvider>
      <h1>Bookmarks Manager</h1>
      <div className={styles.container}>
        <BookmarkForm />
        <Categories />
        <Bookmarks />
      </div>
    </BookmarksProvider>
  );
}

export default App;
