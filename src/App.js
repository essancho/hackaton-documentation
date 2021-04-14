import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import AddTheme from "./components/AddTheme/AddTheme";
import InfoModal from "./components/InfoModal/InfoModal";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SendTheme from "./components/SendTheme/SendTheme";
import { API } from "./constants";
let tempCount = [];
function App() {
    let tempCount = 0;
    let renderCount = useRef(0);
    let [state, setState] = useState({});
    const [items, setItems] = useState([]);
    let [count, setCount] = useState(0);
    let [modal, setModal] = useState(false);
    let [addItem, setAddItem] = useState(false);
    let [tempId, setTempId] = useState(null);
    let [search, setSearch] = useState("");
    function deleteTheme(id) {
        fetch(`${API}/${id}`, {
            method: "DELETE",
        });
        fetchData();
    }
    function modalClose() {
        setModal(false);
    }

    function addClose() {
        setAddItem(false);
    }

    // function focus() {
    //     let count = state;
    //     count++;
    //     setState(count);

    // renderCount.current = renderCount.current + 1;
    // console.log(renderCount);
    // }
    function clicked(id) {
        setTempId(id);
        setModal(true);
    }
    function addClick() {
        setAddItem(true);
    }
    function closeAdd() {
        setAddItem(false);
    }
    let totalItems = 0;
    const fetchData = async (url) => {
        console.log("asd");
        const res = await fetch(url);
        const data = await res.json();
        setItems(data);
    };

    useEffect(() => {
        fetchData(API);
    }, []);
    totalItems = items.length;
    useEffect(() => {
        fetchData(`${API}/?q=${search}&_page=1&_limit=${limit}`);
    }, [search]);

    let [limit, setLimit] = useState(9);
    function pagination() {
        if (limit > totalItems) {
            return null;
        } else {
            let limitP = limit + 6;
            setLimit(limitP);
            console.log(limit);
        }
    }

    useEffect(() => {
        fetchData(`${API}/?q=${search}&_page=1&_limit=${limit}`);
    }, [limit]);

    // function searchItem(e) {
    //     fetchData(`${API}/?_q${search}`);
    // }

    // function receiveCount() {
    //     tempCount++;
    //     setCount(tempCount);
    //     console.log(count);
    // }
    return (
        <div className="App">
            {modal ? null : <Navbar setSearch={setSearch} />}
            <div className="div-btn">
                <button className="main-btn" onClick={addClick} on>
                    + Add Theme
                </button>
                {addItem ? (
                    <AddTheme
                        limit={limit}
                        closeAdd={closeAdd}
                        setAddItem={setAddItem}
                        setState={setState}
                        fetchData={fetchData}
                    />
                ) : null}
            </div>
            {!modal ? (
                <SendTheme
                    fetchData={fetchData}
                    deleteTheme={deleteTheme}
                    items={items}
                    clicked={clicked}
                />
            ) : null}

            {modal ? (
                <InfoModal
                    modalClose={modalClose}
                    tempId={tempId}
                    fetchData={fetchData}
                    setItems={setItems}
                    items={items}
                    fetchData={fetchData}
                />
            ) : null}
            <div className="div-btn">
                {!modal ? (
                    <button
                        onClick={() => {
                            pagination();
                        }}
                        id="load-more"
                    >
                        Load More
                    </button>
                ) : null}
            </div>

            {modal ? null : <Footer />}
        </div>
    );
}

export default App;
