import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import request from "superagent";
import { FormControl, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CLOUDINARY_UPLOAD_PRESET = "portfolio";
const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/do0ecn2sm/image/upload";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(17),
          height: theme.spacing(17),
        },
      }
}));

export default function UploadAvatar(props) {

    const classes = useStyles();
    const [avatarUrl, setAvatarUrl] = useState(props.avatar);

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
                setAvatarUrl(response.body.url);
                props.uploadPicture(response.body.url);
            });
        });
    }, [props]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <FormControl>
            <div className={classes.root} {...getRootProps()}>
                <input {...getInputProps()} />
                {avatarUrl === "" ?
                    <Avatar src="/broken-image.jpg" />:
                    <Avatar src={avatarUrl} />
                }
            </div>
        </FormControl>
    );
}