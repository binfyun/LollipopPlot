// BioJS-Sniper creates the DOM-element yourDiv by default
yourDiv.innerHTML = '';


// import our plot-library
var mutneedles = require("muts-needle-plot");

var target = yourDiv; // autmically generated in snippets examples
var muts = "./data/ENSG00000164362.json";
var regions = [
  {"name": "TERT coding sequence", "coord": "0_250"},
  {"name": "TSS", "coord": "-50_0"}
];
var legends = {x: "TERT (ENSG00000164362) AA pos", y: "Mutation Count"}
var colorMap = {
  // mutation categories
  "missense_variant": "yellow",
  "frameshift_variant": "blue",
  "C228T": "red",
  "250_254delinsTTCCT": "orange",
  "synonymous_variant": "lightblue"
};

var config = {minCoord: -300, maxCoord: 350, mutationData: muts, regionData: regions, target: target, legends: legends, colorMap: colorMap,
  width: 1000, height: 1000, responsive: 'resize'};

instance =  new mutneedles(config);

create_download_link = function() {
  var s = document.getElementsByTagName('svg')[0];
  var x = new XMLSerializer();
  var b64 = btoa(x.serializeToString(s));
  var a = document.createElement('a');
  a.appendChild(document.createTextNode("Download SVG"));
  a.download = 'mutations-needle-plot.svg';
  a.href = 'data:image/svg+xml;base64,\n'+b64;
  a.hreflang = 'image/svg+xml';
  document.getElementsByTagName('body')[0].appendChild(a);
};

create_download_link();

//@biojs-instance=instance (provides the instance to the BioJS event system)
