require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.swiftype = config.swiftype || {};
    });

    gitbook.events.bind("page.change", function() {
        swiftype('send', 'pageview', window.location.pathname+window.location.search);
    });

    gitbook.events.bind("exercise.submit", function(e, data) {

    });
});
