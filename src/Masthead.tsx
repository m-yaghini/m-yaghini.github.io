import React from "react"
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Avatar, Box, createStyles, Grid, makeStyles, Theme, useTheme } from "@material-ui/core"
import photo from "./assets/photo.jpg"
import ContactSheet from "./ContactSheet"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            "&.MuiButtonBase-root": {
                // padding: "4px"
            },
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        responsiveIcon: {
            fontSize: theme.typography.h4.fontSize
        },
        avatar: {
            "&.MuiAvatar-root": {
                height: "auto",
                width: theme.spacing(20),
                // paddingTop: "10px"
            },
        },
    }));


export default function () {
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Box sx={{ my: 1, flexGrow: 1 }}>
            <Grid item container
                spacing={2}
                // alignContent="flex-start"
                direction="row"
                alignItems="center"
                justifyContent="center">
                <Grid item>
                    <Avatar classes={{ root: classes.avatar }} alt="MYaghini" variant="rounded" src={photo}></Avatar>
                </Grid>
                <Grid item container direction="column" xs>
                    <Typography component="h2" variant="h3" gutterBottom>
                        Mohammad Yaghini
                        </Typography>
                    <Typography component="h5" variant="h5" gutterBottom>
                        PhD Student in Machine Learning
                         </Typography>
                    <ContactSheet direction="row" classes={classes} justifyContent="flex-start" />
                </Grid>
            </Grid>
        </Box>
    )
}