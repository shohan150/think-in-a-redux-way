import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../redux/books/thunk/addBook";
import updateBook from "../redux/books/thunk/updateBook";
import { startEdit } from "../redux/form/actionIdentifiers";

export default function Form() {
  const dispatch = useDispatch();
  const { isEdit, bookData } = useSelector((state) => state.form);

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    cover: "",
    price: "",
    rating: "",
    isFeatured: false,
  });

  useEffect(() => {
    isEdit && setFormData(bookData);
  }, [bookData, isEdit]);

  function handleChange(name, value) {
    // third bracket used for dynamic property naming. Else it would TrackEvent, name: the value. but now it will create a property based on the value passed to name.
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addBook(formData));
    setFormData({
      name: "",
      author: "",
      cover: "",
      price: "",
      rating: "",
      isFeatured: false,
    });
  }

  function handleUpdate(event) {
    event.preventDefault();
    dispatch(updateBook(formData));
    dispatch(startEdit(false));
    setFormData({
      name: "",
      author: "",
      cover: "",
      price: "",
      rating: "",
      isFeatured: false,
    });
  }

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">
        {isEdit ? "Update Book Info" : "Add New Book"}
      </h4>
      <form className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={formData.author}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="cover"
            value={formData.cover}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={formData.price}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="isFeatured"
            className="w-4 h-4"
            checked={formData.isFeatured}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book
          </label>
        </div>

        {isEdit ? (
          <button
            type="submit"
            className="submit"
            id="submit"
            onClick={(e) => handleUpdate(e)}
          >
            Update Book
          </button>
        ) : (
          <button
            type="submit"
            className="submit"
            id="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Add Book
          </button>
        )}
      </form>
    </div>
  );
}
