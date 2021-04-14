import React, { useState, useEffect, useRef } from "react";
import "./SendTheme.css";
import { API } from "../../constants";
const SendTheme = (props) => {
    function showDelete() {}
    function deleteItem(id) {
        fetch(`${API}/${id}`, {
            method: "DELETE",
        }).then(() => props.fetchData(API));
    }
    return (
        <div>
            {props.items.length > 0
                ? props.items.map((item, index) => (
                      <div>
                          <button
                              id={item.id}
                              onMouseEnter={showDelete}
                              onClick={() => props.clicked(item.id)}
                              className="btn-theme"
                              key={index}
                          >
                              {item.title}
                          </button>
                          <button
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
    );
};

export default SendTheme;
