import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import request from "superagent";
import { FormControl, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../views/artTemplateEditor.css'

const CLOUDINARY_UPLOAD_PRESET = "portfolio";
const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/do0ecn2sm/image/upload";




export default function UploadPicture(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: props.width,
            height: props.height,
            background: "#f1f1f1"
        },
        pic: {
            position: "absolute",
            width: props.width,
            height: props.height,
            display: "block",
            "object-fit": "cover",
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

    const useCircularStyles = makeStyles((theme) => ({
        root: {
            width: props.width,
            height: props.height,
            "border-radius": "50%",
            background: "#f1f1f1"
        },
        pic: {
            position: "absolute",
            width: props.width,
            height: props.height,
            display: "block",
            "object-fit": "cover",
            "border-radius": "50%"
        },
        overlay: {  
            "border-radius": "50%",          
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: 0.5,
            transition: "1.5s ease",
            background: "#008CBA"
        }
          
    }));

    const classes = useStyles();
    const classesCircular = useCircularStyles();

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
                //setPictureUrl(response.body.url);
                //console.log(response.body.url);
                props.uploadPicture(response.body.url);
            });
        });
    }, [props]);

    
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    
    useEffect (()=>{
        setPictureUrl(props.pictureUrl)
    }, [props.pictureUrl])

    return (
        <FormControl>
            {props.circular === "true"?
            (<div {...getRootProps()} className={classesCircular.root} 
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <input {...getInputProps()} />
                {pictureUrl?
                    (
                        <div>
                            <img src={pictureUrl} alt="Default" className={classesCircular.pic} />
                        </div>
                    ):
                    null                          
                }
            
                <div>
                    {isHover?
                        (<Grid container item   
                            className={classesCircular.overlay}    
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <p>Click to add the picture</p>     
                        </Grid>): 
                        null
                    } 
                </div>
            </div>):

            (<div {...getRootProps()} className={classes.root} 
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <input {...getInputProps()} />
                {pictureUrl?
                    (
                        <div>
                            <img src={pictureUrl} alt="Default" className={classes.pic} />
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
                        </Grid>): 
                        null
                    } 
                </div>
            </div>)
            }
            
        </FormControl>
    );
}