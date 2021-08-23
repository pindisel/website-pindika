import hangman from "../assets/hangman/hangman.png";
import converter from "../assets/converter/converter.png";
import ezcookforme from "../assets/ezcookforme/ezcookforme.png";
import todolist from "../assets/todolist/todolist.png";
import website from "../assets/website/website.png";

export const projects = [
    { id: 1, name: "Hangman Game in C", desc: "This is a Hangman Game using C Programming Language. This program is for mid term project in a group of two.", link: "https://github.com/pindisel/Proyek_Hangman", image: hangman },
    {
        id: 2,
        name: "Currency Converter in C",
        desc: "This is a Currency Converter Program using C Programming Language. This program converts currencies in ASEAN. This program is for final project in a group of two.",
        link: "https://github.com/pindisel/Project_CurrencyConverter",
        image: converter,
    },
    {
        id: 3,
        name: "EZCOOKFOR.ME",
        desc: "EZCOOKFOR.ME is a website for people to search about food recipes. There are 3 categories which are appetizer, main course, and dessert. People can add recipes to the database by contacting us through e-mail because only the admin add or edit the recipes in the database. This website is fully accessible at https://ezcookfor.me/",
        link: "https://github.com/pindisel/ezcookforme",
        image: ezcookforme,
    },
    {
        id: 4,
        name: "Personal To-Do List",
        desc: "This project is used by myself to keep track of my things to do and to increase my productivity. I can add, edit, and delete my to do in the database.",
        link: "https://github.com/pindisel/to-do-list",
        image: todolist,
    },
    { id: 5, name: "Personal Website", desc: "lorem ipsum..", link: "https://github.com/pindisel/website-pindika", image: website },
];
