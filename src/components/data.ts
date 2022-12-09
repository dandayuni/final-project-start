import type {
    BATHTUB,
    CHAIR,
    COFFEETABLE,
    COUCH,
    DINNERTABLE,
    DOUBLEBED,
    FLATTV,
    FRIDGE,
    LAMP,
    PLANT,
    RECTTABLE,
    ROUNDSINK,
    ROUNDTABLE,
    SINGLEBED,
    SINK,
    SQUARESINK,
    STOVE,
    TOILET
} from "./types";
import roundsink from "../furnitures/round_sink.png";
import bathtub from "../furnitures/bathtub.png";
//import box from "../furnitures/box.png";
import coffeetable from "../furnitures/coffee_table.png";
//import coffeetableb from "../furnitures/coffee_table_b.png";
//import coffeetableg from "../furnitures/coffee_table_g.png";
import couch from "../furnitures/couch.png";
//import couchb from "../furnitures/couch_b.png";
//import couchg from "../furnitures/couch_g.png";
//import couchr from "../furnitures/couch_r.png";
//import dinnertableb from "../furnitures/dinner_table_b.png";
//import dinnertableg from "../furnitures/dinner_table_g.png";
//import dinnertabler from "../furnitures/dinner_table_r.png";
import dinnertable from "../furnitures/dinner_table.png";
import doublebed from "../furnitures/double_bed.png";
//import doublebedb from "../furnitures/double_bed_b.png";
//import doublebedg from "../furnitures/double_bed_g.png";
import flattv from "../furnitures/flat_tv.png";
//import flattvb from "../furnitures/flat_tv_b.png";
//import flattvg from "../furnitures/flat_tv_g.png";
import fridge from "../furnitures/fridge.png";
//import fridgeb from "../furnitures/fridge_b.png";
import lamp from "../furnitures/lamp.png";
import plant from "../furnitures/plant.png";
import singlebed from "../furnitures/single_bed.png";
//import singlebedb from "../furnitures/single_bed_b.png";
//import singlebedg from "../furnitures/single_bed_g.png";
import sink from "../furnitures/sink.png";
import stove from "../furnitures/stove.png";
import toilet from "../furnitures/toilet.png";
import chair from "../furnitures/chair.png";
//import chairb from "../furnitures/chair_b.png";
//import chairg from "../furnitures/chair_g.png";
//import chairr from "../furnitures/chair_r.png";
import recttable from "../furnitures/rectangle_table.png";
//import recttableb from "../furnitures/rectangle_table_b.png";
//import recttableg from "../furnitures/rectangle_table_g.png";
//import recttabler from "../furnitures/rectangle_table_r.png";
//import roundsinkb from "../furnitures/round_sink_b.png";
//import roundsinkg from "../furnitures/round_sink_g.png";
import roundtable from "../furnitures/round_table.png";
//import roundtableb from "../furnitures/round_table_b.png";
//import roundtableg from "../furnitures/round_table_g.png";
import squaresink from "../furnitures/square_sink.png";
//import squaresinkb from "../furnitures/square_sink_b.png";

const Bathtub: BATHTUB = {
    id: "menu-bathtub",
    name: "Bathtub",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: bathtub,
    types: "bathroom",
    price: 300
};

const Chair: CHAIR = {
    id: "menu-chair",
    name: "Chair",
    height: 10 * 3,
    width: 10 * 3,
    top: 0,
    left: 0,
    image: chair,
    types: "livingroom",
    price: 150
};

const CoffeeTable: COFFEETABLE = {
    id: "menu-coffee table",
    name: "Coffee Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: coffeetable,
    types: "livingroom",
    price: 200
};

const Couch: COUCH = {
    id: "menu-couch",
    name: "Couch",
    height: 28 * 3,
    width: 46 * 3,
    top: 0,
    left: 0,
    image: couch,
    types: "livingroom",
    price: 400
};

const DinnerTable: DINNERTABLE = {
    id: "menu-dinner table",
    name: "Dinner Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: dinnertable,
    types: "kitchen",
    price: 250
};

const DoubleBed: DOUBLEBED = {
    id: "menu-double bed",
    name: "Double Bed",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: doublebed,
    types: "bedroom",
    price: 400
};

const FlatTV: FLATTV = {
    id: "menu-flatscreen tv",
    name: "Flatscreen TV",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: flattv,
    types: "electronics",
    price: 200
};

const Fridge: FRIDGE = {
    id: "menu-fridge",
    name: "Fridge",
    height: 18 * 3,
    width: 28 * 3,
    top: 0,
    left: 0,
    image: fridge,
    types: "kitchen",
    price: 300
};

const Lamp: LAMP = {
    id: "menu-lamp",
    name: "Lamp",
    height: 12 * 3,
    width: 12 * 3,
    top: 0,
    left: 0,
    image: lamp,
    types: "electronics",
    price: 50
};

const Plant: PLANT = {
    id: "menu-plant",
    name: "Plant",
    height: 12 * 3,
    width: 12 * 3,
    top: 0,
    left: 0,
    image: plant,
    types: "decoration",
    price: 20
};

const RectTable: RECTTABLE = {
    id: "menu-rectangle table",
    name: "Rectangle Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: recttable,
    types: "livingroom",
    price: 100
};

const RoundSink: ROUNDSINK = {
    id: "menu-round sink",
    name: "Round Sink",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: roundsink,
    types: "bathroom/kitchen",
    price: 100
};

const RoundTable: ROUNDTABLE = {
    id: "menu-round table",
    name: "Round Table",
    height: 28 * 3,
    width: 28 * 3,
    top: 0,
    left: 0,
    image: roundtable,
    types: "livingroom",
    price: 200
};

const SingleBed: SINGLEBED = {
    id: "menu-single bed",
    name: "Single Bed",
    height: 24 * 3,
    width: 24 * 3,
    top: 0,
    left: 0,
    image: singlebed,
    types: "bedroom",
    price: 300
};

const Sink: SINK = {
    id: "menu-sink",
    name: "Sink",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: sink,
    types: "kitchen/bathroom",
    price: 100
};

const SquareSink: SQUARESINK = {
    id: "menu-square sink",
    name: "Square Sink",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: squaresink,
    types: "kitchen/bathroom",
    price: 100
};

const Stove: STOVE = {
    id: "menu-stove",
    name: "Stove",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: stove,
    types: "kitchen",
    price: 600
};

const Toilet: TOILET = {
    id: "menu-toilet",
    name: "Toilet",
    height: 10 * 3,
    width: 16 * 3,
    top: 0,
    left: 0,
    image: toilet,
    types: "bathroom",
    price: 100
};

export const Furnitures = [
    Bathtub,
    Chair,
    CoffeeTable,
    Couch,
    DinnerTable,
    DoubleBed,
    FlatTV,
    Fridge,
    Lamp,
    Plant,
    RectTable,
    RoundSink,
    RoundTable,
    SingleBed,
    Sink,
    SquareSink,
    Stove,
    Toilet
];
