import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import request from "superagent";
import { FormControl, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CLOUDINARY_UPLOAD_PRESET = "portfolio";
const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/do0ecn2sm/image/upload";


const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        height: 250,
        background: "#f1f1f1"
    },
    pic: {
        position: "absolute",
        width: 500,
        height: 250,
    },
    overlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        opacity: 0.5,
        transition: "1.5s ease",
        background: "#008CBA"
      }
      
}));

export default function UploadPicture(props) {

    const classes = useStyles();

    const [isHover, setIsHover] = useState(false);
    const [pictureUrl, setPictureUrl] = useState(props.pictureUrl);

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
                setPictureUrl(response.body.url);
                props.uploadPicture(response.body.url);
            });
        });
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <FormControl>
            <Grid {...getRootProps()} className={classes.root} 
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <input {...getInputProps()} />
                {pictureUrl?
                    (
                        <div>
                            <img src={pictureUrl} alt="Default picture" className={classes.pic} />
                        </div>
                    ):
                    null                          
                }
                <div>
                {isHover?
                    (<Grid container item   
                        className={classes.overlay}    
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <p>Click to add the picture</p>     
                    </Grid>): null} 
                    </div>
            </Grid>
        </FormControl>
    );
}