fetchData();
async function fetchData() {
    try {
        const response = await fetch('https://coding-week-2024-api.onrender.com/api/data');
        if (!response.ok) {
            throw new error("Could not fetch resource");
        }
        const data = await response.json();

        function change(text, num) {
            const element1 = document.querySelector(text + '  .btn_2');
            element1.innerHTML = data[num]['type'];
            const element2 = document.querySelector(text + ' > p');
            element2.innerHTML = data[1]['headline'];
            const element3 = document.querySelector('.info2 .date1_2 p');
            element3.innerHTML = data[1]['author'];
            const element4 = document.querySelector('.info2 .date2_2 p');
            element4.innerHTML = data[1]['date'];
            const element5 = document.querySelector(text + ' img');
            element5.setAttribute('src', data[1]['image'])
        }
        function changedetails1(text, num) {
            const element1 = document.querySelector(text + ' .btn_3');
            element1.innerHTML = data[num]['type'];
            const element2 = document.querySelector(text + ' > p');
            element2.innerHTML = data[num]['headline'];
            const element3 = document.querySelector(text + ' .date1_3 p');
            element3.innerHTML = data[num]['author'];
            const element4 = document.querySelector(text + ' .date2_3 p');
            element4.innerHTML = data[num]['date'];
            const element5 = document.querySelector(text + ' img');
            element5.setAttribute('src', data[num]['image'])
        }

        changedetails1('.info4', 3);
        changedetails1('.info3', 2);
        change('.info2', 1);


        function changedetails2(text, num) {
            const element2 = document.querySelector(text + ' p');
            element2.innerHTML = data[num]['headline'];
            const element4 = document.querySelector(text + ' .side_text2');
            element4.innerHTML = data[num]['date'];
            const element5 = document.querySelector(text + ' img');
            element5.setAttribute('src', data[num]['image']);
        }

        changedetails2('.s06', 9);
        changedetails2('.s05', 8);
        changedetails2('.s04', 7);
        changedetails2('.s03', 6);
        changedetails2('.s02', 5);
        changedetails2('.s01', 4);

        {
            const element1 = document.querySelector('.info1  button');
            element1.innerHTML = data[0]['type'];
            const element2 = document.querySelector('.info1 > p');
            element2.innerHTML = data[0]['headline'];
            const element3 = document.querySelector('.info1 .date1 p');
            element3.innerHTML = data[0]['author'];
            const element4 = document.querySelector('.info1 .date2 p');
            element4.innerHTML = data[0]['date'];
            const element5 = document.querySelector('.info1 img');
            element5.setAttribute('src', data[0]['image'])
        }

        function makeclickable(text, num) {
            const element = document.querySelector(text)
            element.addEventListener("click", function () {
                const myDiv = document.querySelector(".content");
                myDiv.style.display = 'block';
                document.querySelector(".content .popuptext").innerHTML = data[num]['content'];
                document.querySelector(".content #author").innerHTML = data[num]['author'];
            });
        }
        makeclickable('.info4', 3);
        makeclickable('.info1', 0);
        makeclickable('.info2', 1);
        makeclickable('.info3', 2);
        makeclickable('.s01', 4);
        makeclickable('.s02', 5);
        makeclickable('.s03', 6);
        makeclickable('.s04', 7);
        makeclickable('.s05', 8);
        makeclickable('.s06', 9);





        const myDiv = document.querySelector(".content");
        const closeButton = document.getElementById("closeButton");

        closeButton.addEventListener("click", function () {

            myDiv.style.display = "none";
        });
    }
    catch (error) {
        console.error(error);
    }
}