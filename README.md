# Australia's Healthcare Workforce

An interactive, single-page data story created for **FIT3179 Data Visualisation 2** at Monash University Malaysia.

**Author:** Kieren Antonio (Student ID 32730411)  
**Live visualisation:** [https://kierenantonio.github.io/FIT3179-Data-Visualisation-2-Australian-Healthcare-Workforce/](https://kierenantonio.github.io/FIT3179-Data-Visualisation-2-Australian-Healthcare-Workforce/)  
**Original sketch:** [Australia Healthcare Workforce Sketch](sketch/Australia-Healthcare-Workforce-Sketch.pdf)

## Story question

How did Australia's registered healthcare workforce change between 2020 and 2024, and how do profession, workload, state and remoteness affect the workforce available to communities?

## Visualisation plan

| # | Visualisation | Idiom classification |
|---|---|---|
| 1 | Treemap | Advanced |
| 2 | Indexed multi-line chart | Basic |
| 3 | Bump chart | Advanced |
| 4 | Connected dot plot | Advanced |
| 5 | Lollipop chart | Advanced |
| 6 | Bubble chart | Basic |
| 7 | Choropleth map | Advanced map |
| 8 | Proportional-symbol map | Advanced map |
| 9 | Dorling-style cartogram | Advanced map |
| 10 | Heatmap | Advanced |
| 11 | 100% stacked bar chart | Basic |
| 12 | Grouped bar chart | Basic |

This produces **12 charts**, including **8 distinct advanced idioms** and **3 distinct map idioms**.

## Data sources

- [Australian Government Health Workforce Data — national summary](https://hwd.health.gov.au/resources/data/summary-all.html)
- [Australian Government Health Workforce Data — state summary](https://hwd.health.gov.au/resources/data/summary-state.html)
- [Australian Government Health Workforce Data — remoteness summary](https://hwd.health.gov.au/resources/data/summary-remote.html)
- [National Health Workforce Dataset methodology](https://hwd.health.gov.au/resources/information/nhwds.html)
- [Australian Bureau of Statistics — National, state and territory population, December 2024](https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/dec-2024)
- [Australian state boundaries by Rowan Hogan](https://github.com/rowanhogan/australian-states)

The workforce data covers registered professionals who were employed in Australia. State rates use workforce FTE and ABS population from the same 2024 reference year. Confidential values marked `NP` by the source are retained as missing values and are not treated as zero.

## Repository structure

```text
.
├── index.html          # Single-page visual story
├── css/style.css      # Responsive visual design
├── js/main.js         # Vega/Vega-Lite embedding and errors
├── specs/             # 12 human-readable JSON specifications
├── data/              # Prepared CSV and GeoJSON data
└── sketch/            # Original hand-drawn design sketch
```

## Run locally

The charts load external JSON and CSV files, so the page should be served over HTTP rather than opened directly as a `file://` URL.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

In the repository, open **Settings → Pages**, select **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save. The published URL will use the live link shown above.

## AI acknowledgement

Generative AI tools were used to assist with drafting, coding, debugging and language refinement. The author reviewed the source data, design decisions, calculations and final presentation.

