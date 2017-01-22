$(function(){ // on dom ready

var elesJson = {
  nodes: [
    { data: { id: 'b', foo: 7, bar: 1, baz: 3 } },
    { data: { id: 'd', foo: 9, bar: 5, baz: 2 } },
    { data: { id: 'e', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'f', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'g', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'h', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'i', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'j', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'k', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'l', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'm', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'n', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'o', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'p', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'q', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'r', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 't', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'u', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'v', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'w', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'x', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'y', foo: 2, bar: 4, baz: 5 } },
    { data: { id: 'z', foo: 2, bar: 4, baz: 5 } }


  ],

  edges: [
    { data: { id: 'bd', weight: 4, source: 'b', target: 'd' } },
    { data: { id: 'ed', weight: 7, source: 'e', target: 'd' } },
    { data: { id: 'df', weight: 7, source: 'd', target: 'f' } },
    { data: { id: 'dg', weight: 7, source: 'f', target: 'g' } },
    { data: { id: 'dh', weight: 7, source: 'g', target: 'h' } },
    { data: { id: 'di', weight: 7, source: 'h', target: 'i' } },
    { data: { id: 'dj', weight: 7, source: 'i', target: 'j' } },
    { data: { id: 'dk', weight: 7, source: 'j', target: 'k' } },
    { data: { id: 'dl', weight: 7, source: 'k', target: 'l' } },
    { data: { id: 'dm', weight: 7, source: 'l', target: 'm' } },
    { data: { id: 'dn', weight: 7, source: 'm', target: 'n' } },
    { data: { id: 'do', weight: 7, source: 'n', target: 'o' } },
    { data: { id: 'dp', weight: 7, source: 'o', target: 'p' } },
    { data: { id: 'dq', weight: 7, source: 'p', target: 'q' } },
    { data: { id: 'dr', weight: 7, source: 'd', target: 'r' } },
    { data: { id: 'dt', weight: 7, source: 'r', target: 't' } },
    { data: { id: 'du', weight: 7, source: 'r', target: 'u' } },
    { data: { id: 'dv', weight: 7, source: 'r', target: 'v' } },
    { data: { id: 'dw', weight: 7, source: 'r', target: 'w' } },
    { data: { id: 'dx', weight: 7, source: 'r', target: 'x' } },
    { data: { id: 'dy', weight: 7, source: 'r', target: 'y' } },
    { data: { id: 'dz', weight: 7, source: 'r', target: 'z' } }
  ]
};

$('#cy').cytoscape({
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'background-color': '#B3767E',
        'width': 'mapData(baz, 0, 10, 10, 40)',
        'height': 'mapData(baz, 0, 10, 10, 40)',
        'content': 'data(id)'
      })
    .selector('edge')
      .css({
        'line-color': '#F2B1BA',
        'curve-style': 'bezier',
        'target-arrow-color': '#F2B1BA',
        'width': 2,
        'target-arrow-shape': 'triangle',
        'opacity': 0.8
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'opacity': 1
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: elesJson,

  layout: {
    name: 'circle',
    padding: 10
  },

  ready: function(){
    // ready 1
  }
});

$('#cy2').cytoscape({
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'background-color': 'black',
        'shape': 'circle',
        'width': 'mapData(bar, 0, 10, 10, 30)',
        'height': 'mapData(bar, 0, 10, 10, 30)',
        'content': 'data(id)'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-color': '#dedede',
        'width': 2,
        'target-arrow-shape': 'triangle',
        'line-color': '#dedede',
        'target-arrow-color': '#dedede',
        'target-arrow-shape': 'triangle',
        'opacity': 0.8
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'opacity': 1
      }),

  elements: elesJson,

  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 5
  },

  ready: function(){
    // ready 2
  }
});

}); // on dom ready
