import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeTransaction,
    createTransaction,
} from "../features/transaction/transactionSlice";

export default function Form() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");
    const [editMode, setEditMode] = useState(false);
    
    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector((state) => state.transaction);
    const { editing } = useSelector((state) => state.transaction) || {};

    //sudhu state update hle kichu hoto na. kintu ekhane editing state update howar upor depend kore onno state update korte hocche. mane editing change hle re-render trigger kolo, shei re-render complete hoye kichu return korar agei abr onno state k change korar command pai(name, type, amount) which again triggers re-renderjetak react allow kore na. karon re-render mane se re-render hoye ekta kihu return korbe. tarpor abar state change hote pare. kintu re-render complete hobar agei state change allow kore na react, resulting in, 'too much re-render error'. ei dhoroner kaj rendering complete hobar por e korte hobe. sejonno e useEffect diyeche React team. jekhane kono state er change jonno onno state k change korte hle rendering er porei kaj ta somponno korbe. tahole state change k ekta control er modde ana gelo. jate kokhon kotha theke ki hocche precisely track kora jai. dhum dham ekta er por update hobe na.
    
    // listen for edit mode active
    useEffect(() => {
        const { id, name, amount, type } = editing || {};
        if (id) {
            setEditMode(true);
            setName(name);
            setType(type);
            setAmount(amount);
        } else {
            setEditMode(false);
            reset();
        }
    }, [editing]);

    const reset = () => {
        setName("");
        setType("");
        setAmount("");
    };

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(
            createTransaction({
                name,
                type,
                amount: Number(amount),
            })
        );
        reset();
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            changeTransaction({
                id: editing?.id,
                data: {
                    name: name,
                    amount: amount,
                    type: type,
                },
            })
        );
        setEditMode(false);
        reset();
    };

    const cancelEditMode = () => {
        reset();
        setEditMode(false);
    };

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={editMode ? handleUpdate : handleCreate}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="enter title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value="income"
                            name="type"
                            checked={type === "income"}
                            onChange={(e) => setType("income")}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === "expense"}
                            onChange={(e) => setType("expense")}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        required
                        placeholder="enter amount"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button disabled={isLoading} className="btn" type="submit">
                    {editMode ? "Update Transaction" : "Add Transaction"}
                </button>

                {!isLoading && isError && (
                    <p className="error">There was an error occured</p>
                )}
            </form>

            {editMode && (
                <button className="btn cancel_edit" onClick={cancelEditMode}>
                    Cancel Edit
                </button>
            )}
        </div>
    );
}
