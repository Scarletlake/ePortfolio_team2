import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import UseWindowSize from './UseWindowSize';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: (size) => (size.width * 0.8),
        height: (size) => (size.height * 0.8)
    },
    image: {
        width: (size) => (size.width * 0.8),
        height: (size) => (size.width * 0.8 * (1080 / 1920))
    }
}));

export default function ImageExamples(props) {

    const size = UseWindowSize();
    const classes = useStyles(size);
    const tileData = props.tileData;
    return (
        <div className={classes.root}>
            <GridList cellHeight={'auto'} className={classes.gridList} cols={1}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.title} cols={1} className={"imgFullWidth"}>
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