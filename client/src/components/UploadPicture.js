import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import request from "superagent";
import { FormControl } from '@material-ui/core';

const CLOUDINARY_UPLOAD_PRESET = "portfolio";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/do0ecn2sm/image/upload";
var pictureUrl = "";

export default function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      let upload = request
        .post(CLOUDINARY_UPLOAD_URL)
        .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
        .field("file", file);
      upload.end((err, response) => {
        if (err) {
          console.error(err);
        }
        pictureUrl = response.body.url;
        // console.log(pictureUrl);
      });
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <FormControl>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag or add your avatar here</p>
      </div>
      <div>
        {pictureUrl === "" ? null : (
          <div>
            <img src={pictureUrl} width="150" height="150" />
          </div>
        )}
      </div>
    </FormControl>
  );
}
