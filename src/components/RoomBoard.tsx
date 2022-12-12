/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import { useDrop, DragSourceMonitor, DragObjectWithType } from "react-dnd";
import FurnitureItem from "./FurnitureItem";
import type { FurnitureObjects } from "./types";

import "./styles.css";

interface RoomBoardProps {
    furnitureInRoomBoard: FurnitureObjects[];
    moveFurniture: (id: string, top: number, left: number) => void;
    addToRoomBoard: (item: FurnitureObjects, top: number, left: number) => void;
    removeFromRoomBoard: (id: string) => void;
    roomChoice: string;
}

const RoomBoard = ({
    roomChoice,
    furnitureInRoomBoard,
    moveFurniture,
    addToRoomBoard,
    removeFromRoomBoard
}: RoomBoardProps) => {
    const [, drop] = useDrop({
        accept: "Furniture",
        drop(item: unknown, monitor) {
            const i = item as FurnitureObjects;
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number;
                y: number;
            };

            const roomElement = document.getElementById(roomChoice);
            if (roomElement) {
                const roomBounds = roomElement.getBoundingClientRect()
                    ? roomElement.getBoundingClientRect()
                    : 0;
                if (roomBounds !== 0) {
                    console.log(roomBounds.left);
                    const left =
                        Math.round(i.left + i.width + delta.x) <=
                            roomBounds.right &&
                        Math.round(i.left + delta.x) >= roomBounds.left
                            ? Math.round(i.left + delta.x)
                            : i.left;
                    console.log(left);
                    const top =
                        Math.round(i.top + delta.y) >= roomBounds.top &&
                        Math.round(i.top + i.height + delta.y) <=
                            roomBounds.bottom
                            ? Math.round(i.top + delta.y)
                            : i.top;
                    console.log(top);
                    if (i.id.includes("menu")) {
                        addToRoomBoard(i, left, top);
                    } else {
                        moveFurniture(i.id, left, top);
                    }
                }
            }
            return null;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    return (
        <div id="room-board">
            <div ref={drop} id={roomChoice}>
                {furnitureInRoomBoard.map((f: FurnitureObjects) => (
                    <FurnitureItem
                        removeFromRoomBoard={removeFromRoomBoard}
                        key={f.id}
                        item={f}
                    />
                ))}
            </div>
        </div>
    );
};

export default RoomBoard;
