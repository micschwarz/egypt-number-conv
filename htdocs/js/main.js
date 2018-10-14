const button = document.getElementById('btn-convert');
const input = document.getElementById('arab-number');

const symbolsAvailable = {
    1      : 'single_stroke',
    10     : 'cattle_hop',
    100    : 'coil_of_rope',
    1000   : 'water_lily',
    10000  : 'bent_finger',
    100000 : 'tadpole',
    1000000: 'heh',
};

function getArabValue()
{
    return input.value || 0;
}

function getEgyptNumber(arabNumber)
{
    let number = arabNumber;
    const symbols = [];

    console.log(Object.keys(symbolsAvailable));

    Object.keys(symbolsAvailable).sort((a, b) => b - a).forEach((symbolNumber) => {
        let count = parseInt(number / symbolNumber);
        let symbol = symbolsAvailable[symbolNumber];

        for (let i = count; i > 0; i--) {
            symbols.push(symbol);
        }

        number = number % symbolNumber;
    });

    return symbols;
}

function renderHieroglyph(name)
{
    let wrapper = document.createElement('div');
    wrapper.classList.add('hiero');

    let img = document.createElement('img');
    img.setAttribute('src', `/img/hiero_${name}.png`);
    img.setAttribute('height', `/img/hiero_${name}.png`);

    wrapper.appendChild(img);

    return wrapper;
}

button.addEventListener('click', () => {
    const output = document.querySelector('.output');

    output.innerHTML = '';

    const hieroglyphs = getEgyptNumber(getArabValue());

    hieroglyphs.forEach((hieroglyph) => {
        output.appendChild(renderHieroglyph(hieroglyph))
    })
});
