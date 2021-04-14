import React, { useState, useEffect } from "react";
import "./InfoModal.css";
import { API } from "../../constants";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import EditInfoModal from "./EditInfoModal";
const InfoModal = (props) => {
    let [editModal, setEditModal] = useState(false);
    let [obj, setObj] = useState({});
    useEffect(() => {
        fetch(`${API}/${props.tempId}`)
            .then((res) => res.json())
            .then((data) => {
                let newObj = {
                    title: data.title,
                    desc: data.desc,
                    img: data.img,
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

    return (
        <div className="page-modal">
            {editModal ? <EditInfoModal /> : null}

            <Navbar />
            <div className="main-modal">
                <div className="inner-modal">
                    <h1>Вступление в {obj.title}</h1>
                    <img src={obj.img} />
                    <p>{obj.desc}</p>
                    <button onClick={editInfo}>Edit Information</button>
                    <button onClick={props.modalClose}>Go Back</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InfoModal;
