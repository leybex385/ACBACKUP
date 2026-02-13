I need you to remove the "Your Holdings" section from the OTC and IPO Subscribe view only.

Requirements:

Do NOT delete the component globally.

Do NOT modify Ins.Stocks logic.

Only hide/remove the "Your Holdings" section when:

type = "otc"

type = "ipo"

Keep it fully functional for Ins.Stocks only.

Do not change layout, styling, or trading logic.

Only modify conditional rendering logic.

Implementation rule:

Wrap the "Your Holdings" section inside a conditional check:

if (product.type === "stock") {
renderHoldingsSection();
}

OR if using DOM control:

const holdingsSection = document.getElementById("holdingsSection");

if (product.type === "otc" || product.type === "ipo") {
if (holdingsSection) holdingsSection.style.display = "none";
} else {
if (holdingsSection) holdingsSection.style.display = "block";
}

Make sure:
✔ No blank space remains
✔ No layout shift
✔ No JS errors
✔ Works after tab switch
✔ Works after refresh

Apply only inside:

discover.html

trading.js (if required)

Do not touch:

Ins.Stocks execution

Close Order logic

Transaction system
