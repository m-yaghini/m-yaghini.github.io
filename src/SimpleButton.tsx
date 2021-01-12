import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import React from "react"


interface SimpleButtonProps {
    text: String,
    onClick: Function
}

const useStyles = makeStyles({
    root: {
        "&.MuiButtonBase-root": {
            padding: 0,
            paddingTop: "0.3vh",
            paddingBottom: "0.3vh",
            minWidth: "50%",
            "&:hover": {
                backgroundColor: "transparent"
            }
        }

    },
    label: {
        padding: 0,
        minWidth: 0,
    }
});

export default function ({ text, onClick }: SimpleButtonProps) {
    const classes = useStyles()
    return (
        <Button
            onClick={() => onClick()}
            classes={{ root: classes.root }}
            color="inherit"
            centerRipple>
            <Typography variant="h6">
                {text}
            </Typography>
        </Button>
    )
}