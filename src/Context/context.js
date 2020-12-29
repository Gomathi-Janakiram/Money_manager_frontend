import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [transactions, setTransactions] = useState([])

    const addTransaction = (data) => {
        axios.post("http://localhost:4000/post", data)
            .then(res => {
                getTransactions()
            })
            .catch(err => {
                console.log(err)
            })
    }

    // useEffect(() => {
    //     getTransactions()
    // },[transactions])


    const getTransactions = () => {
        axios.get("http://localhost:4000/get")
            .then(res => {
                setTransactions(res.data.data)
                // console.log(transactions)
            }).catch(err=>{
                console.log(err)
            })
    }

    const deleteTransaction=(data)=>{
        axios.delete(`http://localhost:4000/delete`,data._id)
        .then(res=>{
            getTransactions()
        }).catch(err=>{
            console.log(err)
        })
    }

    const balance=transactions.reduce((acc,currVal)=>{
        return (currVal.type==="Expense"?acc-currVal.amount:acc+currVal.amount)
    },0)

    // const addTransaction=(transaction)=>{
    //     dispatch({type:"ADD_TRANSACTION",payload:transaction})
    // }

    return (
        <ExpenseTrackerContext.Provider value={{
            getTransactions,
            addTransaction,
            deleteTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

export default Provider

// const reducer=(state,action)=>{
    //     switch(action.type){
    //         case "DELETE_TRANSACTION":
    //             transactions=axios.delete(`/:${action.payload}`)
    //             .then(res=>{
    //                 console.log(res)
    //                 getData()
    //             }).catch(err=>{
    //                 console.log("error",err)
    //             })
    //         case "ADD_TRANSACTION":
    //             axios.post("/",action.payload)
    //             .then(res=>{
    //                 console.log(res)
    //                 getData()
    //             }).catch(err=>{
    //                 console.log("error",err)
    //             })
    //         default:
    //             break;
    //     }
    // }

    // const postData=()=>{
    //     axios.post("/",)
    // }

    // useEffect(()=>{
    //     getData()
    // })

    // const getData=()=>{
    //     axios.get("/")
    //     .then((res)=>{
    //         console.log(res.data)
    //     })
    // }

    // const [transactions,dispatch]=useReducer(reducer,initialState)

    // const deleteTransaction=(id)=>{
    //     dispatch({type:"DELETE_TRANSACTION" ,payload:id})
    // }
