import { HomePage, MealsPage } from "../models/interface";


export const HOMEPAGE_MOCKS: HomePage = {
    title: "Welcome to MidEast Recipes",
    subtitle: "What are you looking to prepare today?",
    navigation: ["Breakfast", "Lunch", "Dinner", "Dessert"]
}

export const BREAKFAST_MEALS_PAGE: MealsPage = {
    title: "Breakfast",
    items: [
        { image: "image source1", title: "Clotted cream with Filo (جيمار وكاهي)", origin: "Iraq" },
        { image: "image source2", title: "meal title2", origin: "syria" }
    ]
}

export const LUNCH_MEALS_PAGE: MealsPage = {
    title: "Lunch",
    items: [
        { image: "", title: "Iraqi Red Soup with Kubbeh (شوربة حمراء عراقية) (", origin: "Iraq" },
        { image: "image source2", title: "meal title2", origin: "syria" }
    ]
}
export const DINNER_MEALS_PAGE: MealsPage = {
    title: "Dinner",
    items: [
        { image: "image source1", title: "meal title1", origin: "iraq" },
        { image: "image source2", title: "meal title2", origin: "syria" }
    ]
}
export const DESSERT_MEALS_PAGE: MealsPage = {
    title: "Dessert",
    items: [
        { image: "image source1", title: "meal title1", origin: "iraq" },
        { image: "image source2", title: "meal title2", origin: "syria" }
    ]
}
export const ALL_MEALS_PAGE_MOCKS: MealsPage[] = [
    BREAKFAST_MEALS_PAGE, LUNCH_MEALS_PAGE, DINNER_MEALS_PAGE, DESSERT_MEALS_PAGE
]

