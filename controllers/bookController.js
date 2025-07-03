const { readBooks, writeBooks } = require('../models/bookModel');
const { v4: uuidv4 } = require('uuid');

exports.getAll = async (req, res) => {
  const books = await readBooks();
  res.json(books);
};

exports.getById = async (req, res) => {
  const books = await readBooks();
  const book = books.find(b => b.id === req.params.id);
  book ? res.json(book) : res.status(404).json({ message: 'Not found' });
};

exports.create = async (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  const books = await readBooks();
  const newBook = {
    id: uuidv4(),
    title,
    author,
    genre,
    publishedYear,
    userId: req.user.id
  };
  books.push(newBook);
  await writeBooks(books);
  res.status(201).json(newBook);
};

exports.update = async (req, res) => {
  const books = await readBooks();
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  if (books[index].userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

  books[index] = { ...books[index], ...req.body };
  await writeBooks(books);
  res.json(books[index]);
};

exports.remove = async (req, res) => {
  const books = await readBooks();
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  if (books[index].userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

  const deleted = books.splice(index, 1);
  await writeBooks(books);
  res.json(deleted[0]);
};
