export function MeshSpin() {
  (this.props = {
    animate: !0,
    background: !1,
    debug: !1,
    edgeSeperator: ',',
    fake3D: !1,
    fillColor: null,
    fps: 60,
    orientation: { x: 0, y: 0, z: 0 },
    scaleFactor: 50,
    staticRotation: { x: 0.01, y: 0.01, z: 0.01 },
    viewBox: [-100, -100, 200, 200]
  }),
    (this.fig = {
      nodes: [
        { x: Math.sqrt(8 / 9), y: 0, z: -1 / 3 },
        { x: -Math.sqrt(2 / 9), y: Math.sqrt(2 / 3), z: -1 / 3 },
        { x: -Math.sqrt(2 / 9), y: -Math.sqrt(2 / 3), z: -1 / 3 },
        { x: 0, y: 0, z: 1 }
      ].map(t => ({
        x: t.x * this.props.scaleFactor,
        y: t.y * this.props.scaleFactor,
        z: t.z * this.props.scaleFactor
      })),
      edges: [
        [3, 2],
        [0, 2],
        [1, 2],
        [3, 0],
        [3, 1],
        [1, 0]
      ]
    }),
    (this.figure = function (t) {
      (this.fig = JSON.parse(JSON.stringify(t))), this.scale();
    }),
    (this.scale = function () {
      this.fig.nodes = this.fig.nodes.map(t => ({
        x: t.x * this.props.scaleFactor,
        y: t.y * this.props.scaleFactor,
        z: t.z * this.props.scaleFactor
      }));
    }),
    (this.rotate = function (t) {
      this.fig.nodes = this.fig.nodes
        .map(s => ({
          x: s.x * Math.cos(t.x) - s.z * Math.sin(t.x),
          y: s.y,
          z: s.z * Math.cos(t.x) + s.x * Math.sin(t.x)
        }))
        .map(s => ({
          x: s.x,
          y: s.y * Math.cos(t.y) - s.z * Math.sin(t.y),
          z: s.z * Math.cos(t.y) + s.y * Math.sin(t.y)
        }))
        .map(s => ({
          x: s.x * Math.cos(t.z) - s.y * Math.sin(t.z),
          y: s.y * Math.cos(t.z) + s.x * Math.sin(t.z),
          z: s.z
        }));
    }),
    (this.sortEdges = function (t) {
      for (let s = 0; s < t.length; ++s) t[s].sort();
      var s = t.map(t => t.join(this.props.edgeSeperator)).filter((t, s, e) => e.indexOf(t) === s);
      return s.sort(), s;
    }),
    (this.setup = function (t) {
      this.rotate(this.props.orientation),
        (this.fig.edges = this.sortEdges(this.fig.edges)),
        (this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
        this.svg.setAttribute('viewBox', this.props.viewBox.join(' ')),
        (this.ns = this.svg.namespaceURI),
        document.getElementById(t).appendChild(this.svg),
        document.addEventListener('mousemove', this.mouseUpdate(), !1),
        document.addEventListener('mouseenter', this.mouseUpdate(), !1);
    }),
    (this.nextOutlineNode = function (t, s) {
      var e = {};
      function i(t, s) {
        return { x: t.x - s.x, y: t.y - s.y };
      }
      e = null === s ? { x: this.fig.nodes[t].x - 1, y: this.fig.nodes[t].y } : this.fig.nodes[s];
      let o = i(this.fig.nodes[t], e);
      var n,
        r,
        a = this.fig.nodes
          .map(s => i(s, this.fig.nodes[t]))
          .map(
            t => (
              (n = o),
              (r = t),
              Math.acos(
                (n.x * r.x + n.y * r.y) /
                  (Math.sqrt(n.x * n.x + n.y * n.y) * Math.sqrt(r.x * r.x + r.y * r.y))
              )
            )
          )
          .map((e, i) => (i === t || i === s || isNaN(e) ? 7 : e));
      return a.indexOf(Math.min.apply(Math, a));
    }),
    (this.backgroundPoly = []),
    (this.outlineEdges = function () {
      var t,
        s = [],
        e = [],
        i = this.fig.nodes.map(t => t.x),
        o = i.indexOf(Math.max.apply(Math, i)),
        n = null,
        r = o;
      do {
        (t = this.nextOutlineNode(r, n)), s.push(r), e.push([r, t]), (n = r), (r = t);
      } while (r !== o);
      return (
        (e = this.sortEdges(e)),
        this.props.background &&
          ((this.props.fake3D = !0),
          (this.backgroundPoly = s.map(
            t => this.fig.nodes[t].x.toString() + ',' + this.fig.nodes[t].y.toString()
          ))),
        [s, e]
      );
    }),
    (this.fake3Dedges = function () {
      var t = this.outlineEdges(),
        s = t[0],
        e = t[1]
          .concat(
            this.fig.edges
              .map(t => t.split(this.props.edgeSeperator).map(t => parseInt(t, 10)))
              .filter(
                t =>
                  (this.fig.nodes[t[0]].z >= 0 && this.fig.nodes[t[1]].z >= 0) ||
                  (this.fig.nodes[t[0]].z >= this.fig.nodes[t[1]].z &&
                    s.indexOf(t[1]) >= 0 &&
                    -1 === s.indexOf(t[0])) ||
                  (this.fig.nodes[t[1]].z >= this.fig.nodes[t[0]].z &&
                    s.indexOf(t[0]) >= 0 &&
                    -1 === s.indexOf(t[1]))
              )
              .map(t => t.join(this.props.edgeSeperator))
          )
          .filter((t, s, e) => e.indexOf(t) === s);
      return e.sort(), e;
    }),
    (this.draw = function () {
      for (; this.svg.lastChild; ) this.svg.removeChild(this.svg.lastChild);
      var t = this.getRotationOffset();
      this.rotate(t);
      var s = this.props.fake3D ? this.fake3Dedges() : this.fig.edges;
      if (this.props.background) {
        this.props.fake3D = !0;
        var e = document.createElementNS(this.ns, 'polygon');
        e.setAttribute('points', this.backgroundPoly.join(' ')),
          e.setAttribute('class', 'meshspin-background'),
          this.props.fillColor && e.setAttribute('fill', this.props.fillColor),
          this.svg.appendChild(e);
      }
      for (let t = 0; t < s.length; t++) {
        var i = s[t].split(this.props.edgeSeperator),
          o = document.createElementNS(this.ns, 'line');
        o.setAttribute('x1', this.fig.nodes[i[0]].x),
          o.setAttribute('y1', this.fig.nodes[i[0]].y),
          o.setAttribute('x2', this.fig.nodes[i[1]].x),
          o.setAttribute('y2', this.fig.nodes[i[1]].y),
          o.setAttribute('stroke', this.color()),
          o.setAttribute('class', 'meshspin-line'),
          this.svg.appendChild(o);
      }
      this.props.debug && this.drawDebugNodes();
    }),
    (this.drawDebugNodes = function () {
      for (let e = 0; e < this.fig.nodes.length; e++) {
        var t = document.createElementNS(this.ns, 'text');
        t.setAttribute('x', this.fig.nodes[e].x),
          t.setAttribute('y', this.fig.nodes[e].y),
          t.appendChild(document.createTextNode(e)),
          this.svg.appendChild(t);
        var s = document.createElementNS(this.ns, 'circle');
        s.setAttribute('cx', this.fig.nodes[e].x),
          s.setAttribute('cy', this.fig.nodes[e].y),
          s.setAttribute('r', '3px'),
          s.setAttribute('stroke', 'transparent'),
          s.setAttribute('fill', this.fig.nodes[e].z < 0 ? '#666' : 'black'),
          this.svg.appendChild(s);
      }
    }),
    (this.animationFrameCallback = function () {
      var t = this;
      return function s(e) {
        requestAnimationFrame(s),
          t.props.animate &&
            (t.lastFrame || (t.lastFrame = e),
            e - t.lastFrame < 1e3 / t.props.fps ||
              (t.currentFrame || (t.currentFrame = 0),
              ++t.currentFrame,
              (t.lastFrame = e),
              t.draw()));
      };
    }),
    (this.run = function () {
      requestAnimationFrame(this.animationFrameCallback());
    }),
    (this.getRotationOffset = function () {
      return this.props.staticRotation;
    }),
    (this.rotateByMouse = function () {
      return {
        x: 0.01 * (this.Mouse.prev.x - this.Mouse.x),
        y: 0.01 * (this.Mouse.prev.y - this.Mouse.y),
        z: 0
      };
    }),
    (this.colorStatic = function (t) {
      return function () {
        return t;
      };
    }),
    (this.color = this.colorStatic('currentColor')),
    (this.Mouse = { x: 0, y: 0, prev: { x: 0, y: 0 } }),
    (this.mouseInterval = null),
    (this.mouseUpdate = function () {
      var t = this;
      return function (s) {
        (t.Mouse = { x: s.pageX, y: s.pageY, prev: { x: t.Mouse.x, y: t.Mouse.y } }),
          t.mouseInterval && (clearInterval(t.mouseInterval), (t.mouseInterval = null)),
          (t.mouseInterval = setInterval(function () {
            t.Mouse.prev = { x: t.Mouse.x, y: t.Mouse.y };
          }, 100));
      };
    });
}
