import { Grid, GridDirection, GridJustification, IconButton, Typography } from "@material-ui/core"
import React from "react"
import IconButtonWithPopover from "./IconButtonWithPopover"
import SimpleButton from "./SimpleButton"
import { DraftsRounded, GitHub, LinkedIn, Twitter } from '@material-ui/icons'
import pdf from "./assets/cv.pdf"

interface ContactSheetProps {
    direction: GridDirection,
    classes: Record<"button" | "avatar" | "responsiveIcon", string>,
    justifyContent?: GridJustification
}

export default function ContactSheet({ direction, classes, justifyContent }: ContactSheetProps) {
    return (
        <Grid container
            alignItems="center"
            alignContent="flex-end"
            direction={direction}
            justifyContent={justifyContent === undefined ? "space-evenly" : justifyContent}
            spacing={1}
        >
            <Grid item>
                <IconButtonWithPopover
                    popoverContent={
                        <div>
                            <Typography variant="caption" display="block" gutterBottom>
                                Personal: first and last name with a dot in the middle at gmail
                        </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Work: same as above at mail.utoronto.ca
                            </Typography>
                        </div>
                    }
                    popOverIcon={<DraftsRounded className={classes.responsiveIcon} />}></IconButtonWithPopover>
            </Grid>
            <Grid item>
                <IconButton
                    className={classes.button}
                    onClick={() => window.open("https://www.linkedin.com/in/myaghini", '_blank')}>
                    <LinkedIn
                        className={classes.responsiveIcon} />
                </IconButton>
            </Grid>
            <Grid item >
                <IconButton
                    className={classes.button}
                    onClick={() => window.open("https://twitter.com/myaghini", '_blank')}>
                    <Twitter
                        className={classes.responsiveIcon} />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton className={classes.button}
                    onClick={() => window.open("https://github.com/m-yaghini", '_blank')}>
                    <GitHub
                        className={classes.responsiveIcon} />
                </IconButton>
            </Grid>
            <Grid item>
                <SimpleButton className={classes.responsiveIcon} text="CV" onClick={() => window.open(pdf, '_blank')}></SimpleButton>
            </Grid>
        </Grid>
    )
}