/* eslint-disable no-extra-parens */
import React from "react";

import ObjectItem from "./ObjectItem";
import type { FurnitureObjects } from "./types";
import { Furnitures, Bathroom, Bedroom, Kitchen } from "./data";
import "./styles.css";
import { Furniture } from "../Interfaces/furniture";

const ItemList = () => {
    return (
        <div id="item-list">
            {Furnitures.map((f: FurnitureObjects) => (
                <div key={f.name}>
                    <p className="item-label">
                        {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                    </p>
                    <ObjectItem item={f} />
                </div>
            ))}
        </div>
    );
};

const ItemList2 = () => {
    return (
        <div id="item-list">
            {Bathroom.map((f: FurnitureObjects) => (
                <div key={f.name}>
                    <p className="item-label">
                        {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                    </p>
                    <ObjectItem item={f} />
                </div>
            ))}
        </div>
    );
};

const ItemList3 = () => {
    return (
        <div id="item-list">
            {Bedroom.map((f: FurnitureObjects) => (
                <div key={f.name}>
                    <p className="item-label">
                        {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                    </p>
                    <ObjectItem item={f} />
                </div>
            ))}
        </div>
    );
};

const ItemList4 = () => {
    return (
        <div id="item-list">
            {Kitchen.map((f: FurnitureObjects) => (
                <div key={f.name}>
                    <p className="item-label">
                        {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                    </p>
                    <ObjectItem item={f} />
                </div>
            ))}
        </div>
    );
};

export default { ItemList, ItemList2, ItemList3, ItemList4 };
