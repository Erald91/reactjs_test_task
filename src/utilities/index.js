import AppStorage from './AppStorage';

export const DefaultProductsList = [
    {id: "1", price: "1000", name: "Product1", description: "Some description(1)", date: "2017-04-05"},
    {id: "2", price: "1500", name: "Product2", description: "Some description(2)", date: "2017-05-12"},
    {id: "3", price: "2300", name: "Product3", description: "Some description(3)", date: "2017-05-14"},
    {id: "4", price: "1600", name: "Product4", description: "Some description(4)", date: "2017-05-19"},
    {id: "5", price: "2300", name: "Product5", description: "Some description(5)", date: "2017-06-23"},
];

export let appStorage = new AppStorage();



