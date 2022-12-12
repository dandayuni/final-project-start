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
// import box from "../furnitures/box.png";
import coffeetable from "../furnitures/coffee_table.png";
import coffeetableb from "../furnitures/coffee_table_B.png";
import coffeetableg from "../furnitures/coffee_table_G.png";
import couch from "../furnitures/couch.png";
import couchb from "../furnitures/couch_B.png";
import couchg from "../furnitures/couch_G.png";
import couchr from "../furnitures/couch_R.png";
import dinnertableb from "../furnitures/dinner_table_B.png";
import dinnertableg from "../furnitures/dinner_table_G.png";
import dinnertabler from "../furnitures/dinner_table_R.png";
import dinnertable from "../furnitures/dinner_table.png";
import doublebed from "../furnitures/double_bed.png";
import doublebedb from "../furnitures/double_bed_B.png";
import doublebedg from "../furnitures/double_bed_G.png";
import flattv from "../furnitures/flat_tv.png";
import flattvb from "../furnitures/flat_tv_B.png";
import flattvg from "../furnitures/flat_tv_G.png";
import fridge from "../furnitures/fridge.png";
import fridgeb from "../furnitures/fridge_B.png";
import lamp from "../furnitures/lamp.png";
import plant from "../furnitures/plant.png";
import singlebed from "../furnitures/single_bed.png";
import singlebedb from "../furnitures/single_bed_B.png";
import singlebedg from "../furnitures/single_bed_G.png";
import sink from "../furnitures/sink.png";
import stove from "../furnitures/stove.png";
import toilet from "../furnitures/toilet.png";
import chair from "../furnitures/chair.png";
import chairb from "../furnitures/chair_B.png";
import chairg from "../furnitures/chair_G.png";
import chairr from "../furnitures/chair_R.png";
import recttable from "../furnitures/rectangle_table.png";
import recttableb from "../furnitures/rectangle_table_B.png";
import recttableg from "../furnitures/rectangle_table_G.png";
import recttabler from "../furnitures/rectangle_table_R.png";
import roundsinkb from "../furnitures/round_sink_B.png";
import roundsinkg from "../furnitures/round_sink_G.png";
import roundtable from "../furnitures/round_table.png";
import roundtableb from "../furnitures/round_table_B.png";
import roundtableg from "../furnitures/round_table_G.png";
import squaresink from "../furnitures/square_sink.png";
import squaresinkb from "../furnitures/square_sink_B.png";

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
    name: "Black Chair",
    height: 10 * 3,
    width: 10 * 3,
    top: 0,
    left: 0,
    image: chair,
    types: "livingroom",
    price: 150
};

const ChairB: CHAIR = {
    id: "menu-chair",
    name: "Blue Chair",
    height: 10 * 3,
    width: 10 * 3,
    top: 0,
    left: 0,
    image: chairb,
    types: "livingroom",
    price: 0
};

const ChairG: CHAIR = {
    id: "menu-chair",
    name: "Green Chair",
    height: 10 * 3,
    width: 10 * 3,
    top: 0,
    left: 0,
    image: chairg,
    types: "livingroom",
    price: 0
};

const ChairR: CHAIR = {
    id: "menu-chair",
    name: "Red Chair",
    height: 10 * 3,
    width: 10 * 3,
    top: 0,
    left: 0,
    image: chairr,
    types: "livingroom",
    price: 0
};

const CoffeeTable: COFFEETABLE = {
    id: "menu-coffee table",
    name: "Black Coffee Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: coffeetable,
    types: "livingroom",
    price: 200
};

const CoffeeTableB: COFFEETABLE = {
    id: "menu-coffee table",
    name: "Blue Coffee Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: coffeetableb,
    types: "livingroom",
    price: 0
};

const CoffeeTableG: COFFEETABLE = {
    id: "menu-coffee table",
    name: "Green Coffee Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: coffeetableg,
    types: "livingroom",
    price: 0
};

const Couch: COUCH = {
    id: "menu-couch",
    name: "Black Couch",
    height: 28 * 3,
    width: 46 * 3,
    top: 0,
    left: 0,
    image: couch,
    types: "livingroom",
    price: 400
};

const CouchB: COUCH = {
    id: "menu-couchb",
    name: "Blue Couch",
    height: 28 * 3,
    width: 46 * 3,
    top: 0,
    left: 0,
    image: couchb,
    types: "livingroom",
    price: 0
};

const CouchG: COUCH = {
    id: "menu-couch",
    name: "Green Couch",
    height: 28 * 3,
    width: 46 * 3,
    top: 0,
    left: 0,
    image: couchg,
    types: "livingroom",
    price: 0
};

const CouchR: COUCH = {
    id: "menu-couch",
    name: "Red Couch",
    height: 28 * 3,
    width: 46 * 3,
    top: 0,
    left: 0,
    image: couchr,
    types: "livingroom",
    price: 0
};

const DinnerTable: DINNERTABLE = {
    id: "menu-dinner table",
    name: "Black Dinner Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: dinnertable,
    types: "kitchen",
    price: 250
};

const DinnerTableG: DINNERTABLE = {
    id: "menu-dinner table",
    name: "Green Dinner Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: dinnertableg,
    types: "kitchen",
    price: 0
};

const DinnerTableB: DINNERTABLE = {
    id: "menu-dinner table",
    name: "Blue Dinner Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: dinnertableb,
    types: "kitchen",
    price: 0
};

const DinnerTableR: DINNERTABLE = {
    id: "menu-dinner table",
    name: "Red Dinner Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: dinnertabler,
    types: "kitchen",
    price: 0
};

const DoubleBed: DOUBLEBED = {
    id: "menu-double bed",
    name: "Black Double Bed",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: doublebed,
    types: "bedroom",
    price: 400
};

const DoubleBedB: DOUBLEBED = {
    id: "menu-double bed",
    name: "Blue Double Bed",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: doublebedb,
    types: "bedroom",
    price: 0
};

const DoubleBedG: DOUBLEBED = {
    id: "menu-double bed",
    name: "Red Double Bed",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: doublebedg,
    types: "bedroom",
    price: 0
};

const FlatTV: FLATTV = {
    id: "menu-flatscreen tv",
    name: "Black Flatscreen TV",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: flattv,
    types: "electronics",
    price: 200
};

const FlatTVB: FLATTV = {
    id: "menu-flatscreen tv",
    name: "Blue Flatscreen TV",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: flattvb,
    types: "electronics",
    price: 0
};

const FlatTVG: FLATTV = {
    id: "menu-flatscreen tv",
    name: "Green Flatscreen TV",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: flattvg,
    types: "electronics",
    price: 0
};

const Fridge: FRIDGE = {
    id: "menu-fridge",
    name: "Black Fridge",
    height: 18 * 3,
    width: 28 * 3,
    top: 0,
    left: 0,
    image: fridge,
    types: "kitchen",
    price: 300
};

const FridgeB: FRIDGE = {
    id: "menu-fridge",
    name: "Blue Fridge",
    height: 18 * 3,
    width: 28 * 3,
    top: 0,
    left: 0,
    image: fridgeb,
    types: "kitchen",
    price: 0
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
    name: "Black Rectangle Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: recttable,
    types: "livingroom",
    price: 100
};

const RectTableB: RECTTABLE = {
    id: "menu-rectangle table",
    name: "Blue Rectangle Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: recttableb,
    types: "livingroom",
    price: 0
};

const RectTableG: RECTTABLE = {
    id: "menu-rectangle table",
    name: "Green Rectangle Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: recttableg,
    types: "livingroom",
    price: 0
};

const RectTableR: RECTTABLE = {
    id: "menu-rectangle table",
    name: "Red Rectangle Table",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    image: recttabler,
    types: "livingroom",
    price: 0
};

const RoundSink: ROUNDSINK = {
    id: "menu-round sink",
    name: "Black Round Sink",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: roundsink,
    types: "bathroom/kitchen",
    price: 100
};

const RoundSinkB: ROUNDSINK = {
    id: "menu-round sink",
    name: "Blue Round Sink",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: roundsinkb,
    types: "bathroom/kitchen",
    price: 0
};

const RoundSinkG: ROUNDSINK = {
    id: "menu-round sink",
    name: "Green Round Sink",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: roundsinkg,
    types: "bathroom/kitchen",
    price: 0
};

const RoundTable: ROUNDTABLE = {
    id: "menu-round table",
    name: "Black Round Table",
    height: 28 * 3,
    width: 28 * 3,
    top: 0,
    left: 0,
    image: roundtable,
    types: "livingroom",
    price: 200
};

const RoundTableB: ROUNDTABLE = {
    id: "menu-round table",
    name: "Blue Round Table",
    height: 28 * 3,
    width: 28 * 3,
    top: 0,
    left: 0,
    image: roundtableb,
    types: "livingroom",
    price: 0
};

const RoundTableG: ROUNDTABLE = {
    id: "menu-round table",
    name: "Green Round Table",
    height: 28 * 3,
    width: 28 * 3,
    top: 0,
    left: 0,
    image: roundtableg,
    types: "livingroom",
    price: 0
};

const SingleBed: SINGLEBED = {
    id: "menu-single bed",
    name: "Black Single Bed",
    height: 24 * 3,
    width: 24 * 3,
    top: 0,
    left: 0,
    image: singlebed,
    types: "bedroom",
    price: 300
};

const SingleBedB: SINGLEBED = {
    id: "menu-single bed",
    name: "Blue Single Bed",
    height: 24 * 3,
    width: 24 * 3,
    top: 0,
    left: 0,
    image: singlebedb,
    types: "bedroom",
    price: 0
};

const SingleBedG: SINGLEBED = {
    id: "menu-single bed",
    name: "Green Single Bed",
    height: 24 * 3,
    width: 24 * 3,
    top: 0,
    left: 0,
    image: singlebedg,
    types: "bedroom",
    price: 0
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
    name: "Black Square Sink",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: squaresink,
    types: "kitchen/bathroom",
    price: 100
};

const SquareSinkB: SQUARESINK = {
    id: "menu-square sink",
    name: "Blue Square Sink",
    height: 12 * 3,
    width: 21 * 3,
    top: 0,
    left: 0,
    image: squaresinkb,
    types: "kitchen/bathroom",
    price: 0
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
    ChairB,
    ChairG,
    ChairR,
    CoffeeTable,
    CoffeeTableB,
    CoffeeTableG,
    Couch,
    CouchB,
    CouchG,
    CouchR,
    DinnerTable,
    DinnerTableG,
    DinnerTableB,
    DinnerTableR,
    DoubleBed,
    DoubleBedB,
    DoubleBedG,
    FlatTV,
    FlatTVB,
    FlatTVG,
    Fridge,
    FridgeB,
    Lamp,
    Plant,
    RectTable,
    RectTableG,
    RectTableB,
    RectTableR,
    RoundSink,
    RoundSinkB,
    RoundSinkG,
    RoundTable,
    RoundTableB,
    RoundTableG,
    SingleBed,
    SingleBedB,
    SingleBedG,
    Sink,
    SquareSink,
    SquareSinkB,
    Stove,
    Toilet
];

export const Bathroom = [Bathtub, Sink, Toilet, RoundSink, Plant, Lamp];

export const Kitchen = [
    CoffeeTable,
    FlatTV,
    RectTable,
    RoundTable,
    Fridge,
    Plant,
    Lamp,
    Couch,
    DinnerTable,
    Sink,
    Chair,
    Stove
];

export const Bedroom = [
    SingleBed,
    DoubleBed,
    RoundTable,
    Lamp,
    Plant,
    FlatTV,
    Chair,
    RectTable
];
