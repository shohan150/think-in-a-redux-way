import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/books/actionIdentifiers";

export default function Form() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    cover: "",
    price: "",
    rating: "",
    isFeatured: false,
  });
  function handleChange(name, value) {
    // third bracket used for dynamic property naming. Else it would TrackEvent, name: the value. but now it will create a property based on the value passed to name.
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(add(formData));
    setFormData({
      title: "",
      author: "",
      cover: "",
      price: "",
      rating: "",
      isFeatured: false,
    });
  }

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="title"
            value={formData.title}
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
            name="featured"
            className="w-4 h-4"
            checked={formData.isFeatured}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book
          </label>
        </div>

        <button
          type="submit"
          className="submit"
          id="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
