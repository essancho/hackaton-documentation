import React, { useState, useEffect } from "react";
import { API } from "../../constants";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./InfoModal.css";
import EditInfo from "./EditInfo/EditInfo";
const InfoModal = (props) => {
    let [editId, setEditId] = useState(0);
    let [editModal, setEditModal] = useState(false);
    let [obj, setObj] = useState({});
    useEffect(() => {
        fetch(`${API}/${props.tempId}`)
            .then((res) => res.json())
            .then((data) => {
                setEditId(props.tempId);
                let newObj = {
                    title: data.title,
                    desc: data.desc,
                    img: data.img,
                    id: data.id,
                };
                setObj(newObj);
            });
    }, []);
    let [editedInfo, setEditedInfo] = useState({});

    function editInfo() {
        setEditModal(true);
    }
    // function editOnClick(id) {
    //         fetch(`${API}/${props.tempId}`, {
    //             method: "PATCH",
    //             body:
    //         }).then(() => props.fetchData(API));
    //     }
    // }
    function closeEditModal() {
        setEditModal(false);
    }

    return (
        <div className="page-modal">
            {editModal ? (
                <EditInfo
                    fetchData={props.fetchData}
                    closeEditModal={closeEditModal}
                    editId={editId}
                    obj={obj}
                    setObj={setObj}
                />
            ) : null}

            <Navbar />
            <div className="main-modal">
                <div className="inner-modal">
                    <button onClick={editInfo}>Edit Information</button>
                    <button onClick={props.modalClose}>Go Back</button>
                    <h1>Вступление в {obj.title}</h1>
                    <img src={obj.img} />
                    <p className="p-info-p">{obj.desc}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InfoModal;
