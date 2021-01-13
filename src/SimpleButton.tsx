import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import { Button, Typography, useThemeProps } from "@material-ui/core"
import React from "react"


interface SimpleButtonProps {
    className: string,
    text: String,
    onClick: Function
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        "&.MuiButtonBase-root": {
            padding: "3px 0 0 2px",
            minWidth: 0,
            minHeight: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }
        }

    },
    label: {
        "&.MuiTypography-root": {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: theme.typography.fontWeightBold,
            padding: 0,
            minWidth: 0,
        }
    }
}));

export default function ({ className, text, onClick }: SimpleButtonProps) {
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
        <Button
            className={className}
            onClick={() => onClick()}
            classes={{ root: classes.root }}
            color="inherit"
            centerRipple>
            <Typography variant="button" display="block" className={classes.label}>
                {text}
            </Typography>
        </Button>
    )
}