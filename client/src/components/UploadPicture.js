import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import request from "superagent";
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CLOUDINARY_UPLOAD_PRESET = "portfolio";
const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/do0ecn2sm/image/upload";
var pictureUrl = "link to img";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "25vw",
        height: "25vw",
        border: "Solid 1px black"
    },
    pic: {
        maxWidth: "25vw",
        maxHeight: "25vw",
    }
}));

export default function UploadPicture(props) {

    const classes = useStyles();

    pictureUrl = props.pictureUrl;

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
                props.uploadPicture(pictureUrl);
                // console.log(pictureUrl);
            });
        });
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <FormControl>
            <div {...getRootProps()} className={classes.root}>
                <input {...getInputProps()} />
                {pictureUrl === "link to img" ?
                    (<p>Insert pictrue ...</p>) :
                    (
                        <div>
                            <img src={pictureUrl} alt="Show Picture" className={classes.pic} />
                        </div>
                    )
                }
            </div>
        </FormControl>
    );
}