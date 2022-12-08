export interface BATHTUB {
    id: string;
    name: "Bathtub";
    top: number;
    height: number;
    width: number;
    left: number;
    // color: string;
    image: string;
}

export interface CHAIR {
    id: string;
    name: "Chair";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface COFFEETABLE {
    id: string;
    name: "Coffee Table";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface COUCH {
    id: string;
    name: "Couch";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface DINNERTABLE {
    id: string;
    name: "Dinner Table";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface DOUBLEBED {
    id: string;
    name: "Double Bed";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface FLATTV {
    id: string;
    name: "Flatscreen TV";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface FRIDGE {
    id: string;
    name: "Fridge";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface LAMP {
    id: string;
    name: "Lamp";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface PLANT {
    id: string;
    name: "Plant";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface RECTTABLE {
    id: string;
    name: "Rectangle Table";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface ROUNDSINK {
    id: string;
    name: "Round Sink";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface ROUNDTABLE {
    id: string;
    name: "Round Table";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface SINGLEBED {
    id: string;
    name: "Single Bed";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface SINK {
    id: string;
    name: "Sink";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface SQUARESINK {
    id: string;
    name: "Square Sink";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface STOVE {
    id: string;
    name: "Stove";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export interface TOILET {
    id: string;
    name: "Toilet";
    height: number;
    width: number;
    top: number;
    left: number;
    // color: string;
    image: string;
}

export type FurnitureObjects =
    | BATHTUB
    | CHAIR
    | COFFEETABLE
    | COUCH
    | DINNERTABLE
    | DOUBLEBED
    | FLATTV
    | FRIDGE
    | LAMP
    | PLANT
    | RECTTABLE
    | ROUNDSINK
    | ROUNDTABLE
    | SINGLEBED
    | SINK
    | SQUARESINK
    | STOVE
    | TOILET;
