(function showMissOnly() {
    const gradeThreshold = Number.parseInt(window.prompt("一致度順位がこの順位より悪い時", "2"));
    const firstThreshold = gradeThreshold >= 3 ? 100 : Number.parseInt(window.prompt("２位の場合のしきい値", "70"));
    const turnList = document.querySelectorAll("details.collapse");
    for (const turn of turnList) {
        const turnInfo = turn.querySelector(".turn-info");
        if (turnInfo !== null) {
            const orderLoss = turnInfo.querySelector(".order-loss");
            const firstScore = Number.parseFloat(turn.querySelector("details>table>tbody>tr>td:nth-child(3)>span").title);
            const yourGrade = orderLoss ? Number.parseInt(orderLoss.textContent.replace(" #", "")) : 1;
            if (gradeThreshold === 2 && yourGrade === 2 && firstScore >= firstThreshold ) {
                turn.setAttribute("open", "");
            } else if (yourGrade !== 2 && gradeThreshold <= yourGrade) {
                turn.setAttribute("open", "");
            } else {
                turn.removeAttribute("open");
            }
        }
    }
})();
