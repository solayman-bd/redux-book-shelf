import React from "react";
import { useSelector } from "react-redux";
import Book from "../components/Book/Book";
// import books from '../fakeData/books.json'
import PageLayout from "../components/PageLayout/PageLayout";
const Discover = () => {
  const books = useSelector((state) => state.books.totalBookList);

  return (
    <PageLayout>
      {books?.map((book) => (
        <Book indicator={true} key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default Discover;
