import React, { MouseEventHandler, useState } from 'react'
import { Button, createStyles, Fade, makeStyles, Theme, Tooltip } from '@material-ui/core'

interface MyButtonProps {
    buttonText: String,
    buttonTooltip: String,
    buttonIcon: JSX.Element,
    buttonClickedTooltip?: String,
    onClickFunc?: Function,
    delayToolTipIfButtonClicked?: boolean,
    dataClipboardText?: String
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        margin: theme.spacing(1),
        maxWidth: "95%"
    },
}));



function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function ({ buttonText, buttonTooltip, buttonIcon, buttonClickedTooltip, onClickFunc, delayToolTipIfButtonClicked, dataClipboardText }: MyButtonProps) {
    const classes = useStyles()
    const [buttonClicked, setButtonClicked] = useState(false);
    const _buttonClickedTooltip = buttonClickedTooltip === undefined ? buttonTooltip : buttonClickedTooltip
    const _delayToolTipIfButtonClicked = delayToolTipIfButtonClicked === undefined ? false : delayToolTipIfButtonClicked

    return (

        < Tooltip
            title={buttonClicked ? _buttonClickedTooltip : buttonTooltip}
            placement="left"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            onClose={async () => {
                await delay(400)
                setButtonClicked(false)
            }}
            leaveDelay={(_delayToolTipIfButtonClicked && buttonClicked) ? 1000 : 100}
            leaveTouchDelay={(_delayToolTipIfButtonClicked && buttonClicked) ? 3000 : 1500}
            disableInteractive
        >
            <Button
                size="small"
                variant="contained"
                color="inherit"
                data-clipboard-text={dataClipboardText}
                onClick={() => {
                    if (onClickFunc !== undefined) {
                        onClickFunc()
                    }
                    setButtonClicked(true)
                }}
                className={`btn ${classes.button}`}
                endIcon={buttonIcon}
                centerRipple
            >{buttonText}
            </Button>
        </Tooltip >
    )
}