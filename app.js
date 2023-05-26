const max_balloons = 20;
const balloon_colors = [];
let popped_balloon_count = max_balloons;

function set_balloon_colors() {
    const colors = ["black", "red", "blue", "purple", "orange", "yellow", "green", "pink"];
    let random_color = 0;
    
    for (let index = 0; index < max_balloons; ++index) {
        random_color = Math.floor(Math.random() * colors.length)
        balloon_colors.push(colors[random_color])
    }
    console.log(balloon_colors);
}

function render_balloons() {
    let balloon_elements = ``;
    
    balloon_colors.forEach(function(color, position) {
        let balloon_visibility = "active";

        if (color == null) {
            balloon_visibility = "popped";
        }

        balloon_elements = balloon_elements + `<div
                             class="balloon ${balloon_visibility}" 
                             style="background:${color};"
                             onClick=pop_balloon(${position})
                             ></div>`

    })

    let heading = set_heading_counter(popped_balloon_count)
    document.getElementById("balloon-map").innerHTML = balloon_elements;
    document.getElementById("heading").innerHTML = heading;

    if (popped_balloon_count === 0) {
        location.reload();
    }

}

function pop_balloon(position) {
    balloon_colors[position] = null;
    balloon_visibility = "popped";
    --popped_balloon_count;
    render_balloons();
}

function set_heading_counter(count) {
    if (count > 1) {
        return `<h1>Pop ${count} Balloons!</h1>`
    }
    else {
        return `<h1>Pop the last balloon!</h1>`
    }
}

set_balloon_colors();
render_balloons();