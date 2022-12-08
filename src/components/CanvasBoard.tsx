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

            const left = Math.round(i.left + delta.x);
            const top = Math.round(i.top + delta.y);

            if (i.id.includes("menu")) {
                addToCanvasBoard(i, left, top);
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
