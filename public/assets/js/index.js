
$(document).ready(() => {

    // On click of "Devour!" button to set burger devoured status to true
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

    // On click to delete burger from page (and database)
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

    // Onclick to create and post new burger 
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let burgerInput = $("#newBurger").val().trim();
        let devourSelect = $("[name=devoured]:checked").val().trim()

        if (burgerInput === "") {
            $('#error-modal').modal('show');
        } else {
            const newBurger = {
                burger_name: burgerInput,
                devoured: devourSelect
            }

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then((result) => {
                console.log(result);

                location.reload();

            }).catch((err) => {
                if (err) {
                    throw (err);
                }
            });

        }
    });



});