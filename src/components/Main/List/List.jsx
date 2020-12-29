import React, {useContext} from "react"
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,Slide} from "@material-ui/core"
import {MoneyOff} from "@material-ui/icons"
import useStyles from "./styles"
import {ExpenseTrackerContext} from "../../../Context/context"

function List(){
    const classes=useStyles()
    const {transactions}=useContext(ExpenseTrackerContext)
    return(
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=>{
                return(
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type==="Income"?classes.avatarIncome:classes.avatarExpense}>
                                    <MoneyOff/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} -${transaction.date}`}/>
                            {/* <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete"  onClick={()=>{deleteTransaction(transaction._id)}}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction> */}
                        </ListItem>
                    </Slide>
                )
            })}    
        </MUIList>
    )
}

export default List