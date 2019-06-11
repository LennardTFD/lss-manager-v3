// Einsatzhelfer
(($, win, I18n) => {
    if (!window.location.href.match(/missions|(einsaetze\/\d+)/g)) return;

    if (window.location.href.match(/einsaetze/)) {
        let id = window.location.href.match(/\d+([^?]|$)/)[0];
        $.getJSON(`${lssm.config.server}/modules/lss-missionHelper/missions.${I18n.locale}.json`, {_: new Date().getTime()}) // simple way to "disable" cache
            .done(missions => {
                if (!missions[id]) {
                    $.getScript(`${lssm.config.server}/modules/lss-missionHelper/loadMissionData.${I18n.locale}.js`);
                }
            });
        return;
    }

    I18n.translations.de['lssm']['missionHelper'] = {
        diyMission: 'Dieser Einsatz scheint ein selbst erstellter Verbandsgroßeinsatz zu sein.',
        vge: 'Verbandsgroßeinsatz',
        siwa: 'Sicherheitswache',
        missionNotDefined: 'Dieser Einsatz ist noch nicht aufgelistet.',
        patients: 'Patienten',
        transport: 'Transport',
        tragehilfe: 'Tragehilfe',
        prisoners: 'Gefangene',
        averageMinimumEmployeesFire: 'Durchschnittlich mindestens benötigte Feuerwehrleute',
        averageMinimumEmployeesPolice: 'Durchschnittlich mindestens benötigte Polizisten/Polizistinnen',
        to: 'bis zu',
        water: 'Wasserbedarf',
        vehicles: {
            lf: 'Löschfahrzeuge',
            dlk: 'Drehleitern',
            rw: 'Rüstwagen/AB-Rüst',
            elw1: 'ELW 1',
            elw2: 'ELW 2',
            atem: 'GW-Atemschutz',
            oel: 'GW-Öl',
            mess: 'GW-Messtechnik',
            gefahr: 'GW-Gefahrgut',
            gwl2: 'Schlauchwagen',
            dekon: 'Dekon-P',
            fwk: 'Feuerwehrkran',
            hoehen: 'GW-Höhenrettung',
            fustw: 'Funkstreifenwagen',
            boot: 'Boot',
            lebefkw: 'Leichter Befehlskraftwagen',
            fukw: 'Führungskraftwagen',
            grukw: 'Gruppenkraftwagen',
            gefkw: 'Gefangenenkraftwagen',
            wawe: 'Wasserwerfer',
            nef: 'NEF',
            rth: 'RTH',
            lna: 'KdoW-LNA',
            orgl: 'KdoW-OrgL',
            rtw: 'RTW',
            ktw: 'KTW oder RTW',
            lfogkworw: 'LF oder GKW oder RW',
            gkw: 'Gerätekraftwagen',
            mzkw: 'Mehrzweckkraftwagen',
            mtwtz: 'MTW-TZ',
            radlader: 'Radlader (BRmG R) mit LKW K 9',
            anhdle: 'Anhänger Drucklufterzeugung',
            polheli: 'Polizeihubschrauber',
            flf: 'Flugfeldlöschfahrzeug',
            rtf: 'Rettungstreppenfahrzeug',
            taucher: 'Taucher',
            mek: 'MEK-Fahrzeuge',
            sek: 'SEK-Fahrzeuge',
            gwwerk: 'GW-Werkfeuerwehr',
            ulf: 'ULF mit Löscharm',
            tm: 'Teleskopmasten',
            turbo: 'Turbolöscher'
        },
        pois: [
            "Park",
            "See",
            "Krankenhaus",
            "Wald",
            "Bushaltestelle",
            "Straßenbahnhaltestelle",
            "Bahnhof (Regionalverkehr)",
            "Bahnhof (Regional und Fernverkehr)",
            "Güterbahnhof",
            "Supermarkt (Klein)",
            "Supermarkt (Goß)",
            "Tankstelle",
            "Schule",
            "Museum",
            "Einkaufszentrum",
            "Auto-Werkstatt",
            "Autobahnauf.- / abfahrt",
            "Weihnachtsmarkt",
            "Lagerhalle",
            "Diskothek",
            "Stadion",
            "Bauernhof",
            "Bürokomplex",
            "Schwimmbad",
            "Bahnübergang",
            "Theater",
            "Festplatz",
            "Fluss",
            "Baumarkt",
            "Flughafen (klein): Start-/Landebahn",
            "Flughafen (klein): Gebäude",
            "Flughafen (klein): Flugzeug Standplatz",
            "Flughafen (groß): Start-/Landebahn",
            "Flughafen (groß): Terminal",
            "Flughafen (groß): Vorfeld / Standplätze",
            "Flughafen (groß): Parkhaus",
            "Biogasanlage",
            "Bank",
            "Kirche",
            "Chemiepark",
            "Industire-Allgemein",
            "Automobilindustrie",
            "Müllverbrennungsanlage",
            "Eishalle"
        ]
    };

    I18n.translations.en['lssm']['missionHelper'] = {
        diyMission: 'This mission seems to be a large scale alliance mission.',
        vge: 'Large scale alliance mission',
        siwa: 'Planned mission',
        missionNotDefined: 'This mission is not listed yet.',
        patients: 'Patients',
        transport: 'Transport',
        prisoners: 'Prisoners',
        to: 'up to',
        vehicles: {
            truck: "Firetrucks",
            platform: "Platform truck",
            heavyRescue: "Heavy rescue vehicles or Utility unit",
            boat: "Boat",
            air: "Mobile air",
            bchief: "Battalion chief unit",
            tanker: "Water tanker",
            hazmat: "HazMat",
            mcv: "Mobile command Vehicle",
            arff: "ARFF",
            largeFireboat: "Large Fireboat",
            als: "ALS Ambulance",
            bls: "BLS Ambulance",
            fly: "Fly-Car",
            ems: "EMS Rescue",
            mcu: "Mass Casualty Unit",
            largeRescueboat: "Large Rescueboat",
            police: "Police Car",
            k9: "K-9",
            pmotorcycle: "Police Motorcycle",
            swatArmoured: "SWAT Armoured Vehicle",
            swatSuv: "SWAT SUV",
            hems: "HEMS",
            policeHeli: "Police Helicopter"
        },
        pois: [
            "Park",
            "Lake",
            "Hospital",
            "Forest",
            "Bus stop",
            "Tram stop",
            "Train station (regional traffic)",
            "Train station (regional traffic and long-distance travel)",
            "Goods station",
            "Supermarket (small)",
            "Supermarket (big)",
            "Gas station",
            "School",
            "Museum",
            "Mall",
            "Car workshop",
            "Highway exit",
            "Christmas market",
            "Storehouse",
            "Discotheque",
            "Stadium",
            "Farm",
            "Office building",
            "Swimming bath",
            "Railroad Crossing",
            "Theater",
            "Fairground",
            "River",
            "Small Airport (Runway)",
            "Large Airport (Runway)",
            "Airport Terminal",
            "Bank",
            "Warehouse",
            "Bridge",
            "Fast Food Restaurant",
            "Cargo Port",
            "Recycling Centre",
            "High rise",
            "Cruise ship dock",
            "Marina",
            "Rail Crossing",
            "Tunnel",
            "Cold Storage Warehouse",
            "Power Plant",
            "Factory",
            "Scrap yard",
            "Subway station",
            "Small chemical storage tank",
            "Large chemical storage tank",
            "Hotel",
            "Bar",
            "Landfill site",
        ]
    };

    I18n.translations.nl['lssm']['missionHelper'] = {
    };

    let missionHelp = $('#mission_help');

    let aaoText = '';
    let markup = '<div class="alert alert-warning" id="missionHelper"><div class="handle"></div><a class="pull-right" id="pinMissionHelper"><i class="glyphicon glyphicon-pushpin"></i></a>';

    if (missionHelp.length > 0) {
        $.getJSON(`${lssm.config.server}/modules/lss-missionHelper/missions.${I18n.locale}.json`, {_: new Date().getTime()}) // simple way to "disable" cache
            .done(missions => {
                let missionId = missionHelp.attr('href').split("/").pop().replace(/\?.*/, '');
                let mission = missions[missionId];
                if (mission) {
                    aaoText += `<h3>${mission['name']}&nbsp;<sub><sub>ID: ${window.location.href.replace(/\D/g, "")}</sub>&nbsp;<sub>Type: ${missionId}</sub>&nbsp;<sub>${mission.poi ? `POI: ${I18n.t(`lssm.missionHelper.pois.${mission.poi}`)} <sub>[${mission.poi}]</sub>` : ""}</sub></sub></h3><br>`;
                    if (mission['onlyRd'] !== true) {
                        // not Ambulance-only Missions
                        // If VGE
                        if (mission['vge'] === true) {
                            aaoText += '<h4>' + I18n.t('lssm.missionHelper.vge') + '</h4>';
                        }
                        // If Sicherheitswache
                        if (mission['siwa'] === true) {
                            aaoText += '<h4>' + I18n.t('lssm.missionHelper.siwa') + '</h4>';
                        } else {
                            // Number of patients
                            if ($(".mission_patient").length > 0) {
                                aaoText += '<span class="badge">' + $(".mission_patient").length + (($(".mission_patient").length > 1) ? ' Patienten' : ' Patient') + '</span><br><br>';
                            }
                            // Add Wasserbedarf
                            aaoText += mission['water'] ? I18n.t('lssm.missionHelper.water') + ": " + mission['water'].toLocaleString() + ' Liter<br>' : "";
                            // Add vehicles
                            let vehicles = mission['vehicles'];
                            $.each(vehicles, function (key, val) {
                                aaoText += val + 'x ' + I18n.t('lssm.missionHelper.vehicles.' + key);
                                if (mission['percentages'] && mission['percentages'][key]) {
                                    aaoText += ' (' + mission['percentages'][key] + '%)<br>';
                                } else {
                                    aaoText += ' (100%)<br>';
                                }
                            });
                            // Add patients
                            if (mission['patients']) {
                                if (mission['patients']['min'] != mission['patients']['max']) {
                                    aaoText += '<br>' + I18n.t('lssm.missionHelper.patients') + ': ' + (mission['patients']['min']||0) + ' ' + I18n.t('lssm.missionHelper.to') + ' ' + mission['patients']['max'];
                                } else {
                                    aaoText += '<br>' + I18n.t('lssm.missionHelper.patients') + ': ' + mission['patients']['max'];
                                }
                                if (mission['patients']['transport'] || mission['patients']['specialisation']) {
                                    aaoText += '<br>' + I18n.t('lssm.missionHelper.transport') + ': ';
                                    if (mission['patients']['transport']) {
                                        aaoText += mission['patients']['transport'] + '%';
                                    }
                                    if (mission['patients']['specialisation']) {
                                        aaoText += ' (' + mission['patients']['specialisation'] + ')';
                                    }
                                }
                                if (mission['patients']['nef']) {
                                    aaoText += '<br>' + I18n.t('lssm.missionHelper.vehicles.nef') + ': ' + mission['patients']['nef'] + '%';
                                }
                                if (mission['patients']['rth']) {
                                    aaoText += '<br>' + I18n.t('lssm.missionHelper.vehicles.rth') + ': ' + mission['patients']['rth'] + '%';
                                }
                                if (mission['patients']['tragehilfe']) {
                                    aaoText += '<br>' + I18n.t('lssm.missionHelper.tragehilfe') + ': ' + mission['patients']['tragehilfe'] + '%';
                                }
                                if ($(".mission_patient").length >= 5) {
                                    aaoText += '<br>1x ' + I18n.t('lssm.missionHelper.vehicles.lna') + ' (100%)';
                                }
                                if ($(".mission_patient").length >= 10) {
                                    aaoText += '<br>1x ' + I18n.t('lssm.missionHelper.vehicles.orgl') + ' (100%)';
                                }
                                aaoText += '<br>';
                            }
                            // Add prisoners
                            if (mission['prisoners']) {
                                if (mission['prisoners']['min'] != mission['prisoners']['max']) {
                                    aaoText += '<br>' + I18n.t('lssm.missionHelper.prisoners') + ': ' + (mission['prisoners']['min']||0) + ' ' + I18n.t('lssm.missionHelper.to') + ' ' + mission['prisoners']['max'];
                                } else {
                                    aaoText += '<br>' + I18n.t('lssm.missionHelper.prisoners') + ': ' + mission['prisoners']['max'];
                                }
                            }
                            // Add minuimum needed averageMinimumEmployees
                            if (mission['special'] && mission['special']['averageMinimumEmployeesFire']) {
                                aaoText += '<br>' + I18n.t('lssm.missionHelper.averageMinimumEmployeesFire') + ': ' + mission['special']['averageMinimumEmployeesFire'] + '<br>';
                            }
                            if (mission['special'] && mission['special']['averageMinimumEmployeesPolice']) {
                                aaoText += '<br>' + I18n.t('lssm.missionHelper.averageMinimumEmployeesPolice') + ': ' + mission['special']['averageMinimumEmployeesPolice'] + '<br>';
                            }
                            // Add Credits
                            if (mission["credits"]) {
                                aaoText += '<br><span class="badge badge-secondary"> ~ ' + parseInt(mission['credits']).toLocaleString() + ' Credits</span>';
                            }
                            if (mission['expansions']) {
                                aaoText += '<br>';
                                $.each(mission['expansions'], function () {
                                    aaoText += `<a href="../einsaetze/${this}"><span class="badge">${missions[this] ? missions[this].name : this}</span></a>`;
                                });
                            }
                        }
                    } else {
                        // Ambulance-only Missions
                        if (mission['transport'] || mission['specialisation']) {
                            aaoText += '<br>' + I18n.t('lssm.missionHelper.transport') + ': ';
                            if (mission['transport']) {
                                aaoText += mission['transport'] + '%';
                            }
                            if (mission['specialisation']) {
                                aaoText += ' (' + mission['specialisation'] + ')';
                            }
                        }
                        if (mission['nef']) {
                            aaoText += '<br>' + I18n.t('lssm.missionHelper.vehicles.nef') + ': ' + mission['nef'] + '%';
                        }
                        if (mission['rth']) {
                            aaoText += '<br>' + I18n.t('lssm.missionHelper.vehicles.rth') + ': ' + mission['rth'] + '%';
                        }
                        if (mission['tragehilfe']) {
                            aaoText += '<br>' + I18n.t('lssm.missionHelper.tragehilfe') + ': ' + mission['tragehilfe'] + '%';
                        }
                        aaoText += '<br>';
                    }
                } else {
                    aaoText += `${I18n.t('lssm.missionHelper.missionNotDefined')}<sub>ID: ${window.location.href.replace(/\D/g, "")}</sub>&nbsp;<sub>Type: ${missionId}</sub>`;
                    $.getScript(`${lssm.config.server}/modules/lss-missionHelper/loadMissionData.${I18n.locale}.js`);
                }
                $('#missionHelper').append(aaoText)
                    .css("left", $('#iframe-inside-container').width() * 0.97 - $("#missionHelper").width());

            })
            .fail((jqxhr, textStatus, error) => {
                $('#missionHelper').append(`<pre>${error}</pre>`)
                    .css("left", $('#iframe-inside-container').width() * 0.97 - $("#missionHelper").width());
            });
    } else {
        aaoText += I18n.t('lssm.missionHelper.diyMission');
    }
    // Set markup
    markup += `${aaoText}</div>`;

    localStorage["lssm_missionHelper_state"] === "unpin" ? unpin(markup) : pin(markup);

    $('#pinMissionHelper').css("cursor", "pointer");
})($, window, I18n);

function pin(markup) {
    $('#mission-form').prepend(markup||$('#missionHelper'));
    $('#missionHelper .handle').css("display", "none");
    $('#missionHelper').css("position", "unset");
    $('#pinMissionHelper').attr("onclick", "unpin(null)");
    localStorage["lssm_missionHelper_state"] = "pin";
}

function unpin(markup) {
    $('#iframe-inside-container').append(markup||$('#missionHelper'));
    $('#missionHelper .handle').css("width", "100%")
        .css("height", "5px")
        .css("cursor", "move")
        .css("display", "block")
        .css("background", "repeating-linear-gradient(\n" +
            "-45deg,\n" +
            "transparent,\n" +
            "transparent 10px,\n" +
            "#ccc 10px,\n" +
            "#ccc 20px\n" +
            ")");
    $('#missionHelper').draggable({
        handle: ".handle",
        containment: "#iframe-inside-container",
        scroll: true,
        stack: "#iframe-inside-container"
    })
        .css("position", "absolute")
        .css("top", "3%")
        .css("max-width", "33.3333%");
    $('#pinMissionHelper').attr("onclick", "pin(null)");
    $('.alert.alert-')
    localStorage["lssm_missionHelper_state"] = "unpin";
}

function cleanList() {
    $.getJSON(`${lssm.config.server}/modules/lss-missionHelper/missions.${I18n.locale}.json`, {_: new Date().getTime()}).done(missions => {
        console.log("clean list", Object.keys(missions).length);
        $('a.btn').attr("target", "_blank");
        $(`a:not(.btn)`).parent().parent().show();
        for (let id in missions) {
            $(`a[href="/einsaetze/${id}"]:not(.btn)`).parent().parent().hide();
        }
        window.setTimeout(cleanList, 10000);
    });
}
