/* eslint-disable no-extra-parens */
import React from "react";

import ObjectItem from "./ObjectItem";
import type { FurnitureObjects } from "./types";
import { Furnitures } from "./data";
import "./styles.css";
import { Filter } from "./filter";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const filters: Filter[] = [
    "all",
    "livingroom",
    "bathroom",
    "kitchen",
    "bedroom",
    "electronics"
];

const ItemList = () => {
    const [filterChoice, setFilterChoice] = useState<Filter>("all");
    const [filteredFurniture, setFilteredFurniture] =
        useState<FurnitureObjects[]>(Furnitures);
    const [isSorted, setIsSorted] = useState<boolean>(false);

    useEffect(() => {
        let newFilteredFurniture;
        if (filterChoice === "all") {
            newFilteredFurniture = [...Furnitures];
        } else {
            newFilteredFurniture = Furnitures.filter((f: FurnitureObjects) =>
                f.types
                    .toLowerCase()
                    .includes(filterChoice.toLowerCase().slice(0, -1))
            );
        }

        if (isSorted) {
            newFilteredFurniture = newFilteredFurniture.sort((a, b) =>
                a.types.localeCompare(b.types)
            );
        }
        setFilteredFurniture(newFilteredFurniture);
    }, [filterChoice, isSorted]);

    const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterChoice(event.target.value as Filter);
    };

    <div id="furniture-list">
        <Form.Group controlId="forFurnitureSelection">
            <Form.Label
                style={{
                    fontSize: 24,
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 24
                }}
            >
                Furniture Type:
            </Form.Label>
            <Form.Select value={filterChoice} onChange={updateFilter}>
                {filters.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
        <Form.Group
            style={{
                width: "100%",
                alignSelf: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                marginBottom: 10
            }}
            controlId="forSortedMode"
        >
            <Form.Label style={{ fontSize: 18, color: "white" }}>
                Sort By Color:
            </Form.Label>
            <Form.Switch
                type="switch"
                id="sorted-mode"
                onChange={() => setIsSorted(!isSorted)}
                checked={isSorted}
            />
        </Form.Group>
    </div>;

    return (
        <div>
            <div id="item-list">
                <Form.Group controlId="forFurnitureSelection">
                    <Form.Label
                        style={{
                            fontSize: 24,
                            color: "white",
                            fontWeight: "bold",
                            marginTop: 24
                        }}
                    >
                        Furniture Type:
                    </Form.Label>
                    <Form.Select value={filterChoice} onChange={updateFilter}>
                        {filters.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {filteredFurniture.map((f: FurnitureObjects) => (
                    <div key={f.name}>
                        <p className="item-label">
                            {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                        </p>
                        <ObjectItem item={f} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
