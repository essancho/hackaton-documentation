import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <div>
            <div className="nav">
                <p>
                    Maker<span className="a">s</span>{" "}
                    <span className="b"> Documentation</span>
                </p>
                <div className="nav-info">
                    <a>Главная</a>
                    <a>Документация</a>
                    <a>Добавить</a>

                    <div className="nav-inp">
                        <input
                            onChange={(e) => {
                                props.setSearch(e.target.value);
                            }}
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <a>GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
