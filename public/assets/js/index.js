
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