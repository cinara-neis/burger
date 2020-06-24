$(document).ready(() => {









    $(".create-form").on("submit", (event) => {
        event.preventDefault();


        const newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log(newBurger);
            // setTimeout(() => {
            // }, 1000);
            location.reload();

        });


    });
});