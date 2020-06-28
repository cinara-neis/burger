

$(document).ready(() => {



    $(".change-devoured").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");

        console.log(id);

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: id
        }).then((result) => {
            console.log(`burger devoured ${result}`);

            location.reload();
        })

    });

    $(".throw-up").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");

        console.log(id);

        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE",
            data: id
        }).then((result) => {
            console.log(`Deleted ${result}`);

            location.reload();
        })

    });

    $(".create-form").on("submit", function (event) {
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