/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import { useDrop } from "react-dnd";
import ObjectItem from "./ObjectItem";
import type { FurnitureObjects } from "./types";

import "./styles.css";

interface CanvasBoardProps {
    itemsInCanvasBoard: FurnitureObjects[];
    moveItems: (id: string, top: number, left: number) => void;
    addToCanvasBoard: (
        item: FurnitureObjects,
        top: number,
        left: number
    ) => void;
    removeFromCanvasBoard: (id: string) => void;
}

const CanvasBoard = ({
    itemsInCanvasBoard,
    moveItems,
    addToCanvasBoard,
    removeFromCanvasBoard
}: CanvasBoardProps) => {
    const [, drop] = useDrop({
        accept: "Furniture",
        drop(item: unknown, monitor) {
            const i = item as FurnitureObjects;
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number;
                y: number;
            };

            const canvasBorder = document
                .getElementById("canvas")
                ?.getBoundingClientRect();
            const r = canvasBorder ? canvasBorder.right : 0;
            const l = canvasBorder ? canvasBorder.left : 0;
            const b = canvasBorder ? canvasBorder.bottom : 0;
            const t = canvasBorder ? canvasBorder.top : 0;

            //const left = Math.round(i.left + delta.x);
            let left = 0;
            if (i.left + i.width + delta.x >= r) {
                left = r - i.width;
            } else if (i.left + delta.x <= l) {
                left = l;
            } else {
                left = i.left + delta.x;
            }
            //const top = Math.round(i.top + delta.y);
            let top = 0;
            if (i.top + delta.y <= t) {
                top = t;
            } else if (i.top + i.height + delta.y >= b) {
                top = b - i.height;
            } else {
                top = i.top + delta.y;
            }

            if (i.id.includes("menu")) {
                addToCanvasBoard(i, l, t);
            } else {
                moveItems(i.id, left, top);
            }
            return null;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });

    return (
        <div id="canvas-board">
            <div ref={drop} id="canvas">
                {itemsInCanvasBoard.map((f: FurnitureObjects) => (
                    <ObjectItem
                        removeFromCanvasBoard={removeFromCanvasBoard}
                        key={f.id}
                        item={f}
                    />
                ))}
            </div>
        </div>
    );
};

export default CanvasBoard;
