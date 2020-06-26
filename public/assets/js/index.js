$(document).ready(() => {

    $(".change-devoured").on("click", (event) => {
        event.preventDefault();
        const id = $(".change-devoured").data("id");

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: id
        }).then((result) => {
            console.log(`burger devoured ${result}`);

            location.reload();
        }).catch((err) => {
            if (err) {
                throw (err);
            }
        });

    });


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

            location.reload();

        }).catch((err) => {
            if (err) {
                throw (err);
            }
        });


    });





});