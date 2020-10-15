import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        height: 100,
        width: 20,
        [theme.breakpoints.down('sm')]: {
            width: 400,
            height: 600,
        },
        [theme.breakpoints.up('sm')]: {
            width: 580,
            height: 700,
        },
        [theme.breakpoints.up('md')]: {
            width: 880,
            height: 700,
        },
        [theme.breakpoints.up('lg')]: {
            width: 1000,
            height: 850,
        },
        [theme.breakpoints.up('xl')]: {
            width: 1450,
            height: 1000,
        },
    },
    image: {
        height: 100,
        width: 20,
        [theme.breakpoints.down('sm')]: {
            width: 400,
            height: 600,
        },
        [theme.breakpoints.up('sm')]: {
            width: 580,
            height: 700,
        },
        [theme.breakpoints.up('md')]: {
            width: 880,
            height: 700,
        },
        [theme.breakpoints.up('lg')]: {
            width: 1000,
            height: 850,
        },
        [theme.breakpoints.up('xl')]: {
            width: 1450,
            height: 1000,
        },
    }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageExamples(props) {
    const classes = useStyles();
    const tileData = props.tileData;
    return (
        <div className={classes.root}>
            <GridList cellHeight={'auto'} className={classes.gridList} cols={1}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={1} className={"imgFullWidth"}>
                        <img src={tile.img} className={classes.image} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}