export interface ProfesoresResponse{
    name:            string;
    alternateNames:  [];
    species:         string;
    gender:          string;
    house:           string;
    dateOfBirth:     string;
    yearOfBirth:     number | string;
    wizard:          boolean;
    ancestry:        string;
    eyeColour:       string;
    hairColour:      string;
    wand:            string;
    patronus:        string;
    hogwartsStudent: boolean;
    hogwartsStaff:   boolean;
    actor:           string;
    alternateActors:  [];
    alive:           boolean;
    image:           string;
}