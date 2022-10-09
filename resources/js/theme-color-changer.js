import { createPalleteFromColor } from "palettey";

function hexToRgb(hex) {
    hex = hex.substring(1);
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return [r, g, b];
}

function changeThemeColor(hexCode1, hexCode2) {
    hexCode1 = hexCode1.substring(1);
    hexCode2 = hexCode2.substring(1);
    const palette = createPalleteFromColor("primary", hexCode1, {});
    const palette2 = createPalleteFromColor("primary", hexCode2, {});

    for (const color in palette.primary) {
        if (Object.hasOwnProperty.call(palette.primary, color)) {
            var elem = palette.primary[color];
            palette.primary[color] = hexToRgb(elem);
        }
    }

    for (const color in palette2.primary) {
        if (Object.hasOwnProperty.call(palette2.primary, color)) {
            var elem = palette2.primary[color];
            palette2.primary[color] = hexToRgb(elem);
        }
    }

    const nstyle = document.createElement('style');

    nstyle.textContent = `
    @layer base{
        :root{
            --theme-primary-color-var-50:`+ palette.primary[50][0] + " " + palette.primary[50][1] + " " + palette.primary[50][2] + `;
            --theme-primary-color-var-100:`+ palette.primary[400][0] + " " + palette.primary[100][1] + " " + palette.primary[100][2] + `;
            --theme-primary-color-var-200:`+ palette.primary[200][0] + " " + palette.primary[200][1] + " " + palette.primary[200][2] + `;
            --theme-primary-color-var-300:`+ palette.primary[300][0] + " " + palette.primary[300][1] + " " + palette.primary[300][2] + `;
            --theme-primary-color-var-400:`+ palette.primary[400][0] + " " + palette.primary[400][1] + " " + palette.primary[400][2] + `;
            --theme-primary-color-var-500:`+ palette.primary[500][0] + " " + palette.primary[500][1] + " " + palette.primary[500][2] + `;
            --theme-primary-color-var-600:`+ palette.primary[600][0] + " " + palette.primary[600][1] + " " + palette.primary[600][2] + `;
            --theme-primary-color-var-700:`+ palette.primary[700][0] + " " + palette.primary[700][1] + " " + palette.primary[700][2] + `;
            --theme-primary-color-var-800:`+ palette.primary[800][0] + " " + palette.primary[800][1] + " " + palette.primary[800][2] + `;
            --theme-primary-color-var-900:`+ palette.primary[900][0] + " " + palette.primary[900][1] + " " + palette.primary[900][2] + `;
            --theme-secondary-color-var-50:`+ palette2.primary[50][0] + " " + palette2.primary[50][1] + " " + palette2.primary[50][2] + `;
            --theme-secondary-color-var-100:`+ palette2.primary[400][0] + " " + palette2.primary[100][1] + " " + palette2.primary[100][2] + `;
            --theme-secondary-color-var-200:`+ palette2.primary[200][0] + " " + palette2.primary[200][1] + " " + palette2.primary[200][2] + `;
            --theme-secondary-color-var-300:`+ palette2.primary[300][0] + " " + palette2.primary[300][1] + " " + palette2.primary[300][2] + `;
            --theme-secondary-color-var-400:`+ palette2.primary[400][0] + " " + palette2.primary[400][1] + " " + palette2.primary[400][2] + `;
            --theme-secondary-color-var-500:`+ palette2.primary[500][0] + " " + palette2.primary[500][1] + " " + palette2.primary[500][2] + `;
            --theme-secondary-color-var-600:`+ palette2.primary[600][0] + " " + palette2.primary[600][1] + " " + palette2.primary[600][2] + `;
            --theme-secondary-color-var-700:`+ palette2.primary[700][0] + " " + palette2.primary[700][1] + " " + palette2.primary[700][2] + `;
            --theme-secondary-color-var-800:`+ palette2.primary[800][0] + " " + palette2.primary[800][1] + " " + palette2.primary[800][2] + `;
            --theme-secondary-color-var-900:`+ palette2.primary[900][0] + " " + palette2.primary[900][1] + " " + palette2.primary[900][2] + `;
        }
    }
    `;

    document.head.appendChild(nstyle);
}

window.addEventListener('change-theme-color', (e) => {
    changeThemeColor(e.detail.primaryColor, e.detail.secondaryColor);
});

changeThemeColor(document.getElementById('theme-primary-color').content, document.getElementById('theme-secondary-color').content);
