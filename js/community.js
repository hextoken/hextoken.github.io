var path = decodeURIComponent(window.location.hash).replace("#!/", "").split('/');

if (path.length == 3 && !isNaN(path[1])) {
    var disqus_config = function () {
        this.page.url = 'http://www.ghostmob.net/#!/' + path[0] + '/' + path[1] + '/' + encodeURIComponent(path[2]);
        this.page.identifier = path[1] + '/' + encodeURIComponent(path[2]).toLowerCase();
        this.page.title = path[2];
    };

    (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = '//ghostmob.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
}
else {
    $.getJSON("https://disqus.com/api/3.0/forums/listThreads.json?forum=ghostmob&api_key=YYlrKdgDqPbLavGNvnubVLlZRFe1Whgp8QBa2gnF0beYCFlpJtmtiILuzddfFP6b", function (data) {
        var items = [];

        console.log(data);

        for (var i = 0; i < data.response.length; i++) {
            var thread = data.response[i];

            if (!thread.isClosed) {
                console.lo(thread);
                items.push("<li id='" + thread.identifiers[0] + "'>" + thread.title + "</li>");
            }
        }

        $("ul#threads").html(items.join("")).show;
    });
}