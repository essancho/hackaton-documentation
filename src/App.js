import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import AddTheme from "./components/AddTheme/AddTheme";
import InfoModal from "./components/InfoModal/InfoModal";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SendTheme from "./components/SendTheme/SendTheme";
import { API } from "./constants";
// let tempCount = [];
function App() {
    let tempCount = 0;
    let renderCount = useRef(0);
    let [state, setState] = useState({});
    const [items, setItems] = useState([]);
    let [count, setCount] = useState(0);
    let [modal, setModal] = useState(false);
    let [addItem, setAddItem] = useState(false);
    let [tempId, setTempId] = useState(null);
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

    const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setItems(data);
    };

    useEffect(() => {
        fetchData(API);
    }, []);

    // function receiveCount() {
    //     tempCount++;
    //     setCount(tempCount);
    //     console.log(count);
    // }
    return (
        <div className="App">
            <Navbar />
            <button clicked={clicked} on>
                Add Theme
            </button>
            <AddTheme
                setAddItem={setAddItem}
                setState={setState}
                fetchData={fetchData}
            />

            <SendTheme
                fetchData={fetchData}
                deleteTheme={deleteTheme}
                items={items}
                clicked={clicked}
            />
            {modal ? (
                <InfoModal
                    modalClose={modalClose}
                    tempId={tempId}
                    fetchData={fetchData}
                    setItems={setItems}
                    items={items}
                />
            ) : null}
            <Footer />
        </div>
    );
}

export default App;
