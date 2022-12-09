/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, ReactDOM } from "react";
import { useDrag } from "react-dnd";

import type { FurnitureObjects } from "./types";

interface FurnitureItemProps {
    item: FurnitureObjects;
    removeFromCanvasBoard?: (id: string) => void;
}

const ObjectItem = ({ item, removeFromCanvasBoard }: FurnitureItemProps) => {
    const { id, name, price, left, top, height, width, image } = item;
    const [position, setPosition] = useState({ top: top, left: left });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const elem = document.getElementById(item.id)?.getBoundingClientRect();
        const t = elem ? elem.y : 0;
        const l = elem ? elem.x : 0;
        setPosition({ top: t, left: l });
    }, []);

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: "Furniture",
            id,
            name,
            price,
            left: id.includes("menu") ? position.left : left,
            top: id.includes("menu") ? position.top : top,
            height,
            width,
            image
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const styles: Record<string, unknown> = {
        position: id.includes("menu") ? "static" : "absolute",
        left,
        top,
        height: id.includes("menu") ? height / 2 : height,
        width: id.includes("menu") ? width / 2 : width,
        margin: 0
    };

    const showDimensionsAndIcon = isHovered && !id.includes("menu");

    return (
        <div
            id={item.id}
            style={styles}
            ref={drag}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img style={{ width: "100%" }} src={item.image}></img>
            <div style={{ width: "100%", height: "100%" }}>
                {showDimensionsAndIcon && (
                    <>
                        <p className="price-label">P: {price} Dollars</p>
                        <p className="dimensions-label">
                            H: {height / 3} inches
                        </p>
                        <p className="dimensions-label">
                            W: {width / 3} inches
                        </p>
                    </>
                )}
                {showDimensionsAndIcon && (
                    <p
                        id="remove-button"
                        onClick={() =>
                            removeFromCanvasBoard && removeFromCanvasBoard(id)
                        }
                    >
                        Remove
                    </p>
                )}
            </div>
        </div>
    );
};

export default ObjectItem;
