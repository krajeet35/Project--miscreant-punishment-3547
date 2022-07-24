import { display } from '../component/main.js';
import { navbar,cartpopUp, loginpopup } from "../scripts/navbar.js"
// cartpopUp();
// loginpopup();
let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("sectionData"))

let container = document.getElementById("product_div")
display(data, container)
let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")


document.getElementById("c1").addEventListener("click", () => {
    console.log("working")
    if (c1.checked == true) {
        data = data.filter((el) => {
            return el.Name == "FOREST ESSENTIAL1";
        })
        console.log(data);
        append_data(data);
    }
})
document.getElementById("filtertagPrice").addEventListener("click", () => {
    let value = document.getElementById("filtertagPrice").value;
    console.log(value);
    if (value == "zero") {
        let cdata = data.filter((el) => {
            return el.Price > 0 && el.Price <= 1000;
        })
        // console.log(data, container);
        display(cdata, container)

    }
    if (value == "thousand") {
        let cdata = data.filter((el) => {
            return el.Price > 1000 && el.Price <= 2000
        })
        display(cdata, container)

    }
    if (value == "two_thous") {
        let cdata = data.filter((el) => {
            return el.Price >= 2000
        })
        display(cdata, container)

    }
    if (value == "Price") {
        let cdata = data.filter((el) => {
            return el.Price >= 0
        })
        console.log(data)
        display(cdata, container)
    }
})
document.querySelector("#filterBrand").addEventListener("change", () => {
    let value = document.querySelector("#filterBrand").value;
    if (value == "huda beauty") {
        let filterData = data.filter((el) => {
            return el.Name == "HUDA BEAUTY";
        })
        display(filterData, container);
    } else if (value == "sephora Collection") {
        let filterData = data.filter((el) => {
            return el.Name == "SEPHORA COLLECTION";
        })
        display(filterData, container);
    } else if (value == "clinique") {
        let filterData = data.filter((el) => {
            return el.Name == "CLINIQUE";
        })
        display(filterData, container);
    }
})
let c5 = document.querySelector("#c5");
if (c5.checked == true) {
    let filter = data.filter((el) => {
        return el.Offer_Price != "";
    })
    display(filter, container);
}

document.querySelector("#select").addEventListener("change", sorting)
function sorting() {
    let toSort = document.getElementById("select").value;
    if (toSort == "LH") {
        let sortedList = data.sort((a, b) => {
            return a.Price - b.Price
        });
        console.log(sortedList);
        display(sortedList, container)
        console.log("high to low");
    }
    if (toSort == "HL") {
        let sortedList = data.sort((a, b) => b.Price - a.Price);
        display(sortedList, container)

        console.log("low to high")
    }
}

let search = () => {
    let input = document.getElementById('searchBar').value;
    input = input.toLowerCase();
    let temp = JSON.parse(localStorage.getItem("SephoraMainData"));
    let filtered_list = temp.filter(function (elem) {
        return (elem.Name).toLowerCase().includes(input);
    });
    localStorage.setItem("sectionData", JSON.stringify(filtered_list));
    display(filtered_list);
}


import { footer } from "../scripts/navbar.js"

let foot = document.querySelector("#footer");
foot.innerHTML = footer();