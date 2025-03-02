import { createContext, useContext, useEffect, useReducer } from 'react';

const BookmarksContext = createContext();

const initialState = {
  bookmarks: JSON.parse(localStorage.getItem('bookmarks')) || [],
  currentCategoryToShow: 'all',
  currentCategoryToAdd: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'bookmarks/addBookmark':
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case 'bookmarks/removeBookmark':
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.title !== action.payload
        ),
      };

    case 'bookmarks/setCurrentCategoryToShow':
      return {
        ...state,
        currentCategoryToShow: action.payload,
      };

    case 'bookmarks/setCurrentCategoryToAdd':
      return {
        ...state,
        currentCategoryToAdd: action.payload,
      };

    default:
      return state;
  }
}

function BookmarksProvider({ children }) {
  const [{ bookmarks, currentCategoryToShow, currentCategoryToAdd }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(
    function () {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    },
    [bookmarks]
  );

  function addBookmark(bookmark) {
    dispatch({
      type: 'bookmarks/addBookmark',
      payload: bookmark,
    });
  }

  function removeBookmark(title) {
    dispatch({
      type: 'bookmarks/removeBookmark',
      payload: title,
    });
  }

  function setCurrentCategoryToShow(category) {
    dispatch({
      type: 'bookmarks/setCurrentCategoryToShow',
      payload: category,
    });
  }

  function setCurrentCategoryToAdd(category) {
    dispatch({
      type: 'bookmarks/setCurrentCategoryToAdd',
      payload: category,
    });
  }

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        currentCategoryToShow,
        currentCategoryToAdd,
        addBookmark,
        removeBookmark,
        setCurrentCategoryToShow,
        setCurrentCategoryToAdd,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarksProvider');
  }

  return context;
}

export default BookmarksProvider;
