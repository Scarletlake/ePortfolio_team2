import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import request from "superagent";
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const CLOUDINARY_UPLOAD_PRESET = "portfolio";
const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/do0ecn2sm/image/upload";
var pictureUrl = "";

const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    //   '& > *': {
    //     margin: theme.spacing(1),
    //     width: theme.spacing(17),
    //     height: theme.spacing(17),
    //   },
    // },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}));

export default function MyDropzone(props) {

    const classes = useStyles();

    function NameInitial() {
        var initial = '';
        if (props.first_name) {
            initial += props.first_name[0];
        }

        if (props.last_name) {
            initial += props.last_name[0];
        }
        return initial;
    }

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
                {pictureUrl === "" ?
                    (<p>Insert pictrue ...</p>) :
                    (
                        <div>
                            <img src={pictureUrl} alt="Show Picture" />
                        </div>
                    )
                }
            </div>
        </FormControl>
    );
}
