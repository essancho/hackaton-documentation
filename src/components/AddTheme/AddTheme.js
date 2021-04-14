import React, { useState } from "react";
import "./AddTheme.css";
import { API } from "../../constants";
const AddTheme = (props) => {
    // let tempCount = 0;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [count, setCount] = useState(0);

    // function addCount(props) {
    //     tempCount++;
    //     setCount(tempCount);
    // }
    function handleTitle(e) {
        setTitle(e.target.value);
    }
    function handleDesc(e) {
        setDesc(e.target.value);
    }
    function handleImg(e) {
        setImg(e.target.value);
    }
    function addToJson() {
        // props.setState({});
        // addCount();
        // props.focus();
        let newTheme = {
            title,
            desc,
            img,
            id: Date.now(),
        };

        fetch(API, {
            method: "POST",
            body: JSON.stringify(newTheme),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => props.fetchData(API));
    }

    return (
        <div>
            <input
                onChange={handleTitle}
                type="text"
                className="input-style inp-theme-title"
            />
            <input
                onChange={handleDesc}
                type="text"
                className="input-style inp-theme-desc"
            />
            <input
                onChange={handleImg}
                type="text"
                className="input-style inp-theme-img"
            />
            <button onClick={addToJson} className="button-style add-theme">
                Add Theme
            </button>
        </div>
    );
};

export default AddTheme;
