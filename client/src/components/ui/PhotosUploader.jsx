import React, { useState } from 'react';

import Image from './Image';
import axiosInstance from '../../utils/axios';

/**
 * PhotosUploader component for uploading and managing cafe photos
 * Redesigned with cafe theme aesthetics while maintaining all functionality
 */
const PhotosUploader = ({ addedPhotos, setAddedPhotos }) => {
  const [photoLink, setphotoLink] = useState('');

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: filename } = await axiosInstance.post('/upload-by-link', {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setphotoLink('');
  };

  const uploadPhoto = async (e) => {
    const files = e.target.files;
    const data = new FormData(); // creating new form data
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]); // adding all the photos to data one by one
    }
    const { data: filenames } = await axiosInstance.post('/upload', data, {
      headers: { 'Content-type': 'multipart/form-data' },
    });
    setAddedPhotos((prev) => {
      return [...prev, ...filenames];
    });
  };

  const removePhoto = (filename) => {
    setAddedPhotos([...addedPhotos.filter((photo) => photo !== filename)]);
  };

  const selectAsMainPhoto = (e, filename) => {
    e.preventDefault();

    setAddedPhotos([
      filename,
      ...addedPhotos.filter((photo) => photo !== filename),
    ]);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={photoLink}
          onChange={(e) => setphotoLink(e.target.value)}
          type="text"
          placeholder="Add photo using a URL..."
          className="flex-grow rounded-lg border-border bg-input"
        />
        <button
          className="rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary-dark transition-colors"
          onClick={addPhotoByLink}
        >
          Add photo
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {addedPhotos?.length > 0 &&
          addedPhotos.map((link) => (
            <div className="relative group aspect-square overflow-hidden rounded-xl border border-border bg-card" key={link}>
              <Image
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={link}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  onClick={() => removePhoto(link)}
                  className="rounded-full bg-card p-1.5 text-foreground shadow-sm hover:bg-muted transition-colors"
                  title="Remove photo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              
              <button
                onClick={(e) => selectAsMainPhoto(e, link)}
                className={`absolute top-2 left-2 rounded-full p-1.5 shadow-sm transition-colors ${
                  link === addedPhotos[0] 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card/80 text-foreground hover:bg-muted'
                }`}
                title={link === addedPhotos[0] ? "Main photo" : "Set as main photo"}
              >
                {link === addedPhotos[0] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
          
        <label className="aspect-square flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/50 p-4 text-muted-foreground hover:bg-muted transition-colors">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          <span className="text-sm font-medium">Upload Photos</span>
          <span className="text-xs text-center">Drag & drop or click to browse</span>
        </label>
      </div>
    </div>
  );
};

export default PhotosUploader;
