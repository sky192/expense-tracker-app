import { useEffect, useState } from "react";

const TransActionComponent = (props) => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredTnx, setFilteredTnx] = useState(props.transactions);
    // tnx => all tnx should be saved ,
    // search item => !!
    const filterTransactions = (search) => {
        if (!search || search === "") {
            setFilteredTnx(props.transactions);
            return;
        }
        const filtered = props.transactions.filter((t) =>
            t.desc.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredTnx(filtered);
    };

    const changeHandler = (e) => {
        setSearchItem(e.target.value);
        filterTransactions(e.target.value);
        // filter !!!
    };

    useEffect(() => {
        filterTransactions(searchItem);
    }, [props.transactions]);

    if (!props.transactions.length) return <h3>add some tnx</h3>;

    return (
        <section>
            <input
                type="text"
                value={searchItem}
                onChange={changeHandler}
                placeholder="search for tnx..."
                className="search"
            />
            {filteredTnx.length
                ? filteredTnx.map((t) => (
                      <div
                          key={t.id}
                          className="transaction"
                          style={{
                              borderRight:
                                  t.type === "expense" && "4px solid red",
                          }}
                      >
                          <span>{t.desc}</span>
                          <span>$ {t.amount}</span>
                      </div>
                  ))
                : "no item matchs !"}
        </section>
    );
};

export default TransActionComponent;
