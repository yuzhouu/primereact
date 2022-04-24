/**
 * generate raw css variable from https://www.primefaces.org/designer/api/primereact/7.0.0/#button-variable-buttonPadding
 */

const ACode = "A".charCodeAt(0);
const aCode = "a".charCodeAt(0);
const distance = aCode - ACode;

const els = document.querySelectorAll("code.language-scss");

let generatedCss = "";

els.forEach((el) => {
    let content = el.textContent;
    let [name, value] = content.split(":");
    name = name.replace(/^\$/, "--");
    const newName = name
        .split("")
        .map((char) => {
            if (char >= "A" && char <= "Z") {
                const charCode = char.charCodeAt(0);
                return `-${String.fromCharCode(charCode + distance)}`;
            }
            return char;
        })
        .join("");

    generatedCss += `${newName}:${value}
`;
});

console.log(generatedCss);
