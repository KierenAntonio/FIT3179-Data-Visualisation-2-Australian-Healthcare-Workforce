document.addEventListener("DOMContentLoaded", async () => {
  const chartNodes = Array.from(document.querySelectorAll("[data-spec]"));

  chartNodes.forEach((node) => {
    node.classList.add("is-loading");
    node.textContent = "Loading visualisation…";
  });

  await Promise.allSettled(
    chartNodes.map(async (node) => {
      const specPath = node.dataset.spec;

      try {
        const response = await fetch(specPath, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Could not load ${specPath} (${response.status})`);
        }

        const spec = await response.json();
        node.textContent = "";

        await vegaEmbed(node, spec, {
          actions: false,
          renderer: "svg",
          tooltip: { theme: "light" }
        });

        node.classList.remove("is-loading");
      } catch (error) {
        console.error(`Visualisation failed: ${specPath}`, error);
        node.classList.remove("is-loading");
        node.innerHTML = "";

        const message = document.createElement("p");
        message.className = "chart-error";
        message.setAttribute("role", "alert");
        message.textContent = "This visualisation could not be loaded. Please refresh the page or check the chart specification.";
        node.appendChild(message);
      }
    })
  );
});
