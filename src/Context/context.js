import React, { createContext,useEffect, useState } from "react"
import axios from "axios"

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [transactions, setTransactions] = useState([])

    const addTransaction = (data) => {
        axios.post("https://salty-sea-09605.herokuapp.com/post", data)
            .then(res => {
                getTransactions()
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTransactions()
    },[])


    const getTransactions = () => {
        axios.get("https://salty-sea-09605.herokuapp.com/get")
            .then(res => {
                setTransactions(res.data.data)
                // console.log(transactions)
            }).catch(err=>{
                console.log(err)
            })
    }

    // const deleteTransaction=(id)=>{
    //     axios.delete(`https://salty-sea-09605.herokuapp.com/delete/${id}`)
    //     .then(res=>{
    //         getTransactions()
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }

    const balance=transactions.reduce((acc,currVal)=>{
        return (currVal.type==="Expense"?acc-currVal.amount:acc+currVal.amount)
    },0)


    return (
        <ExpenseTrackerContext.Provider value={{
            getTransactions,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

export default Provider

