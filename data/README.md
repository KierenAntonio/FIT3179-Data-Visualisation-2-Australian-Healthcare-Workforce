# Prepared data

These files are compact, human-readable extracts prepared for the Data Visualisation 2 visualisation. Values were transcribed from the linked official summary tables and checked against the displayed totals.

| File | Purpose | Source |
|---|---|---|
| `national_trend_2020_2024.csv` | Annual headcount by profession, used for trend, bump and connected-dot charts | Health Workforce Data national summary |
| `national_metrics_2024.csv` | 2024 headcount, full-time-equivalent count, age and average total hours | Health Workforce Data national summary |
| `treemap_2024.csv` | Hierarchical 2024 headcount input for the treemap | Derived from national metrics |
| `state_workforce_2024.csv` | 2024 headcount and full-time-equivalent count by profession and jurisdiction | Health Workforce Data state summary |
| `state_rates_2024.csv` | Wide, human-readable full-time-equivalent-per-100,000 table used by the interactive choropleth | Derived from state workforce full-time-equivalent counts and Australian Bureau of Statistics population |
| `state_metadata.csv` | Australian Bureau of Statistics population, geographic coordinates and cartogram layout positions | Australian Bureau of Statistics population; coordinates and layout prepared for this project |
| `remoteness_2024.csv` | Headcount, full-time-equivalent count, age and hours by profession and remoteness area | Health Workforce Data remoteness summary |
| `australia-states.geojson` | State and territory boundaries | `rowanhogan/australian-states` on GitHub |

## Important interpretation notes

- `NP` means a value was not published for confidentiality. In the prepared CSV it is left blank, not replaced with zero.
- The workforce dataset concerns registered professionals reported as employed in Australia; it is not a count of every healthcare occupation.
- National, state and remoteness totals may not reconcile exactly because of confidentiality, missing location information and differing classification coverage.
- State full-time-equivalent workers per 100,000 residents is calculated as `full-time-equivalent count / December 2024 population × 100,000`.
- Full-time-equivalent workers per 100,000 residents is an availability proxy. It does not directly measure service quality, vacancies, demand, wait time or patient outcomes.

## Source links

- https://hwd.health.gov.au/resources/data/summary-all.html
- https://hwd.health.gov.au/resources/data/summary-state.html
- https://hwd.health.gov.au/resources/data/summary-remote.html
- https://hwd.health.gov.au/resources/information/nhwds.html
- https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/dec-2024
- https://github.com/rowanhogan/australian-states

