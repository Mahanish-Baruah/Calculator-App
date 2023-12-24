const toggle_button = document.querySelector(".toggle-button");
const body = document.querySelector(".body");
const header = document.querySelector(".header");
const screen = document.querySelector(".screen");
const keypad = document.querySelector(".keypad");
const buttons = document.querySelectorAll(".button");
const del_reset = document.querySelectorAll(".del-reset");
const equal = document.querySelector(".equal");

function appendToResult(value) {
    screen.value += value;
}

function clearResult() {
    screen.value = "";
}

function deleteResult() {
    screen.value = screen.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(screen.value);
        if (screen.value == "25/12") {
            screen.value = "Merry XMAS";
        } else if (screen.value == "") {
            screen.value = "";
        } else {
            screen.value = result;
        }
    } catch (error) {
        screen.value = "Error";
        screen.style.color = "hsl(6, 63%, 50%)";
        setTimeout(() => {
            screen.value = "";
            screen.style.color = "var(--text-secondary)";
        }, 1000);
    }
}

let count = 1;

function changeTheme() {
    if (count <= 3) {
        count++;
        if (count == 1) {
            toggle_button.style.gridArea = "theme1";
            toggle_button.style.justifySelf = "end";
            body.style.backgroundColor = "var(--background-main)";
            body.style.color = "var(--text-secondary)";
            header.style.backgroundColor = "var(--background-main)";
            screen.style.backgroundColor = "var(--background-screen)";
            screen.style.color = "var(--text-secondary)";
            keypad.style.backgroundColor = "var(--background-keypad)";
            buttons.forEach((button) => {
                button.style.backgroundColor = "var(--key-background)";
                button.style.color = "var(--text-primary)";
                button.style.boxShadow = "0 3px 0 1px var(--key-shadow)";
            });
            del_reset.forEach((del_reset) => {
                del_reset.style.backgroundColor = "var(--del-reset-background)";
                del_reset.style.color = "var(--text-secondary)";
                del_reset.style.boxShadow =
                    "0 3px 0 1px var(--del-reset-shadow)";
            });
            equal.style.backgroundColor = "var(--equal-background)";
            equal.style.color = "var(--equal-primary)";
            equal.style.boxShadow = "0 3px 0 1px var(--equal-shadow)";
        } else if (count == 2) {
            toggle_button.style.gridArea = "theme2";
            toggle_button.style.justifySelf = "center";
            body.style.backgroundColor = "var(--background-main-theme2)";
            body.style.color = "var(--text-secondary-theme2)";
            header.style.backgroundColor = "var(--background-main-theme2)";
            screen.style.backgroundColor = "var(--background-screen-theme2)";
            screen.style.color = "var(--text-secondary-theme2)";
            keypad.style.backgroundColor = "var(--background-keypad-theme2)";
            buttons.forEach((button) => {
                button.style.backgroundColor = "var(--key-background-theme2)";
                button.style.color = "var(--text-primary-theme2)";
                button.style.boxShadow = "0 3px 0 1px var(--key-shadow-theme2)";
            });
            del_reset.forEach((del_reset) => {
                del_reset.style.backgroundColor =
                    "var(--del-reset-background-theme2)";
                del_reset.style.color = "var(--text-secondary-theme2)";
                del_reset.style.boxShadow =
                    "0 3px 0 1px var(--del-reset-shadow-theme2)";
            });
            equal.style.backgroundColor = "var(--equal-background-theme2)";
            equal.style.color = "var(--equal-primary-theme2)";
            equal.style.boxShadow = "0 3px 0 1px var(--equal-shadow-theme2)";
        } else if (count == 3) {
            toggle_button.style.gridArea = "theme3";
            toggle_button.style.justifySelf = "start";
            body.style.backgroundColor = "var(--background-main-theme3)";
            body.style.color = "var(--text-primary-theme3)";
            header.style.backgroundColor = "var(--background-main-theme3)";
            screen.style.backgroundColor = "var(--background-screen-theme3)";
            screen.style.color = "var(--text-secondary-theme3)";
            keypad.style.backgroundColor = "var(--background-keypad-theme3)";
            buttons.forEach((button) => {
                button.style.backgroundColor = "var(--key-background-theme3)";
                button.style.color = "var(--text-primary-theme3)";
                button.style.boxShadow = "0 3px 0 1px var(--key-shadow-theme3)";
            });
            del_reset.forEach((del_reset) => {
                del_reset.style.backgroundColor =
                    "var(--del-reset-background-theme3)";
                del_reset.style.color = "var(--text-secondary-theme3)";
                del_reset.style.boxShadow =
                    "0 3px 0 1px var(--del-reset-shadow-theme3)";
            });
            equal.style.backgroundColor = "var(--equal-background-theme3)";
            equal.style.color = "var(--equal-primary-theme3)";
            equal.style.boxShadow = "0 3px 0 1px var(--equal-shadow-theme3)";
            count = 0;
        }

        console.log(count);
    }
}
