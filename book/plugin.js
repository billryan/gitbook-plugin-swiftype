require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.swiftype = config.swiftype || {};
    });

    gitbook.events.bind("page.change", function() {

    });

    gitbook.events.bind("exercise.submit", function(e, data) {

    });
});
