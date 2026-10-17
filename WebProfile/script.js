$(document).ready(function () {

    /* =====================================================
       SETTINGS
    ====================================================== */

    const EMAIL =
        "delagonzalesJj2@gmail.com";


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       SCROLL FUNCTION
    ====================================================== */

    function goToSection(section) {

        if (!section.length) {
            return;
        }


        $("html, body").animate(
            {
                scrollTop:
                    section.offset().top - 95
            },
            reduceMotion ? 0 : 600
        );

    }


    /* =====================================================
       NAVIGATION
    ====================================================== */

    $(".nav-link").on(
        "click",
        function (event) {

            event.preventDefault();


            const id =
                $(this)
                    .attr("href");


            goToSection(
                $(id)
            );


            $(".nav-links")
                .removeClass(
                    "open"
                );

        }
    );


    $(".logo").on(
        "click",
        function (event) {

            event.preventDefault();


            goToSection(
                $("#profile")
            );

        }
    );


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    $(".menu-btn").on(
        "click",
        function () {

            $(".nav-links")
                .toggleClass(
                    "open"
                );

        }
    );


    $(window).on(
        "resize",
        function () {

            if (
                $(window).width()
                >
                760
            ) {

                $(".nav-links")
                    .removeClass(
                        "open"
                    );

            }

        }
    );


    /* =====================================================
       HERO BUTTONS
    ====================================================== */

    $(".introbtn").on(
        "click",
        function () {

            goToSection(
                $("#about")
            );

        }
    );


    $(".projects").on(
        "click",
        function () {

            goToSection(
                $("#projects")
            );

        }
    );


    /* =====================================================
       TYPING
    ====================================================== */

    const typingText = [

        "HI, I'M JEZ..",
        "I LIKE PIXEL ART.",
        "I LIKE DESIGNING.",
        "I'M LEARNING WEB DESIGN.",
        "WELCOME TO MY SPACE."

    ];


    let currentText = 0;
    let currentLetter = 0;
    let deleting = false;


    function typingAnimation() {

        const text =
            typingText[
                currentText
            ];


        if (!deleting) {

            currentLetter++;


            $(".typing").text(

                text.substring(
                    0,
                    currentLetter
                )

            );


            if (
                currentLetter
                ===
                text.length
            ) {

                deleting = true;


                setTimeout(
                    typingAnimation,
                    1400
                );


                return;

            }

        } else {

            currentLetter--;


            $(".typing").text(

                text.substring(
                    0,
                    currentLetter
                )

            );


            if (
                currentLetter
                ===
                0
            ) {

                deleting = false;


                currentText =

                    (
                        currentText + 1
                    )

                    %

                    typingText.length;

            }

        }


        setTimeout(
            typingAnimation,
            deleting
                ? 45
                : 80
        );

    }


    if (reduceMotion) {

        $(".typing")
            .text(
                typingText[0]
            );

    } else {

        typingAnimation();

    }


    /* =====================================================
       STATUS FUNCTION
    ====================================================== */

    function setStatus(message) {

        $("#status")
            .stop(
                true,
                true
            )
            .fadeOut(
                80,
                function () {

                    $(this)
                        .text(message)
                        .fadeIn(120);

                }
            );

    }


    /* =====================================================
       EXHIBIT MOUSE ENTER / LEAVE
    ====================================================== */

    $("#exhibit")
        .on(
            "mouseenter",
            function () {

                setStatus(
                    "cursor entered exhibit area."
                );

            }
        )

        .on(
            "mouseleave",
            function () {

                setStatus(
                    "cursor left exhibit area."
                );

            }
        );


    /* =====================================================
       HOVER BUTTON
    ====================================================== */

    $(".hov")

        .on(
            "mouseenter",
            function () {

                $(this).css({

                    background:
                        "#ffefb7",

                    color:
                        "#081a2f"

                });


                setStatus(
                    "hover button is being hovered."
                );

            }
        )

        .on(
            "mouseleave",
            function () {

                $(this).css({

                    background:
                        "",

                    color:
                        ""

                });


                setStatus(
                    "hover ended."
                );

            }
        );


    /* =====================================================
       PRESS BUTTON
    ====================================================== */

    $(".mou")

        .on(
            "mousedown",
            function () {

                $(this)
                    .css(
                        "background",
                        "#70d4b0"
                    );


                setStatus(
                    "mouse button is currently pressed."
                );

            }
        )

        .on(
            "mouseup mouseleave",
            function () {

                $(this)
                    .css(
                        "background",
                        ""
                    );


                setStatus(
                    "mouse button was released."
                );

            }
        );


    /* =====================================================
       CLICK / DOUBLE CLICK
    ====================================================== */

    $(".clik")

        .on(
            "click",
            function () {

                setStatus(
                    "button clicked once."
                );

            }
        )

        .on(
            "dblclick",
            function () {

                const button =
                    $(this);


                setStatus(
                    "double click detected!"
                );


                button.text(
                    "DOUBLE!"
                );


                setTimeout(
                    function () {

                        button.text(
                            "CLICK ME"
                        );

                    },
                    1000
                );

            }
        );


    /* =====================================================
       INPUT
    ====================================================== */

    $("#typing").on(
        "input",
        function () {

            const value =
                $(this)
                    .val()
                    .trim();


            if (
                value
                ===
                ""
            ) {

                setStatus(
                    "text box is empty."
                );

            } else {

                setStatus(

                    'typing: "'
                    +
                    value
                    +
                    '"'

                );

            }

        }
    );


    /* =====================================================
       SELECT
    ====================================================== */

    $("#choose").on(
        "change",
        function () {

            const choice =
                $(this)
                    .val();


            if (!choice) {

                setStatus(
                    "no companion selected."
                );


                return;

            }


            setStatus(
                choice
                +
                " selected."
            );

        }
    );


    /* =====================================================
       DATE
    ====================================================== */

    $("#date").on(
        "change",
        function () {

            const selectedDate =
                $(this)
                    .val();


            if (
                selectedDate
            ) {

                setStatus(
                    "selected date: "
                    +
                    selectedDate
                );

            }

        }
    );


    /* =====================================================
       RADIO
    ====================================================== */

    $('input[name="color"]')
        .on(
            "change",
            function () {

                const color =
                    $(this)
                        .val();


                setStatus(
                    "selected color: "
                    +
                    color
                );

            }
        );


    /* =====================================================
       CHECKBOXES
    ====================================================== */

    $(".checkbox-grid input")
        .on(
            "change",
            function () {

                const selected = [];


                $(".checkbox-grid input:checked")
                    .each(
                        function () {

                            selected.push(
                                $(this)
                                    .val()
                            );

                        }
                    );


                if (
                    selected.length
                    ===
                    0
                ) {

                    setStatus(
                        "no learning option selected."
                    );

                } else {

                    setStatus(

                        "selected: "
                        +
                        selected.join(
                            ", "
                        )

                    );

                }

            }
        );


    /* =====================================================
       HIDE / SHOW
    ====================================================== */

    $(".hide").on(
        "click",
        function () {

            $(".exhibit")
                .slideUp(
                    reduceMotion
                        ? 0
                        : 350
                );


            setStatus(
                "exhibit is currently hidden."
            );

        }
    );


    $(".show").on(
        "click",
        function () {

            $(".exhibit")
                .slideDown(
                    reduceMotion
                        ? 0
                        : 350
                );


            setStatus(
                "exhibit is now visible."
            );

        }
    );


    /* =====================================================
       REVEAL
    ====================================================== */

    function revealElements() {

        const windowBottom =

            $(window)
                .scrollTop()

            +

            $(window)
                .height();


        $(".reveal")
            .each(
                function () {

                    const elementTop =
                        $(this)
                            .offset()
                            .top;


                    if (
                        windowBottom
                        >
                        elementTop + 60
                    ) {

                        $(this)
                            .addClass(
                                "show"
                            );

                    }

                }
            );

    }


    /* =====================================================
       ACTIVE NAV
    ====================================================== */

    function updateNavigation() {

        const position =

            $(window)
                .scrollTop()

            +

            170;


        $(".section")
            .each(
                function () {

                    const top =
                        $(this)
                            .offset()
                            .top;


                    const bottom =
                        top
                        +
                        $(this)
                            .outerHeight();


                    const id =
                        $(this)
                            .attr(
                                "id"
                            );


                    if (
                        position
                        >=
                        top

                        &&

                        position
                        <
                        bottom
                    ) {

                        $(".nav-link")
                            .removeClass(
                                "active"
                            );


                        $(
                            '.nav-link[href="#'
                            +
                            id
                            +
                            '"]'
                        )
                        .addClass(
                            "active"
                        );

                    }

                }
            );

    }


    $(window).on(
        "scroll resize",
        function () {

            revealElements();

            updateNavigation();

        }
    );


    revealElements();
    updateNavigation();


    /* =====================================================
       PROJECT FILTER
    ====================================================== */

    $(".filter-btn").on(
        "click",
        function () {

            const filter =
                $(this)
                    .data(
                        "filter"
                    );


            $(".filter-btn")
                .removeClass(
                    "active"
                );


            $(this)
                .addClass(
                    "active"
                );


            if (
                filter
                ===
                "all"
            ) {

                $(".project-card")
                    .removeClass(
                        "project-hidden"
                    );

            } else {

                $(".project-card")
                    .each(
                        function () {

                            const category =
                                $(this)
                                    .data(
                                        "category"
                                    );


                            if (
                                category
                                ===
                                filter
                            ) {

                                $(this)
                                    .removeClass(
                                        "project-hidden"
                                    );

                            } else {

                                $(this)
                                    .addClass(
                                        "project-hidden"
                                    );

                            }

                        }
                    );

            }


            $(".track")
                .scrollLeft(0);

        }
    );


    /* =====================================================
       PROJECT CAROUSEL
    ====================================================== */

    $(".car-btn").on(
        "click",
        function () {

            const track =
                $(".track")[0];


            if (!track) {
                return;
            }


            const visibleProject =
                $(".project-card:visible")
                    .first();


            if (
                visibleProject.length
                ===
                0
            ) {

                return;

            }


            const width =
                visibleProject
                    .outerWidth(true);


            const direction =

                $(this)
                    .hasClass(
                        "next"
                    )

                ? 1

                : -1;


            track.scrollBy({

                left:
                    width
                    *
                    direction,

                behavior:
                    reduceMotion
                        ? "auto"
                        : "smooth"

            });

        }
    );


    /* =====================================================
       OPEN PROJECT CARD
    ====================================================== */

    function openProject(card) {

        const projectLink =
            card.data(
                "link"
            );


        if (!projectLink) {
            return;
        }


        window.open(
            projectLink,
            "_blank"
        );

    }


    $(".project-card").on(
        "click",
        function () {

            openProject(
                $(this)
            );

        }
    );


    $(".project-card").on(
        "keydown",
        function (event) {

            if (
                event.key
                ===
                "Enter"

                ||

                event.key
                ===
                " "
            ) {

                event.preventDefault();


                openProject(
                    $(this)
                );

            }

        }
    );


    /* =====================================================
       CONTACT
    ====================================================== */

    $("#contactForm").on(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                $("#name")
                    .val()
                    .trim();


            const email =
                $("#Email")
                    .val()
                    .trim();


            const comment =
                $("#Comment")
                    .val()
                    .trim();


            if (
                !name
                ||
                !email
                ||
                !comment
            ) {

                alert(
                    "Please complete all fields."
                );


                return;

            }


            const subject =
                encodeURIComponent(

                    "Portfolio Message from "
                    +
                    name

                );


            const body =
                encodeURIComponent(

                    comment

                    +

                    "\n\nSender Name: "

                    +

                    name

                    +

                    "\nSender Email: "

                    +

                    email

                );


            window.location.href =

                "mailto:"
                +
                EMAIL
                +
                "?subject="
                +
                subject
                +
                "&body="
                +
                body;

        }
    );


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    $("#backToTop").on(
        "click",
        function () {

            $("html, body")
                .animate(
                    {
                        scrollTop: 0
                    },
                    reduceMotion
                        ? 0
                        : 600
                );

        }
    );

});