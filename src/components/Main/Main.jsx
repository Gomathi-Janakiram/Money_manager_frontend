import React from "react"
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core"
import useStyles from "./styles"
import Form from "./Form/Form"
import List from "./List/List"

function Main() {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance Rs.100</Typography>
                <Typography variant="subtitle1" style={{ lineHeight:"1.5em", marginTop: "20px" }}>Hai</Typography>
                {/* infocard */}
                {/* It divides the content in the top and btm */}
                <Divider />
                <Form/>
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )

}

export default Main