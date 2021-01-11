import React, { useState } from 'react'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { parseBibFile, normalizeFieldValue } from 'bibtex'
import bibFile from './bibFile'
import { Grid } from '@material-ui/core'
import { FormatQuote, SubjectTwoTone } from '@material-ui/icons';
import MyButton from './MyButton'


function sp() {
    return <span>{" "}</span>
}


const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        margin: theme.spacing(1),
        maxWidth: "95%"
    },

    root: {
        minWidth: 275,
        marginBottom: 12,
        flexGrow: 1,
    },

    title: {
        fontSize: 16,
    },
    authors: {
        fontSize: 14,
    },
    subtitle: {
        fontSize: 13,
    }
}));

interface PublicationProps {
    bibkey: string
}

// from https://stackoverflow.com/a/432503
function getFirstGroup(regexp: RegExp, str: String) {
    const array = [...str.matchAll(regexp)];
    return array.map(m => m[1]);
}

export default function Publication({ bibkey }: PublicationProps) {
    const classes = useStyles()
    const theme = useTheme()

    const bibFile_ = parseBibFile(bibFile)

    const bibTexEntries = Object.fromEntries(
        bibFile.split(/@/g)
            .map(x => x.trim())
            .filter(x => x.length > 0)
            .map(x => "@" + x)
            .map(x => [getFirstGroup(/@\w+{(.[^,]+)/g, x)[0], x])
    )

    const bibEntry = bibTexEntries[bibkey]

    let authors: string = String(normalizeFieldValue(bibFile_.getEntry(bibkey)?.getField("author")))
    authors = authors.replace(" and", ",")

    let title: string = String(normalizeFieldValue(bibFile_.getEntry(bibkey)?.getField("title")) ?? '')
    let journal: string = String(((normalizeFieldValue(bibFile_.getEntry(bibkey)?.getField("booktitle")))
        || (normalizeFieldValue(bibFile_.getEntry(bibkey)?.getField("journal"))
            + "-" + normalizeFieldValue(bibFile_.getEntry(bibkey)?.getField("year")))) ?? '')

    let url: string = String(normalizeFieldValue(bibFile_.getEntry(bibkey)?.getField("url")) ?? '')

    return (
        <Card className={classes.root}>
            <Grid container spacing={1} alignContent="space-between" direction="row" alignItems="baseline" >
                <Grid item xs>
                    <CardContent>
                        <Typography gutterBottom>
                            <Box className={classes.title} component="span">
                                {title}
                            </Box>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <Box className={classes.authors} component="span">
                                {authors}
                            </Box>
                        </Typography>
                        <Typography className={classes.subtitle} color="textSecondary">
                            <Box className={classes.subtitle} component="span">
                                {journal}
                            </Box>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardActions>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <MyButton
                                    buttonText="Paper"
                                    buttonTooltip="See Full Paper"
                                    buttonIcon={<SubjectTwoTone />}
                                    onClickFunc={() => window.open(url, '_blank')}
                                />

                            </Grid>
                            <Grid item>
                                <MyButton
                                    buttonText="BibTex"
                                    buttonTooltip="Copy BibTex Citation"
                                    buttonClickedTooltip="BibTeX Copied!"
                                    buttonIcon={<FormatQuote />}
                                    dataClipboardText={bibEntry}
                                    delayToolTipIfButtonClicked />
                            </Grid>
                        </Grid>
                    </CardActions>
                </Grid>
            </Grid>
        </Card >
    );
}
