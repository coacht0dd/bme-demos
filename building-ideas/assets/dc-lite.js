/* dc-lite: tiny static renderer for the Building Ideas demo pages. */
(function () {
  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  var WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
  var root, tplBody, comp;

  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (p) {
    this.state = Object.assign({}, this.state, typeof p === 'function' ? p(this.state) : p);
    render();
  };
  DCLogic.prototype.forceUpdate = function () { render(); };

  function lookup(path, scope) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
    var parts = path.split('.'), v = scope;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }
  function interp(str, scope) {
    return str.replace(HOLE, function (_, p) { var v = lookup(p, scope); return v == null ? '' : String(v); });
  }

  function renderChildren(src, out, scope) {
    for (var c = src.firstChild; c; c = c.nextSibling) renderNode(c, out, scope);
  }

  function renderNode(node, out, scope) {
    if (node.nodeType === 3) { out.appendChild(document.createTextNode(interp(node.nodeValue, scope))); return; }
    if (node.nodeType !== 1) return;
    var tag = node.tagName.toLowerCase();
    if (tag === 'sc-for') {
      var m = WHOLE.exec(node.getAttribute('list') || '');
      var list = m ? lookup(m[1], scope) : [];
      var as = node.getAttribute('as') || 'item';
      (list || []).forEach(function (item, i) {
        var s = Object.create(scope); s[as] = item; s.$index = i;
        renderChildren(node, out, s);
      });
      return;
    }
    if (tag === 'sc-if') {
      var mv = WHOLE.exec(node.getAttribute('value') || '');
      if (mv && lookup(mv[1], scope)) renderChildren(node, out, scope);
      return;
    }
    var svg = tag === 'svg' || (out.namespaceURI === 'http://www.w3.org/2000/svg');
    var el = svg ? document.createElementNS('http://www.w3.org/2000/svg', node.tagName) : document.createElement(tag);
    for (var a = 0; a < node.attributes.length; a++) {
      var name = node.attributes[a].name, val = node.attributes[a].value;
      if (/^hint-/.test(name)) continue;
      var w = WHOLE.exec(val);
      if (w) {
        var v = lookup(w[1], scope);
        if (/^on/.test(name) && typeof v === 'function') { el.addEventListener(name.slice(2), v); continue; }
        if (typeof v === 'boolean') {
          if (/^aria-/.test(name)) el.setAttribute(name, String(v));
          else if (v) el.setAttribute(name, '');
          continue;
        }
        if (v == null) continue;
        if (name === 'style') { el.setAttribute('style', String(v)); continue; }
        el.setAttribute(name, String(v));
      } else {
        el.setAttribute(name, interp(val, scope));
      }
    }
    if (tag === 'select' && node.hasAttribute('data-options')) {
      (lookup(node.getAttribute('data-options'), scope) || []).forEach(function (o) {
        var op = document.createElement('option'); op.textContent = o; el.appendChild(op);
      });
    }
    renderChildren(node, el, scope);
    out.appendChild(el);
  }

  function render() {
    var vals = comp.renderVals();
    var frag = document.createDocumentFragment();
    renderChildren(tplBody, frag, vals);
    root.replaceChildren(frag);
  }

  document.addEventListener('DOMContentLoaded', function () {
    root = document.getElementById('app');
    var tpl = document.getElementById('dc-template').textContent;
    tplBody = new DOMParser().parseFromString('<!doctype html><body>' + tpl + '</body>', 'text/html').body;
    var code = document.getElementById('dc-logic').textContent;
    var Component = new Function('DCLogic', code + '\n;return Component;')(DCLogic);
    comp = new Component({});
    render();
  });
})();
