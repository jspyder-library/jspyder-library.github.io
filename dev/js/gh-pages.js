js.alg.run(function() {
    var links = [
            { text: "Home", url: "home" },
            { text: "Documentation", url: "docs" },
            { text: "GitHub", url: "github" },
            { text: "Waffle", url: "waffle" }
        ],
        data = {
            links: [],
            header_links: links,
            version: js.env.version
        };
    
    js.template
        .register("gh_date", function (format) {
            return js.date().asString(format);
        });
    
    js.lib
        // initializes the main page
        .register("init", function() {
            js.template.storeTemplateXml("./template/templates.xml", function () { 
                js.template(data).compile("main-page", null, function(html) {
                    js.dom(document.body).append(html);
                    js.lib("init-header-links")
                        .lib("link-click", ["home"]);
                });
            });
        })
        // initializes the links on the left side of the page
        .register("init-header-links", function() {
            js.dom("#main-page-header .main-page-link-item")
                .on("click", function(event) {
                    var attrs = { "data-link": null };
                    js.dom(this).getAttrs(attrs);
                    js.lib("link-click", [attrs["data-link"]]);
                })
        })
        // prepares the links
        .register("init-navbar-links", function() {
            js.dom("#main-page-links .main-page-link-item")
                .on("click", function(event) {
                    var attrs = { "data-link": null };
                    js.dom(this).getAttrs(attrs);
                    js.lib("link-click", [attrs["data-link"]]);
                });
        })
        // pushes content into the document area
        .register("push-content", function(html) {
            js.dom("#main-page-content-area").append(html);
        })
        // erases content from the document area
        .register("erase-content", function() {
            js.lib("set-html", [""]);
        })
        // overwrites the current content area
        .register("set-html", function(html) {
            js.dom("#main-page-content-area").setHtml(html);
        })
        // overwrites the current content area
        .register("set-content", function(content) {
            js.lib("erase-content").lib("push-content", [content]);
        })
        // pushes new links onto the page
        .register("set-navbar-links", function(links) {
            js.template({ links: links })
                .compile("main-page-link-list", null, function(html) {
                    js.dom("#main-page-links")
                        .setHtml(html);
                });
            
            js.lib("init-navbar-links");
        })
        // processes link clicks
        .register("link-click", function(link) {
            var page = js.registry.fetch("js-pages")[link];
                
            switch(link) {
                case "github":
                    window.open("https://www.github.com/theorphan/jspyder/");
                    break;
                case "docs":
                    window.open("./docs/index.html");
                    break;
                case "waffle":
                    window.open("https://waffle.io/theorphan/jspyder");
                    break;
            }
            
            if(page) {
                js.registry.stash("gh-pages::page", link);
                page();
            }
            return;
        });
        
    js.registry.stash("js-pages", {
        "home": function() {
            var html = js.template().compile("home-page").output(),
                links = [
                    { text: "JSpyder", url: "home" },
                    { text: "JS-Ajax", url: "ajax" },
                    { text: "JS-Alg", url: "alg" },
                    { text: "JS-Canvas", url: "canvas" },
                    { text: "JS-Date", url: "date" },
                    { text: "JS-Dialog", url: "dialog" },
                    { text: "JS-DOM", url: "dom" },
                    { text: "JS-Download", url: "download" },
                    { text: "JS-DType", url: "dtype" },
                    { text: "JS-Env", url: "env" },
                    { text: "JS-Form", url: "form" },
                    { text: "JS-Lib", url: "lib" },
                    { text: "JS-Log", url: "log" },
                    { text: "JS-SP", url: "sharepoint" },
                    { text: "JS-Template", url: "template" }
                ];

                
            js.lib("set-html", [html])
                .lib("set-navbar-links", [links]);
                
            js.form({
                fields: {
                    my_button: {
                        type: "button",
                        text: "Click Me",
                        click: function (event) {
                            js.dialog.alert({
                                title: "Alert",
                                message: "You clicked the message button!"
                            });
                        }
                    }
                }
            })
                .compileDom("#jspyder-example-output");
            return;
        },
        "ajax": function () {
            js.template()
                .compile("ajax-page", null, function (html) {
                    js.lib("set-content", [html]);
                });
        },
        "alg": function () {
            js.template()
                .compile("alg-page", null, function (html) {
                    js.lib("set-content", [html]);
                });
        },
        "canvas": function() {
            var canvasDef = {
                css: { "border": "1px solid black" },
                height: 250,
                width: 400
            },
                templateDef = {},
                data = {
                    borderWidth: 0,
                    max: 10000,
                    labelSize: 12,
                    labels: ["Group #1", "Group #2", "Group #3", "Group #4"],
                    sections: [
                        { fill: "#FBB", border: "#D00", borderWidth: 1, values: [Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000] },
                        { fill: "#BFB", border: "#0D0", borderWidth: 1, values: [Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000] },
                        { fill: "#BBF", border: "#00D", borderWidth: 1, values: [Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000] }
                    ]
                },
                canvas = js.canvas(canvasDef),
                template = js.template(templateDef).compile("canvas-page").output();
                
            
            var nodes = js.form({
                    fields: {
                        "chart_types": {
                            type: "buttonset",
                            buttons: [
                                { text: "Bar Chart", click: function () { canvas.clear().draw("barchart", data).render(); } },
                                { text: "Line Chart", click: function () { canvas.clear().draw("linechart", data).render(); } },
                                { text: "Pie Chart" }
                            ]
                        }
                    }
                }).compileExplicit(template);
                
            js.lib("set-content", [nodes]);
            canvas
                .attach("#canvas-container")
                .draw("barchart", data)
                .render();
            
            return;
        },
        "date": function () {
            var html = js.template().compile("date-page").output();
            js.lib("set-content", [html]);
            tick();
            
            function tick() {
                if (js.registry.fetch("gh-pages::page") === "date") {
                    setTimeout(tick, 250);
                }
                var now = js.date(),
                    data = {
                        date: now.asString("dddd, [the] dth of mmmm, at hh:nn:ss am"),
                        zulu: now.asString("dd-MMM-yyyy HH:nn:ss")
                    },
                    code = js.template(data).compile("date-page-example").output();
                    
                js.dom("#js-date-example").setHtml(code);
            }
        },
        "form": function () {
            var formData = {
                    fields: {
                        autocomplete: {
                            type: "autocomplete",
                            text: "Autocomplete Field",
                            value: "auto1",
                            strict: true,
                            values: [
                                { text: "Search #1",  value: "auto1" },
                                { text: "Search #2",  value: "auto2" },
                                { text: "Search #3",  value: "auto3" },
                                { text: "Search No. 1",  value: "auto1" },
                                { text: "Search No. 2",  value: "auto2" },
                                { text: "Search No. 3",  value: "auto3" },
                                { text: "Search 1",  value: "auto1" },
                                { text: "Search 2",  value: "auto2" },
                                { text: "Search 3",  value: "auto3" }
                            ] },
                        button: {
                            type: "button",
                            text: "Button",
                            ignore: true,
                            click: function() {
                                js.dialog.confirm({
                                    message: "This is my custom confirmation",
                                    callback: function(v) {
                                        js.dialog.alert({
                                        message: "You pressed the " + (v ? "OK" : "Cancel") + " button."
                                        });
                                    }
                                });
                            } },
                        checkboxes: { 
                            type: "checkbox", 
                            text: "Checkbox Field",
                            default: "cb2",
                            values: [
                                { text: "Checbox #1", value: "cb1" },
                                { text: "Checbox #2", value: "cb2" },
                                { text: "Checbox #3", value: "cb3" }
                            ] },
                        checkboxes_bitwise: { 
                            type: "checkbox-bitwise", 
                            text: "Bitwise Checkbox Field",
                            default: 0x2,
                            values: [
                                { text: "Bitwise #1", value: 0x1 },
                                { text: "Bitwise #2", value: 0x2 },
                                { text: "Bitwise #3", value: 0x4 }
                            ] },
                        currency: {
                            type: "currency",
                            text: "Currency Field",
                            symbol: "$" },
                        datefield: {
                            type: "date",
                            text: "Date Field" },
                        dropdown: {
                            type: "dropdown", 
                            text: "Dropdown Field",
                            default: "dd3",
                            values: [
                                { text: "Dropdown #1", value: "dd1" },
                                { text: "Dropdown #2", value: "dd2" },
                                { text: "Dropdown #3", value: "dd3" }
                            ]},
                        hidden: {
                            type: "hidden",
                            text: "Hidden Field",
                            tooltip: "Hidden fields do not render to the DOM" },
                        input: {
                            type: "input",
                            text: "Input Field" },
                        numerical: {
                            type: "number",
                            text: "Numerical Field" },
                        radios: { 
                            type: "radio", 
                            text: "Radio Field",
                            default: "radio2",
                            values: [
                                { text: "Radio #1", value: "radio1" },
                                { text: "Radio #2", value: "radio2" },
                                { text: "Radio #3", value: "radio3" }
                            ] },
                        reset: {
                            type: "reset",
                            text: "Reset Button",
                            icon: "refresh",
                            class: "js-buttonset",
                            ignore: true },
                        submit: {
                            type: "submit",
                            text: "Submit Button",
                            icon: "save",
                            class: "js-buttonset",
                            ignore: true },
                        textarea: {
                            type: "textarea",
                            text: "Textarea Field" },
                        textarea_resize: {
                            type: "textarea-autosize",
                            text: "Autosized Textarea Field" },
                        toggles: {
                            type: "toggles",
                            text: "Toggle Field",
                            default: "toggle2",
                            values: [
                                { text: "Toggle #1", value: "toggle1" },
                                { text: "Toggle #2", value: "toggle2" },
                                { text: "Toggle #3", value: "toggle3" }
                            ] },
                        toggles_bitwise: {
                            type: "toggles-bitwise",
                            text: "Bitwise Toggle Field",
                            default: 0x2,
                            values: [
                                { text: "0x4", value: 0x4 },
                                { text: "0x2", value: 0x2 },
                                { text: "0x1", value: 0x1 }
                            ] },
                        toggles_radio: {
                            type: "toggles-radio",
                            text: "Radio Toggle Field",
                            default: "tradio2",
                            values: [
                                { text: "TRadio #1", value: "tradio1" },
                                { text: "TRadio #2", value: "tradio2" },
                                { text: "TRadio #3", value: "tradio3" }
                            ] }
                    },
                    success: function(values) {
                        var $textarea = js.dom("#form-print"),
                            strValues = [];
                            
                        js.alg.each(values, function(value, field) {
                            value = (value instanceof Array ? value.join(', ') : value);
                            if(field === "checkboxes_bitwise" || field === "toggles_bitwise") {
                                value = "000" + value.toString(2);
                                value = value.substring(value.length - 3);
                            }
                            strValues.push(
                                "<b>", field, ":</b> ", value, "<br />"
                            );
                        });
                        
                        $textarea.setHtml(strValues.join(''));
                    }
            };
            
            js.template().compile("form-page", null, function (d) { js.lib("set-content", [d]); });
            
            var $form = jspyder.form(formData);
            $form.compileDom("#form-template");
        }
    });
        
    js.lib("init");
});