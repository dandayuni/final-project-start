/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React, { useState, useCallback } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import type { FurnitureObjects } from "./components/types";
import ItemList from "./components/ItemList";
import CanvasBoard from "./components/CanvasBoard";

import "./styles/Layout.css";
import "./styles/index.css";
import { Furnitures } from "./components/data";

interface SavedCanvas {
    id: number;
    furniture: FurnitureObjects[];
}

const Layout = () => {
    /**
     * savedCanvas
     * purpose: state that adds Canvas to a SavedCanvas object array
     * type: SavedCanvas []
     */
    const [savedCanvas] = useState<SavedCanvas[]>([]);
    /**
     * itemsInCanvasBoard, setitemsInCanvasBoard
     * purpose: state that adds current items in a Canvas to FurnitureObjects object array
     * type: itemsInCanvasBoard []
     */
    const [itemsInCanvasBoard, setItemsInCanvasBoard] = useState<
        FurnitureObjects[]
    >([]);

    /**
     * addtoCanvasboard()
     * create a new item and uses the
     * setitemsInCanvasBoard state to update the Items array
     */
    const addToCanvasBoard = (
        item: FurnitureObjects,
        left: number,
        top: number
    ) => {
        const newId = `${item.name}${itemsInCanvasBoard.length + 1}`;
        const newItem = { ...item, id: newId, left: left, top: top };
        const newList = [...itemsInCanvasBoard, newItem];
        setItemsInCanvasBoard(newList);
    };

    /**
     * removeFromCanvasBoard()
     * looks for the item with the given id and filters through the Items array
     * uses setitemsInCanvasBoard state to set new list of items
     */
    const removeFromCanvasBoard = (id: string) => {
        const newItems = itemsInCanvasBoard.filter((f) => f.id !== id);
        setItemsInCanvasBoard(newItems);
    };

    /**
     * clearCanvasBoard()
     * uses setItemsInCanvasBoard state to empty the FurnitureObjects array
     */
    const clearCanvasBoard = () => {
        setItemsInCanvasBoard([]);
    };

    const moveItems = useCallback(
        (id, left, top) => {
            const newItems = itemsInCanvasBoard.map((item) => {
                return item.id === id
                    ? { ...item, top: top, left: left }
                    : item;
            });
            setItemsInCanvasBoard(newItems);
        },
        [itemsInCanvasBoard]
    );

    React.useEffect(() => {
        console.log(itemsInCanvasBoard);
    }, [itemsInCanvasBoard]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div id="grid">
                <div id="logo-container">
                    <h3>Room Design</h3>
                </div>
                <div
                    id="left-menu-container"
                    style={{ backgroundColor: "#ffa100" }}
                >
                    <Container>
                        <Row>
                            <Button
                                style={{ backgroundColor: "ffa100" }}
                                onClick={() => clearCanvasBoard()}
                            >
                                Clear Room
                            </Button>
                        </Row>
                        <ItemList />
                    </Container>
                </div>
                <div id="top-menu-container">
                    <Container></Container>
                </div>
                <div id="main-board-container">
                    <CanvasBoard
                        itemsInCanvasBoard={itemsInCanvasBoard}
                        moveItems={moveItems}
                        addToCanvasBoard={addToCanvasBoard}
                        removeFromCanvasBoard={removeFromCanvasBoard}
                    />
                    Total Cost:
                </div>
            </div>
        </DndProvider>
    );
};

export default Layout;
