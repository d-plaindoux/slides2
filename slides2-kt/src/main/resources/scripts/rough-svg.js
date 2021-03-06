import * as rough from "./rough.umd.js";
import {defer} from "./slide";
// See https://github.com/pshihn/rough/

const defaultOptions = {
    roughness: 2,
    fillWeight: 1.5,
    stroke: 'rgba(0,0,0,.1)',
    strokeWidth: 1,
    fillStyle: 'zigzag', //cross-hatch, zigzag,
    simplification: 1
};

const buildOptions = elt => ['fill', 'stroke', 'strokeWidth']
    .reduce((opt, attr) => {
        const value = elt.getAttribute(attr);
        if (value) {
            opt[attr] = value;
        }
        return opt;
    }, defaultOptions);

const applyRoughJs = svgElt => {
    const roughSvg = rough.svg(svgElt);

    const roughing = (selector, createNode) =>
        Array.from(svgElt.querySelectorAll(selector))
            .forEach(elt => elt.parentNode.replaceChild(createNode(elt), elt));

    roughing('path', path =>
        roughSvg.path(path.getAttribute('d'), buildOptions(path)));

    roughing('circle', circle =>
        roughSvg.circle(
            parseInt(circle.getAttribute('cx')),
            parseInt(circle.getAttribute('cy')),
            parseInt(circle.getAttribute('r')),
            buildOptions(circle)));
    // fixme handle other shape: rect, ellipse, polyline, polygon

};

defer()(() => {
    const svgElt = document.querySelector('body > svg.visually-hidden');
    if (svgElt) {
        applyRoughJs(svgElt);
    }
});