import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
                        <input type="text" placeholder="Поиск" />
                    </div>
                    <a>GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
