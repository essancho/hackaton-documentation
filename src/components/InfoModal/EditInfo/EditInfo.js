import React, { useState, useEffect } from "react";
import "./EditInfo.css";
import { API } from "../../../constants";

const EditInfo = (props) => {
    let [obj, setObj] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    // function onEditClick() {
    //     useEffect(() => {
    //         fetch(`${API}/${props.editId}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 let newObj = {
    //                     title: data.title,
    //                     desc: data.desc,
    //                     img: data.img,
    //                     id: data.id,
    //                 };
    //                 setObj(newObj);
    //             });
    //     }, []);
    // }
    function handleTitle(e) {
        setTitle(e.target.value);
        console.log(e.target.value);
    }
    function handleDesc(e) {
        setDesc(e.target.value);
        console.log(e.target.value);
    }
    function handleImg(e) {
        setImg(e.target.value);
        console.log(e.target.value);
    }
    function onEditDown() {
        if (!title || !desc || !img) {
            alert("please fill in all the forms");
            return;
        }
        let newObj = {
            title,
            desc,
            img,
        };
        setObj(newObj);
        fetch(`${API}/${props.editId}`, {
            method: "PATCH",
            body: JSON.stringify(newObj),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => props.fetchData(API));
        props.setObj(newObj);
        props.closeEditModal();
    }

    // console.log(props.fetchData(API), " eto fetch data");
    // function fetchEdit() {
    //     console.log(obj, " fetchEdit obj");
    //     fetch(`${API}/${props.editId}`, {
    //         method: "PATCH",
    //         body: JSON.stringify(obj),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).then(() => props.fetchData(API));
    //     props.closeEditModal();
    // }

    console.log(obj);
    return (
        <div className="editing-modal">
            <div className="editing-inner-modal">
                <input
                    onChange={handleTitle}
                    id="edit-inp-1"
                    type="text"
                    placeholder="Edit Title"
                    // value={props.obj.title}
                />
                <textarea
                    onChange={handleDesc}
                    id="edit-inp-2"
                    type="text"
                    placeholder="Edit Description"
                    // value={props.obj.desc}
                />
                <input
                    onChange={handleImg}
                    id="edit-inp-2"
                    type="text"
                    placeholder="Enter new Img URL"
                    // value={props.obj.img}
                />
                <div>
                    <button
                        onClick={async () => {
                            onEditDown();
                            // fetchEdit();
                        }}
                        // onMouseDown={onEditDown}
                        // onMouseUp={fetchEdit}
                    >
                        Save Edit
                    </button>
                    <button onClick={props.closeEditModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditInfo;
