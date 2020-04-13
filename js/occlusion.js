// https://observablehq.com/d/0f902824f32796ca@179
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md) {
    return (
      md `# Occlusion

Occlusion hides the text nodes that are covered by another node. Add a data-priority attribute to sort by priority. (If you have very many labels, Benjamin Schmidt’s [version](https://observablehq.com/@bmschmidt/finding-text-occlusion-with-quadtrees) explores efficient optimization strategies with quadtrees or RBush.)`
    )
  });
  main.variable(observer()).define(["md"], function(md) {
    return (
      md `Usage:
~~~{js}
import {occlusion} with {d3} from "@fil/occlusion"
occlusion(svg)
~~~

Style with CSS:
~~~~{css}
.occluded { display:none }
~~~~
`
    )
  });
  main.variable(observer("svg")).define("svg", ["d3", "width", "height", "rwg", "occlusion", "Promises"], async function*(d3, width, height, rwg, occlusion, Promises) {
    const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);

    const n = 1000;
    svg
      .selectAll("text")
      .data(rwg.sort(d3.ascending))
      .join("text")
      .text(d => d)
      .attr("x", () => (width * Math.random()) | 0)
      .attr("y", () => (height * Math.random()) | 0);

    // important! yield before calling occlusion()
    yield svg.node();

    // change the priority on mouseover
    svg
      .selectAll("text")
      .on("mouseover", (d, i, e) => {
        e[i].setAttribute("data-priority", 2);
        occlusion(svg);
      })
      .on("mouseout", (d, i, e) => {
        e[i].setAttribute("data-priority", 0);
        occlusion(svg);
      });

    // maybe some changes are automatic
    do {
      const i = (Math.random() * n) | 0;
      svg
        .select(`text:nth-of-type(${i})`)
        .attr("data-priority", Math.random() * 2);

      occlusion(svg);

      await Promises.delay(300);
    } while (true);
  });
  main.variable(observer()).define(["html"], function(html) {
    return (
      html `<style>
svg { cursor: pointer; }
svg text.occluded { opacity: 0.1 }
svg text[data-priority="2"] { fill: red }
</style>`
    )
  });
  main.variable(observer("occlusion")).define("occlusion", ["d3", "intersect"], function(d3, intersect) {
    return (
      function occlusion(svg) {
        const texts = [];
        svg.selectAll("text").each((d, i, e) => {
          const bbox = e[i].getBoundingClientRect();
          texts.push({
            priority: +e[i].getAttribute("data-priority"),
            node: e[i],
            text: d,
            bbox,
            x: bbox.x,
            y: bbox.y,
            width: bbox.width,
            height: bbox.height
          });
        });

        texts.sort((a, b) => d3.descending(a.priority, b.priority));

        const filled = [];

        texts.forEach(d => {
          const isOccluded = filled.some(e => intersect(d, e));
          d3.select(d.node).classed("occluded", isOccluded);
          if (!isOccluded) filled.push(d);
        });

        return filled;
      }
    )
  });
  main.variable(observer("intersect")).define("intersect", function() {
    return (
      function intersect(a, b) {
        return !(
          a.x + a.width < b.x ||
          b.x + b.width < a.x ||
          a.y + a.height < b.y ||
          b.y + b.height < a.y
        );
      }
    )
  });
  main.variable(observer("d3")).define("d3", ["require"], function(require) {
    return (
      require("d3@5")
    )
  });
  main.variable(observer("height")).define("height", function() {
    return (
      400
    )
  });
  main.variable(observer("rwg")).define("rwg", function() {
    return (
      ['uranium', 'production', 'resources', 'exploration', 'Uranium', 'Total', 'nuclear', 'mining', 'URANIUM', 'development', 'NEA', 'OECD', 'tU', 'RESOURCES', 'PRODUCTION', 'DEMAND', 'tonnes', 'mine', 'method', 'conventional', 'deposit', 'deposits', 'which', 'expenditures', 'NATIONAL', 'REPORTS', 'kgU', 'Production', 'total', 'activities', 'ore', 'end', 'drilling', 'reported', 'USD', 'capacity', 'Energy', 'situ', 'about', 'Low', 'government', 'fuel', 'Nuclear', 'High', 'other', 'will', 'processing', 'type', 'assured', 'million', 'resource', 'requirements', 'power', 'plant', 'January', 'since', 'environmental', 'leaching', 'project', 'energy', 'United', 'Government', 'two', 'under', 'increase', 'electricity', 'reactors', 'these', 'cost', 'ISL', 'potential', 'U', 'identified', 'out', 'countries', 'including', 'This', 'resources', 'than', 'Mining', 'Inferred', 'industry', 'construction', 'all', 'inferred', 'Deposit', 'Historical', 'market', 'some', 'first', 'mines', 'recovery', 'between', 'However', 'but', 'tU', 'use', 'prices', 'Resources', 'centres', 'only', 'more', 'into', 'holes', 'underground', 'produced', 'Reasonably', 'process', 'mineralisation', 'company', 'being', 'South', 'factor', 'geological', 'existing', 'within']
    )
  });
  return main;
}