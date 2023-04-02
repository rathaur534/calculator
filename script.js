let string = "";
let buttons = document.querySelectorAll(".button");
let arr = Array.from(buttons);
arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.value === "=") {
                string = eval(string);
                if (string !== undefined) {
                    document.getElementById('output').value = string;

                } else {
                    string = "";
                    document.getElementById('output').value = string;

                }

            } else if (e.target.value === 'AC') {
                string = "";
                document.getElementById('output').value = string;
            } else if (e.target.value === 'DE') {
                string = string.substring(0, string.length - 1);
                document.getElementById('output').value = string;
            } else {
                string += e.target.value;
                document.getElementById('output').value = string;
            }
        });
    })
    // try and catch implementation