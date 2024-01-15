export interface HomePage{
    title:string;
    subtitle:string;
    navigation:string[];
}

export interface MealsPage{
    title:string;
    items: MealCard[];

}

export interface MealCard {
    image: string;
    title: string;
    origin: string;
}