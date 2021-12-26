import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // equivalent to 16:9 resolution
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transition.create('transform', {
            duration: theme.transition.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardContent: {
        paddingTop: 0,
    },
    divider: {
        margin: '20px 0',
    },
}));