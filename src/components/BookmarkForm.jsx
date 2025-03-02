import { useEffect, useState } from 'react';
import styles from './BookmarkForm.module.css';
import { useBookmarks } from '../contexts/BookmarksContext';

function BookmarkForm() {
  const { addBookmark, currentCategoryToAdd } = useBookmarks();

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState(currentCategoryToAdd);

  useEffect(
    function () {
      setCategory(currentCategoryToAdd);
    },
    [currentCategoryToAdd]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !url || !category) return;

    addBookmark({ title, url, category });
    setTitle('');
    setUrl('');
    setCategory('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Bookmark</button>
    </form>
  );
}

export default BookmarkForm;
