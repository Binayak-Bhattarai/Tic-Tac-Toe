var curPlayer = "O";
var b;

function setBoard() {
    document.querySelector(".board").innerText=""
    b = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    curPlayer = "O";
    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            var ele = document.createElement("div");
            ele.classList.add("box");
            ele.id = `${r}-${c}`

            if (r === 0 || r === 1) {
                ele.classList.add("row");
            }

            if (c === 0 || c === 1) {
                ele.classList.add("col");
            }
            ele.addEventListener("click", function (){
                SetGame(this);
            })
            document.querySelector(".board").appendChild(ele);
           
        }
    }
    document.querySelector("#status").innerText= curPlayer+"'s Turn!";

}


function SetGame(el) {
    const cord = el.id.split("-");
    let r = parseInt(cord[0])
    let c = parseInt(cord[1])
    if (b[r][c] != "") {
        return;
    }

    b[r][c] = curPlayer;
    el.innerText = curPlayer;
    var stat = document.querySelector("#status");
    if (curPlayer === "O") {
        stat.innerText = "X's Turn!";
        curPlayer = "X";
    } else {
        stat.innerText = "O's Turn!";
        curPlayer = "O";
    }
    checkWinner();

}

function checkWinner() {

    // horitontally
    for (let r = 0; r < 3; r++) {
        if (b[r][0] == b[r][1] && b[r][1] == b[r][2] && b[r][0] != "") {
            for (let i = 0; i < 3; i++) {
                let ele = document.getElementById(`${r}-${i}`);
                ele.classList.add("winner");

            }
            setTimeout(function () {
                alert(`${b[r][0]} Wins!`);
               
                setBoard();
            }, 500); // Delay alert by (0.5 seconds)
            return;
        
        }
    }

    // vertically
    for (let c = 0; c < 3; c++) {
        if (b[0][c] == b[1][c] && b[1][c]== b[2][c] && b[0][c] != "") {
            for (let i = 0; i < 3; i++) {
                let ele = document.getElementById(`${i}-${c}`);
                ele.classList.add("winner");

            }
            setTimeout(function () {
                alert(`${b[0][c]} Wins!`);
                  setBoard();
                  
            }, 500); // Delay alert by (0.5 seconds)
            return;
        
        }
    }

    // Diagonally 
if (b[0][0] === b[1][1] && b[1][1] === b[2][2] && b[0][0] !== "") {
    for (let i = 0; i < 3; i++) {
        let ele = document.getElementById(`${i}-${i}`);
        ele.classList.add("winner");
    }
    setTimeout(function () {
        alert(`${b[0][0]} Wins!`);
        setBoard();
    }, 500);
    return;
}

// Anti-Diagonally
if (b[0][2] === b[1][1] && b[1][1] === b[2][0] && b[0][2] !== "") {
    for (let i = 0; i < 3; i++) {
        let ele = document.getElementById(`${i}-${2 - i}`);
        ele.classList.add("winner");
    }
    setTimeout(function () {
        alert(`${b[0][2]} Wins!`);
        
        setBoard();
    }, 500);
    return;
}


if (b.flat().every(cell => cell !== "")) {
    setTimeout(function () {
        alert("It's a Draw!");
        
        setBoard();
    }, 250);
}

}



setBoard();