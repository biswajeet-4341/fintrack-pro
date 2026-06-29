const darkModeToggle = document.querySelector("#darkModeToggle");
const chartArea = document.querySelector(".chart-area");
const flowChart = document.querySelector("#flow-chart");

new Chart(flowChart, {
    type: "bar",
    data: {
        labels: ["Income vs Expense"],
        datasets: [
            {
                label: "Income",
                data: [30000],
                borderWidth: 1,
                backgroundColor: "#166534",
                borderRadius: 10,
            },
            {
                label: "Expense",
                data: [45667],
                borderWidth: 1,
                backgroundColor: "#991b1b",
                borderRadius: 10,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

document.querySelector("#topbarName").textContent = `Hello, ${user.username}!`;

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});
