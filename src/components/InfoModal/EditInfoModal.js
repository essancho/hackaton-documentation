import React from "react";
// import "./EditInfoModal.css";
const EditInfoModal = () => {
    return (
        <div>
            <div className="outer-modal">
                <div className="inner-modal">
                    <input type="text" id="edit-inp-1" placeholder="Title" />
                    <input
                        type="text"
                        id="edit-inp-2"
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        id="edit-inp-3"
                        placeholder="Image Url"
                    />
                    <button id="edit-save">Save Edit</button>
                    <button id="edit-cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditInfoModal;
