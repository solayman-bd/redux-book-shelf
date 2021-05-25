import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const ReadingList = () => {
  const readingListBooks = useSelector((state) => state.books.readingList);

  return (
    <PageLayout>
      {readingListBooks.length > 0 ? (
        readingListBooks.map((book) => (
          <Book key={book.id} book={book} indicator={"2"} />
        ))
      ) : (
        <p>
          Looks like you've finished all your books! Check them out in your{" "}
          <Link to="finish">finished books</Link> or{" "}
          <Link to="/">discover more</Link>.
        </p>
      )}
    </PageLayout>
  );
};

export default ReadingList;
