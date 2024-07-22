import DropdownComponent from "@/Components/DropdownComponent";
import InputComponent from "@/Components/InputComponent";
import InputFile from "@/Components/InputFile";
import TrixComponent from "@/Components/TrixComponent";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const FormPost = ({ title, categories, auth, errors, post }) => {
  const [csrfToken, setCsrfToken] = useState("");
  const [formData, setFormData] = useState({
    title: post?.title || "",
    thumbnail: post?.thumbnail || "",
    category_id: post?.category_id || "",
    body: post?.body || "",
  });
  const [thumbnailPreview, setThumbnailPreview] = useState(
    `/${post?.thumbnail}`,
  );

  useEffect(() => {
    const token = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    setCsrfToken(token);

    const handleFileAccept = (e) => {
      e.preventDefault();
    };

    document.addEventListener("trix-file-accept", handleFileAccept);

    return () => {
      document.removeEventListener("trix-file-accept", handleFileAccept);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail" && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <>
      <Head title={title} />
      <Navbar title={title} auth={auth}>
        <div className="mx-auto max-w-xl">
          <form
            action={
              title === "Create Post"
                ? "/my-posts/create"
                : `/my-posts/update/${post.slug}`
            }
            method="POST"
            encType="multipart/form-data"
          >
            <input type="hidden" name="_token" value={csrfToken} />
            <p className="mb-1 text-sm text-red-500">{errors.error}</p>
            <InputComponent
              id="title"
              type="text"
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              errorMessage={errors.title}
              required
            />
            {thumbnailPreview !== `/undefined` && (
              <div className="mb-2">
                <img
                  src={thumbnailPreview}
                  alt="Preview"
                  className="h-40 w-full object-cover"
                />
              </div>
            )}
            <InputFile
              id="thumbnail"
              label="Thumbnail"
              name="thumbnail"
              onChange={handleChange}
              accept="image/*"
              errorMessage={errors.thumbnail}
              required={title === "Create Post" ? true : false}
            />
            <DropdownComponent
              id="category_id"
              label="Category"
              name="category_id"
              selectedValue="Select Category"
              value={formData.category_id}
              options={categories}
              onChange={handleChange}
              required
            />
            <TrixComponent
              id="body"
              label="Body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              errorMessage={errors.body}
              required
            />

            <button className="w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              {title === "Create Post" ? "Create" : "Update"}
            </button>
          </form>
        </div>
      </Navbar>
    </>
  );
};

export default FormPost;
