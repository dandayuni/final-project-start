/* eslint-disable no-extra-parens */
import React from "react";

import ObjectItem from "./ObjectItem";
import type { FurnitureObjects } from "./types";
import { Furnitures } from "./data";
import "./styles.css";

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

export default ItemList;
