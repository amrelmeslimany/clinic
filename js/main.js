$(function() {
    const win = $(window),
        header = $("#header"),
        navbar = $(".ma-nv");
    // Navbar & Header
    win.on("load", () => {
        mkHeightH();
    });
    win.on("resize", () => {
        mkHeightH();
    });

    function mkHeightH() {
        header.innerHeight(`${(win.innerHeight() - navbar.innerHeight()) / 1.3}px`);
    }
    // console.log();
});