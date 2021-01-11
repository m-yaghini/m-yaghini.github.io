import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { Box, Fade, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(1),
        },
        button: {
            "&:hover": {
                backgroundColor: "transparent"
            }
        }
    }),
);

interface IconButtonWithPopoverProps {
    popoverContent: JSX.Element,
    popOverIcon: JSX.Element,
}

export default function IconButtonWithPopover({ popoverContent, popOverIcon }: IconButtonWithPopoverProps) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton aria-describedby={id} className={classes.button} onClick={handleClick}>
                {popOverIcon}
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 300 }}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
            >
                <Box className={classes.typography}>
                    {popoverContent}
                </Box>
            </Popover>
        </div>
    );
}
