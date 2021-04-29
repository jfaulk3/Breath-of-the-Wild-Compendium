export interface entry {
  attack?: number;
  category?: string;
  common_locations?: Array<string>;
  defense?: number;
  cooking_effect?: string;
  description?: string;
  hearts_recovered?: number;
  drops?: Array<string>;
  id?: number;
  image?: string;
  name?: string;
}

export interface creatures {
  food: Array<entry>;
  non_food: Array<entry>;
}
