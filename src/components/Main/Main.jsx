import React, { useContext } from "react"
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core"
import { ExpenseTrackerContext } from "../../Context/context";
import useStyles from "./styles"
import Form from "./Form/Form"
import List from "./List/List"

function Main() {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>
            <CardHeader title="Money Manager" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance {balance}</Typography>
                <Typography variant="subtitle1" style={{ textAlign: "center", lineHeight: "1.5em", marginTop: "20px" }}>
                    He who buys what he does not need steals from himself
                </Typography>
                {/*from materialui-- It divides the content in the top and btm */}
                <Divider />
                {/* form */}
                <Form />   
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )

}

export default Main