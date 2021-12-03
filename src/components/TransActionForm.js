import { useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
    // type : , amount, desc
    const [formValues, setFormValues] = useState({
        type: "expense",
        amount: "",
        desc: "",
    });

    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addTransaction(formValues);
        setIsShow(false);
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <input
                type="text"
                name="desc"
                onChange={changeHandler}
                value={formValues.desc}
                placeholder="description"
            />
            <input
                type="number"
                name="amount"
                onChange={changeHandler}
                value={formValues.amount}
                placeholder="amount"
            />
            <div className="radioBox">
                <input
                    type="radio"
                    value="expense"
                    name="type"
                    checked={formValues.type === "expense"}
                    onChange={changeHandler}
                    id="expense"
                />
                <label htmlFor="expense">Expense</label>
                <input
                    type="radio"
                    value="income"
                    name="type"
                    checked={formValues.type === "income"}
                    onChange={changeHandler}
                    id="income"
                />
                <label htmlFor="income">Income</label>
            </div>
            <button className="btn primary" type="submit">
                Add transaction
            </button>
        </form>
    );
};

export default TransActionForm;
