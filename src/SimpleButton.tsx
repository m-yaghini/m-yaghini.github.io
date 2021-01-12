import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import React from "react"


interface SimpleButtonProps {
    className: string,
    text: String,
    onClick: Function
}

const useStyles = makeStyles({
    root: {
        "&.MuiButtonBase-root": {
            // padding: "4px",
            minWidth: "30%",
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

export default function ({ className, text, onClick }: SimpleButtonProps) {
    const classes = useStyles()
    return (
        <Button
            className={className}
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