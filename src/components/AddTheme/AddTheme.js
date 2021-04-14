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
        if (!title || !desc || !img) {
            alert("please fill in all the forms");
            return;
        }
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
        }).then(() =>
            props.fetchData(`${API}?q=&_page=1&_limit=${props.limit}`)
        );
        props.closeAdd();
    }

    return (
        <div className="theme-modal">
            <div className="theme-inner-modal">
                <input
                    onChange={handleTitle}
                    placeholder="Theme title"
                    type="text"
                    className="input-style inp-theme-title"
                />
                <textarea
                    onChange={handleDesc}
                    placeholder="theme description"
                    type="text"
                    className="input-style inp-theme-desc"
                ></textarea>
                <input
                    onChange={handleImg}
                    placeholder="Image URL"
                    type="text"
                    className="input-style inp-theme-img"
                />
                <div>
                    <button
                        onClick={addToJson}
                        className="button-style add-theme"
                    >
                        Add Theme
                    </button>
                    <button className="load-more" onClick={props.closeAdd}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTheme;
