import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'portfolio';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/do0ecn2sm/image/upload';
var pictureUrl = '';

export default function MyDropzone() {

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            pictureUrl = response.body.url;
            // console.log(pictureUrl);
        });
      })
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <form>
        <div {...getRootProps()}>
            <br/>
            <input {...getInputProps()} />
            <p><b>Drop the files here ...</b></p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
            <br/>
        </div>
        <div>
            {pictureUrl === '' ? null :
                <div>
                    <img src={pictureUrl} width="150" height="150"/>
                </div>
            }
        </div>
    </form>
  )
}