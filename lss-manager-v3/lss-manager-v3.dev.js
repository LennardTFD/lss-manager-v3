//██╗.....███████╗███████╗....███╗...███╗.█████╗.███╗...██╗.█████╗..██████╗.███████╗██████╗
//██║.....██╔════╝██╔════╝....████╗.████║██╔══██╗████╗..██║██╔══██╗██╔════╝.██╔════╝██╔══██╗
//██║.....███████╗███████╗....██╔████╔██║███████║██╔██╗.██║███████║██║..███╗█████╗..██████╔╝
//██║.....╚════██║╚════██║....██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║...██║██╔══╝..██╔══██╗
//███████╗███████║███████║....██║.╚═╝.██║██║..██║██║.╚████║██║..██║╚██████╔╝███████╗██║..██║
//╚══════╝╚══════╝╚══════╝....╚═╝.....╚═╝╚═╝..╚═╝╚═╝..╚═══╝╚═╝..╚═╝.╚═════╝.╚══════╝╚═╝..╚═╝
/**
 * Tell jQuery to allow caching beforehand!
 */
$.ajaxPrefilter(function (options, originalOptions) {
    if (options.dataType === 'script' || originalOptions.dataType === 'script' ||
        options.dataType === 'stylesheet' || originalOptions.dataType === 'stylesheet') {
        options.cache = true;
    }
});

/**
 * Make case insensetive :contains() possible
 */
jQuery.expr[':'].containsci = function (a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};

window.lssm = {
    config: {
        //server: "https://localhost/lss-manager-v3",
        server: "https://lss-manager.de/lss-webpack", // Domain wo alles liegt
        stats_uri: "https://proxy.lss-manager.de/stat.php",
        forum_link: "https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/",
        key_link: "/profile/external_secret_key/", // Domain wo alles liegt
        version: "3.3.5",
        github: 'https://github.com/LSS-Manager/lss-manager-v3',
        prefix: 'lssm'
    },
    loadScript: function (link) {
        try {
            let uid = "";
            let game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            //$('body').append('<script src="' + this.config.server + link + uid +'" type="text/javascript"></script>');
            $.getScript(this.config.server + link + uid);
        } catch (e) {
            console.error("On script load: " + e.message);
        }
    },
    loadStyle: function (link) {
        try {
            let uid = "";
            let game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            $('body').append('<link href="' + this.getlink(link) + '" rel="stylesheet" type="text/css">');
        } catch (e) {
            console.error("On script load: " + e.message);
        }
    },
    getlink: function (file) {
        try {
            let uid = "";
            let game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            return this.config.server + file + uid;
        } catch (e) {
            console.error("On script load: " + e.message);
        }
    },
    key: null,
    buildings: {},
    vehicles: {},
};


/**
 * Localization
 */
I18n.defaultLocale = 'de';
I18n.fallbacks = true;
I18n.locales.nl = ['nl', 'en', 'de'];
I18n.translations.de.lssm = {
    lssm: "LSS-Manager",
    version: "Beta",
    appstore: "APPSTORE",
    appstore_welcome: "Willkommen im Appstore vom LSS Manager",
    appstore_desc: "Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin " +
    "kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen " +
    "kommen, kannst du uns gerne eine Nachricht schreiben oder <a href=\"" +
    "https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/" +
    "\" target=\"blank\">im Forum einen Beitrag verfassen</a>.",
    back_lss: "Zurück zu Leitstellenspiel",
    settings: "Einstellungen",
    saving: "Speichere...",
    save: "Speichern",
    cantactivate: "kann nicht aktiviert werden, da es mit folgenden Modul(en) inkompatibel ist:",
    activated: "Folgende Module wurden aktiviert:",
    cantload: "<h2>LSS-Manager konnte nicht geladen werden</h2>Bitte kontaktiere ein Mitglied vom Entwicklerteam.",
    login: "Bitte zuerst anmelden",
    mapkit: "Dieses Modul unterstützt kein Mapkit",
    apps: {}
};
I18n.translations.en.lssm = {
    appstore_welcome: "Welcome to the Appstore of LSS Manager",
    appstore_desc: "Here you will find various plugins that will enrich your playing experience. Each plugin can be " +
    "activated individually by placing the lever on green. If there are any problems, you can write us a message or " +
    "<a href=\"" +
    "http://board.missionchief.com/index.php/Thread/146-LSS-Manager-for-missionchief/" +
    "\" target=\"blank\">write a message in the forum</a>.",
    back_lss: "Back to missionchief",
    settings: "Settings",
    saving: "Saving...",
    save: "Save",
    activated: "Following Modules have been activated:",
    cantactivate: "can't be activated as it's incompatible with the following modul(es):",
    cantload: "<h2>LSS-Manager could not be loaded</h2>Please contact a member of the development team.",
    login: "Please log in first",
    mapkit: "This module doesn't support Mapkit",
    apps: {}
};
I18n.translations.nl.lssm = {
    appstore_welcome: "Welkom bij de App Store van LSS Manager",
    appstore_desc: "Hier vindt u verschillende plug-ins die uw game-ervaring kunnen verbeteren. " +
    "Elke plugin kan individueel worden geactiveerd, de bijbehorende hendel op groen te zetten. Mochten er " +
    "problemen zijn, kunt u <a href=\"" +
    "https://forum.meldkamerspel.com/index.php/Thread/52-LSS-Manager-for-meldkamerspel/" +
    "\" target=\"blank\">ons een bericht sturen of een bericht posten in ons topic op het forum.</a>.",
    back_lss: "Terug naar Meldkamerspel",
    settings: "Instellingen",
    saving: "Wijzigingen aan het opslaan...",
    save: "Opslaan",
    activated: "De volgende modules zijn geactiveerd:",
    cantactivate: "Kan niet worden geactiveerd omdat deze lssm_module niet samenwerkt met de volgende lssm_module(s):",
    mapkit: "Deze module ondersteunt Mapkit niet",
    apps: {}
};

/**
 * Add the modules to lssm
 */
lssm.Module = {};

/**
 * Add the appstore to LSSM
 */
lssm.appstore = {
    /**
     * Checks if a lssm_module collides with other modules
     * @param mod
     * @returns {boolean}
     */
    canActivate: function (mod) {
        let ca = true;
        // TODO: Sprechendere Variablennamen
        if ('collisions' in mod) {
            for (let c in mod.collisions) {
                let d = mod.collisions[c];
                if (lssm.Module[d].active) {
                    ca = false;
                }
            }
        }
        return ca;
    },

    hideAllForSettings: function () {
        $('.' + lssm.config.prefix + '__appstore_hideForSettings').hide();
    },
    // Erstellen der Pandels
    createModulePanels: function () {
        let panels = $('<div class="row">' +
            '<div class="col-sm-4" id="apps_col_0"></div>' +
            '<div class="col-sm-4" id="apps_col_1"></div>' +
            '<div class="col-sm-4" id="apps_col_2"></div>' +
            '</div>');
        let col = 0;
        // Get all the keys of the modules
        let mods = $.map(lssm.Module, function (value, index) {
            return [index];
        });
        // Sort the lssm_module keys
        mods.sort(function (a, b) {
            "use strict";
            let aName = I18n.t("lssm.apps." + a + ".name").toLowerCase();
            let bName = I18n.t("lssm.apps." + b + ".name").toLowerCase();
            if (aName < bName) {
                return -1;
            } else {
                return (aName > bName) ? 1 : 0;
            }
        });
        for (let i in mods) {
            let mod = lssm.Module[mods[i]];
            let isSupportedLocale = !('supportedLocales' in mod) ||
                mod.supportedLocales.indexOf(I18n.currentLocale()) >= 0;
            // Do not show certain modules in the lssm.appstore or is not supported with this locale
            if ('noapp' in mod && mod.noapp === true || !isSupportedLocale) {
                continue;
            }
            let nomapkit = (typeof mapkit !== "undefined" && 'nomapkit' in mod && mod.nomapkit === true);
            let dom = '<div style="margin-top:10px;" class="lssm_module' +
                (mod.develop ? ' lssm_module_develop' : '') + '">' +
                '<div class="panel panel-default" style="display: inline-block;width:100%;">' +
                '<div class="panel-body">' +
                '<span class="pull-right">';
            if(!nomapkit)
                dom += '<div class="onoffswitch">' +
                    '<input class="onoffswitch-checkbox" id="lssm.modules_' + mods[i] + '" ' +
                    (mod.active ? 'checked="true"' : '') + ' value="' + mods[i] +
                    '" name="onoffswitch" type="checkbox">' +
                    '<label class="onoffswitch-label" for="lssm.modules_' + mods[i] + '"></label>' +
                    '</div>';
            dom += '</span>' +
                '<h4>' + I18n.t('lssm.apps.' + mods[i] + '.name') + '</h4>';
            if(!nomapkit)
                dom += '<small style="display:none">' + I18n.t('lssm.apps.' + mods[i] + '.description');
            else
                dom += '<small style="color:darkred">' +I18n.t('lssm.mapkit');

            dom += '</small>' +
                '</div>' +
                '</div>' +
                '</div>';
            let panel = $(dom);
            panels.find("#apps_col_" + col).append(panel);
            col++;
            if (col > 2) {
                col = 0;
            }
        }
        return panels;
    },

    // Packt alle ModulPanels in ein Div zudem werden beim an und ausschalten die Einstellungen ge?ndert  & gespeichert;
    // TODO: DIV mit ID so wie CSS ausstatten & festlegen wo es eingebettet werden soll
    createModuleMain: function () {
        let prefix = lssm.config.prefix + '_appstore';
        let div = $(
            '<div class="col-md-12 lssm.appstore" id="' + prefix + '">' +
            '<div class="row">' +
            '<h2>' + I18n.t('lssm.appstore') + '</h2>' +
            '<p class="lead">' + I18n.t('lssm.appstore_welcome') + '.</p>' +
            '<p>' + I18n.t('lssm.appstore_desc') + '</p>' +
            '<input type="text" class="form-control pull-right" id="' + prefix +
            '_search" placeholder="Suche" style=" width:25%;display:inline-block;">' +
            '</div>' +
            '</div>'
        );
        div.append(this.createModulePanels());
        return div;
    },

    // Menüpunkt zu den Modulen / Einstellungen / Dashboard
    appendAppstore: function () {
        // Variablen setzen für weitere Verwendung
        let prefix = lssm.config.prefix + '_appstore';
        let settingButton = $('<li role="presentation" id="' + prefix + '"><a id="' + prefix +
            '_activate" href="#">' +
            I18n.t('lssm.appstore') + '</a></li>');

        let content = $('#navbar-mobile-footer').prev();
        content.attr('id', 'content');

        settingButton.click(function () {
            let div = $('<div class="row" id="' + prefix + '_row"></div>').append(lssm.appstore.createModuleMain());
            let dom = lssm.modal.show(div.html(), lssm.appstore.closeAppstore);
            $(dom).on('keyup', '#' + prefix + '_search', function () {
                "use strict";
                let ss = $(this).val();
                if (ss.length > 0) {
                    $(dom).find(".lssm_module:containsci(" + ss + ")").show();
                    $(dom).find(".lssm_module:not(:containsci(" + ss + "))").hide();
                } else {
                    $(dom).find(".lssm_module").show();
                }
            });
            $(dom).on('change', '.onoffswitch-checkbox', function (ev) {
                let e = ev.target;
                if (e.checked && !lssm.appstore.canActivate(lssm.Module[e.value])) {
                    $(e).prop('checked', false);
                    let warn = "\"" + I18n.t('lssm.apps.' + e.value + '.name') + "\" " + I18n.t(
                        'lssm.cantactivate');
                    // TODO: Sprechendere Variablennamen
                    for (let c in lssm.Module[e.value].collisions) {
                        let d = lssm.Module[e.value].collisions[c];
                        if (lssm.Module[d].active) {
                            warn += "\r\n" + I18n.t('lssm.apps.' + d + '.name');
                        }
                    }
                    alert(warn);
                    return;
                }
                lssm.Module[e.value].active = e.checked;
            });
            $(dom).find("h4").on("click", function () {
                "use strict";
                let next = $(this).next();
                if (next.is(":hidden")) {
                    next.slideDown("slow");
                } else {
                    next.slideUp("slow");
                }
            });
        });
        // einhängen des Buttons in der Navi
        $('#' + lssm.config.prefix + '_menu').append(settingButton);
    },
    closeAppstore: function () {
        "use strict";
        let action = lssm.appstore.checkModChanges();
        lssm.modules.saveall();
        if (action === "Reload") {
            location.reload();
        } else {
            $(document).unbind(lssm.hook.prename("lightboxClose"),lssm.appstore.closeAppstore);
            // Inform the user about activated modules.
            let activated = "";
            for (let m in action) {
                lssm.modules.load(action[m]);
                activated += I18n.t('lssm.apps.' + action[m] + '.name') + ', ';
            }
            activated = activated.substring(0, activated.length - 2);
            if (activated.length > 0) {
                let msg = I18n.t('lssm.activated') + ' ' + activated;
                lssm.notification(msg);
            }
        }
    },

    /**
     * Check if modules have been activated/deactivated and tell the caller what to do.
     * Returns: "Reload" or a array of modules to load
     */
    checkModChanges: function () {
        "use strict";
        let activated = [];
        let deactivated = [];
        let modules = lssm.settings.get("Modules", {});
        for (let m in lssm.Module) {
            if (modules[m] && !lssm.Module[m].active) {
                deactivated.push(m);
            } else if ((!modules[m]) && lssm.Module[m].active) {
                activated.push(m);
            }
        }
        if (deactivated.length > 0) {
            return "Reload";
        }
        return activated;
    },

    createDropDown: function () {
        let lssm_dropdown = $(' <li class="dropdown" id="' + lssm.config.prefix + '_dropdown">' +
            '<a href="#" id="' + lssm.config.prefix +
            '_menu_switch" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">' +
            '<span class="label label-success">' + I18n.t('lssm.lssm') + '</span> <b class="caret"></b>' +
            '</a>' +
            '<ul id="' + lssm.config.prefix + '_menu"class="dropdown-menu" role="menu" aria-labelledby="' +
            lssm.config.prefix + '_menu_switch"> </ul>' +
            '</li>');
        $('#navbar-main-collapse > ul').append(lssm_dropdown);
    }
};

/**
 * Add the settings-functions to lssm
 */
lssm.settings = {
    // Set a value to the localstorage
    set: function (key, value) {
        "use strict";
        if (typeof value === "object")
        // We have a object, parse it to json and save it.
        {
            localStorage.setItem(lssm.config.prefix + '_' + key, JSON.stringify(value));
        } else
        // Otherwise we save the raw value
        {
            localStorage.setItem(lssm.config.prefix + '_' + key, value);
        }
    },

	exists: function(key)
	{
		return localStorage.getItem(lssm.config.prefix + '_' + key) !== null;
	},

    // Get a config value from localstorage
    get: function (key, defaultvalue) {
        "use strict";
        if (typeof defaultvalue === "undefined")
        // defaultvalue is not set, return null if nothing found
        {
            defaultvalue = null;
        }
        let data;
        try {
            // Try to parse the config string as json
            data = JSON.parse(localStorage.getItem(lssm.config.prefix + '_' + key)) || defaultvalue;
        } catch (e) {
            // Couldn't parse the config value as json. Return the raw value
            data = (localStorage.getItem(lssm.config.prefix + '_' + key)) || defaultvalue;
        }
        return data;
    },

    // Remove a config value from localstorage
    remove: function (key) {
        "use strict";
        localStorage.removeItem(key);
    }
};

/**
 * Add the managed settings-functions to lssm
 */
lssm.managedSettings = {
    registeredModules: {},

    register: function (moduleSettings) {
        "use strict";
        let moduleId = moduleSettings.id;
        let settingsKey;
        // If settings don't exist, overwrite with defaults
        if (!lssm.settings.get(moduleId)) {
            for (settingsKey in moduleSettings.settings) {
                moduleSettings.settings[settingsKey].value = moduleSettings.settings[settingsKey].default;
            }
            // If we have values use them
        } else {
            let storedSettings = lssm.settings.get(moduleId);
            for (settingsKey in moduleSettings.settings) {
                if (storedSettings[settingsKey] != null) {
                    moduleSettings.settings[settingsKey].value = storedSettings[settingsKey];
                } else {
                    moduleSettings.settings[settingsKey].value = moduleSettings.settings[settingsKey].default;
                }
            }
        }
        lssm.managedSettings.registeredModules[moduleId] = moduleSettings;
    },

    reset: function (moduleId) {
        if (!lssm.settings.get(moduleId) || !lssm.managedSettings.registeredModules[moduleId]) {
            return;
        }
        lssm.settings.remove(lssm.config.prefix + '_' + moduleId);
        lssm.managedSettings.register(lssm.managedSettings.registeredModules[moduleId]);
    },

    getSetting: function (module, field) {
        "use strict";
        let settings = this.getSettings(module);
        if (settings && settings[field] !== undefined) {
            return settings[field].value;
        } else {
            return null;
        }
    },

    getSettings: function (module) {
        "use strict";
        if (lssm.managedSettings.registeredModules[module]) {
            return lssm.managedSettings.registeredModules[module].settings;
        } else {
            return null;
        }
    },

    update: function (moduleSettings) {
        "use strict";

        // Store managedSettings for runtime
        let moduleId = moduleSettings.id;
        lssm.managedSettings.registeredModules[moduleId] = moduleSettings;

        // Strip down settings object to values only and persist them
        let storeSettings = {};
        let settingsKey;
        for (settingsKey in moduleSettings.settings) {
            storeSettings[settingsKey] = moduleSettings.settings[settingsKey].value;
        }
        lssm.settings.set(moduleId, storeSettings);
    }

};

/**
 * Add the module-handler to LSSM
 */
lssm.modules = {
    saveall: function () {
        "use strict";
        let arr = {};
        for (let i in lssm.Module) {
            if(lssm.Module[i].active)
                arr[i] = lssm.Module[i].active;
        }
        lssm.settings.set("Modules", arr);
    },
    // Zum zwischenspeichern der schon geladenen Module
    addLocales: function (module) {
        let mod = module.toString();
        if (mod in lssm.Module) {
            let keys = ['name', 'description'];
            // TODO: sprechendere Variablennamen
            for (let k in keys) {
                k = keys[k];
                if (!(k in lssm.Module[mod])) {
                    continue;
                }
                for (let l in lssm.Module[mod][k]) {
                    l = l.toString();
                    if (!(mod in I18n.translations[l].lssm.apps)) {
                        I18n.translations[l].lssm.apps[mod] = {};
                    }
                    I18n.translations[l].lssm.apps[mod][k] = lssm.Module[mod][k][l];
                }
            }
        }
    },
    loadall: function () {
        "use strict";
        try {
            for (let m in lssm.Module) {
                this.load(m);
            }
        } catch (e) {
            console.error("LOADALL: " + e.message);
        }
    },

    load: function (module) {
        try {
            let path = window.location.pathname.length;
            let uid = "";
            let game = "";
            if (typeof user_id !== "undefined") {
                game = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0];
            }
            uid = "?uid=" + game + user_id;
            this.addLocales(module);
            if (lssm.Module[module].active && lssm.Module.status !== 'develop' &&
                lssm.appstore.canActivate(lssm.Module[module])) {
                if (path <= 2 || ("inframe" in lssm.Module[module] && lssm.Module[module].inframe ===
                    true)) {
                    if (lssm.Module[module].entry) {
                        lssm.Module[module].entry.call();
                    }
                }
            }
        } catch (e) {
            console.error("On lssm_module load: " + e.message);
        }
    },
    isActive: function(e) {
        return lssm.Module[e].active;
    }
};

/**
 * Add hooks to lssm
 */
lssm.hook = {
    orgfunctions: {},
    prename: function (event) {
        "use strict";
        let self = this;
        if (!this.orgfunctions.hasOwnProperty(event)) {
            this.orgfunctions[event] = window[event];
            window[event] = function () {
                $(document).trigger("lssm_" + event + "_before", arguments);
                self.orgfunctions[event].apply(window, arguments);
                $(document).trigger("lssm_" + event + "_after", arguments);
            };
        }
        return "lssm_" + event + "_before";
    },
    postname: function (event) {
        "use strict";
        let self = this;
        if (!this.orgfunctions.hasOwnProperty(event)) {
            this.orgfunctions[event] = window[event];
            window[event] = function () {
                $(document).trigger("lssm_" + event + "_before", arguments);
                self.orgfunctions[event].apply(window, arguments);
                $(document).trigger("lssm_" + event + "_after", arguments);
            };
        }
        return "lssm_" + event + "_after";
    }
};

lssm.modal = {
    /**
     * Creates a new modal
     * @param content The content
     * @param closefunc Function to call when closed
     * @returns {string} The ID of the modal
     */
    show: function (content, closefunc) {
        "use strict";
        let e = parseInt($("#lightbox_background").css("width")),
            i = parseInt($("#lightbox_background").css("height")),
            n = i - 100;
        if (592 > n) {
            n = i - 30;
        }
        let s = e - 70;
        if (862 > s) {
            s = e - 0;
        }
        let o = s - 2,
            a = n - 34,
            r = (e - s) / 2;
        $("#lightbox_box").css("width", s + "px")
            .css("height", n + "px")
            .show();
        $("#lightbox_box")
            .append('<div class="lightbox_iframe" style="width:' + o + "px;height:" + a +
                'px" id="lightbox_iframe_' +
                iframe_lightbox_number + '"><div id="iframe-inside-container">' + content + '</div></div>');
        $("#lightbox_background").show();
        $("#lightbox_box").css("left", r + "px");
        $("#lightbox_box").css("top", (i - n) / 2 + "px");
        $("#lightbox_iframe_" + iframe_lightbox_number + " #iframe-inside-container").css("height", a).css(
            "width", o);
        setTimeout(function () {
            $("#lightbox_iframe_" + iframe_lightbox_number).show().focus();
            if (typeof closefunc !== "undefined") {
                $(document).bind(lssm.hook.prename("lightboxClose"), closefunc);
            }
        }, 100);
        return "#lightbox_iframe_" + iframe_lightbox_number + " #iframe-inside-container";
    }
};

/**
 * Lets roll!
 */
(function (I18n, $) {
    // Append our main css
    $("head")
        .prepend('<link href="' + lssm.getlink('/lss-manager-v3/css/main.css') +
            '" rel="stylesheet" type="text/css">');
    // Create the lssm dropdown menu
    lssm.appstore.createDropDown();
    // And append the version to it
    $('#' + lssm.config.prefix + '_menu')
        .prepend('<li class="menu-center"><a href="' + lssm.config.github + '" target="_blank">' +
            I18n.t('lssm.version') + ': ' + lssm.config.version + '</a></li><li class="divider"></li>');
    // Only execute everything else if user is logged in
    if (typeof user_id === "undefined") {
        $('#' + lssm.config.prefix + '_menu').append('<li class="menu-center">' + I18n.t('lssm.login') +
            '</li>');
    } else {
        // Oh, and don't forget the helperfunctions
        $.getScript(lssm.getlink('/lss-manager-helpers.user.js'))
            .fail(function () {
                $("#map_outer")
                    .before(
                        '<div class="alert alert-danger alert-dismissable" style="text-align:center"><a href="#" ' +
                        'class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
                        I18n.t('lssm.cantload') + '</div>');
            })
            .done(function () {
                // There goes the core
                let loadCore = function () {
                    // Load required library's
                    $("head")
                        .append(
                            '<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" ' +
                            'integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous">' +
                            '</script>')
                        .append('<script src="' + lssm.getlink('/lss-manager-v3/js/highcharts.min.js') +
                            '" type="text/javascript"></script>')
                        .append(
                            '<link rel="stylesheet" ' +
                            'href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css">'
                        );
                    lssm.get_vehicles(true);
                    lssm.get_buildings(true);
                    setInterval(function(){lssm.get_buildings(false);lssm.get_vehicles(false);}, 120000);
                    // Get the last activated modules
                    $.getScript(lssm.getlink('/lss-manager-modules.user.js'))
                        .fail(function () {
                            $("#map_outer")
                                .before(
                                    '<div class="alert alert-danger alert-dismissable" style="text-align:center"><a href="#" ' +
                                    'class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
                                    I18n.t('lssm.cantload') + '</div>');
                        })
                        .done(function () {
                            let modules = lssm.settings.get('Modules') || {};
                            let deact = 0;
                            for (let i in modules) {
                                let modname = i.toString();
                                let nomapkit = (typeof mapkit !== "undefined" && 'nomapkit' in lssm.Module[i] && lssm.Module[i].nomapkit === true);
                                if (nomapkit && modules[i]) {
                                    console.error(modname + " is not compatible with mapkit.");
                                    lssm.Module[i].active = false;
                                    deact++;
                                    continue;
                                }
                                else if ((modname in lssm.Module) === false) {
                                    console.error(modname + " is not a valid app. Skipping.");
                                    deact++;
                                    continue;
                                }
                                else if (lssm.Module[i].active === false) {
                                    lssm.Module[i].active = modules[i];
                                }
                            }
                            if(deact>0)
                                lssm.modules.saveall();
                            // Let's load all the modules
                            lssm.modules.loadall();
                            // Oh, we also need a appstore
                            lssm.appstore.appendAppstore();
                        });
                };
                loadCore();
            });
    }
})(I18n, jQuery);