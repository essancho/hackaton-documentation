import React, { useState, useEffect, useRef } from "react";
import "./SendTheme.css";
import { API } from "../../constants";
const SendTheme = (props) => {
    function deleteItem(id) {
        fetch(`${API}/${id}`, {
            method: "DELETE",
        }).then(() => props.fetchData(API));
    }
    return (
        <div>
            <div className="themes">
                {props.items.length > 0
                    ? props.items.map((item, index) => (
                          <div className="theme-buttons">
                              <button
                                  id={item.id}
                                  onClick={() => props.clicked(item.id)}
                                  className="btn-theme"
                                  key={index}
                              >
                                  {item.title}
                              </button>
                              <button
                                  className="btn-delete"
                                  onClick={() => {
                                      deleteItem(item.id);
                                  }}
                                  id={`${item.id}-delete`}
                              >
                                  Delete
                              </button>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default SendTheme;
