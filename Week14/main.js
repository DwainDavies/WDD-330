function checkButton() {
    var getSelectedValue = document.querySelector(
        'input[name="season"]:checked');

    if (getSelectedValue != null) {
        if (getSelectedValue === spring) {
            document.getElementById("disp").innerHTML = '<a href="data/spring-crop-plant.html">Click for Spring Plants</a>';
        } else if (getSelectedValue === autumn) {
            document.getElementById("disp").innerHTML = '<a href="data/autumn-crop-plant.html">Click for Autumn Plants</a>';
        } else {
            document.getElementById("disp").innerHTML = getSelectedValue.value +
                " is not a good season to plant in.";
        }
    } else {
        document.getElementById("error").innerHTML = "*You have not selected any season";
    }
}