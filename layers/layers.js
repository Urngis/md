var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Katastar_1 = new ol.format.GeoJSON();
var features_Katastar_1 = format_Katastar_1.readFeatures(json_Katastar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Katastar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Katastar_1.addFeatures(features_Katastar_1);
var lyr_Katastar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Katastar_1, 
                style: style_Katastar_1,
                popuplayertitle: 'Katastar',
                interactive: true,
                title: '<img src="styles/legend/Katastar_1.png" /> Katastar'
            });
var format_GranicaMD_2 = new ol.format.GeoJSON();
var features_GranicaMD_2 = format_GranicaMD_2.readFeatures(json_GranicaMD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranicaMD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranicaMD_2.addFeatures(features_GranicaMD_2);
var lyr_GranicaMD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranicaMD_2, 
                style: style_GranicaMD_2,
                popuplayertitle: 'Granica MD',
                interactive: true,
                title: '<img src="styles/legend/GranicaMD_2.png" /> Granica MD'
            });
var format_Tivat_3 = new ol.format.GeoJSON();
var features_Tivat_3 = format_Tivat_3.readFeatures(json_Tivat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tivat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tivat_3.addFeatures(features_Tivat_3);
var lyr_Tivat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tivat_3, 
                style: style_Tivat_3,
                popuplayertitle: 'Tivat',
                interactive: true,
                title: '<img src="styles/legend/Tivat_3.png" /> Tivat'
            });
var format_Kotor_4 = new ol.format.GeoJSON();
var features_Kotor_4 = format_Kotor_4.readFeatures(json_Kotor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kotor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kotor_4.addFeatures(features_Kotor_4);
var lyr_Kotor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kotor_4, 
                style: style_Kotor_4,
                popuplayertitle: 'Kotor',
                interactive: true,
                title: '<img src="styles/legend/Kotor_4.png" /> Kotor'
            });
var format_HercegNovi_5 = new ol.format.GeoJSON();
var features_HercegNovi_5 = format_HercegNovi_5.readFeatures(json_HercegNovi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HercegNovi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HercegNovi_5.addFeatures(features_HercegNovi_5);
var lyr_HercegNovi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HercegNovi_5, 
                style: style_HercegNovi_5,
                popuplayertitle: 'Herceg Novi',
                interactive: true,
                title: '<img src="styles/legend/HercegNovi_5.png" /> Herceg Novi'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Katastar_1.setVisible(true);lyr_GranicaMD_2.setVisible(true);lyr_Tivat_3.setVisible(true);lyr_Kotor_4.setVisible(true);lyr_HercegNovi_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Katastar_1,lyr_GranicaMD_2,lyr_Tivat_3,lyr_Kotor_4,lyr_HercegNovi_5];
lyr_Katastar_1.set('fieldAliases', {'naziv_ko': 'naziv_ko', 'br_parcele': 'br_parcele', });
lyr_GranicaMD_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', });
lyr_Tivat_3.set('fieldAliases', {'id': 'id', 'Podnosilac': 'Podnosilac', 'kupalište': 'kupalište', 'KO': 'KO', 'vrsta obje': 'vrsta obje', 'prihvata s': 'prihvata s', 'stav komis': 'stav komis', 'ivan opaž': 'ivan opaž', });
lyr_Kotor_4.set('fieldAliases', {'id': 'id', 'Podnosilac': 'Podnosilac', 'kupalište': 'kupalište', 'KO': 'KO', 'vrsta obje': 'vrsta obje', 'prihvata s': 'prihvata s', 'stav komis': 'stav komis', 'ivan opaž': 'ivan opaž', });
lyr_HercegNovi_5.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'podnosilac': 'podnosilac', 'kupalište': 'kupalište', 'ko': 'ko', 'vrsta obje': 'vrsta obje', 'odbija se/': 'odbija se/', 'stav komis': 'stav komis', 'ivan opaž': 'ivan opaž', });
lyr_Katastar_1.set('fieldImages', {'naziv_ko': '', 'br_parcele': '', });
lyr_GranicaMD_2.set('fieldImages', {'qc_id': '', 'fid': '', });
lyr_Tivat_3.set('fieldImages', {'id': '', 'Podnosilac': '', 'kupalište': '', 'KO': '', 'vrsta obje': '', 'prihvata s': '', 'stav komis': '', 'ivan opaž': '', });
lyr_Kotor_4.set('fieldImages', {'id': '', 'Podnosilac': '', 'kupalište': '', 'KO': '', 'vrsta obje': '', 'prihvata s': '', 'stav komis': '', 'ivan opaž': '', });
lyr_HercegNovi_5.set('fieldImages', {'qc_id': '', 'id': '', 'podnosilac': '', 'kupalište': '', 'ko': '', 'vrsta obje': '', 'odbija se/': '', 'stav komis': '', 'ivan opaž': '', });
lyr_Katastar_1.set('fieldLabels', {'naziv_ko': 'header label - always visible', 'br_parcele': 'header label - always visible', });
lyr_GranicaMD_2.set('fieldLabels', {'qc_id': 'hidden field', 'fid': 'hidden field', });
lyr_Tivat_3.set('fieldLabels', {'id': 'header label - always visible', 'Podnosilac': 'header label - always visible', 'kupalište': 'header label - always visible', 'KO': 'header label - always visible', 'vrsta obje': 'header label - always visible', 'prihvata s': 'header label - always visible', 'stav komis': 'header label - always visible', 'ivan opaž': 'header label - always visible', });
lyr_Kotor_4.set('fieldLabels', {'id': 'header label - always visible', 'Podnosilac': 'header label - always visible', 'kupalište': 'header label - always visible', 'KO': 'header label - always visible', 'vrsta obje': 'header label - always visible', 'prihvata s': 'header label - always visible', 'stav komis': 'header label - always visible', 'ivan opaž': 'header label - always visible', });
lyr_HercegNovi_5.set('fieldLabels', {'qc_id': 'no label', 'id': 'header label - always visible', 'podnosilac': 'header label - always visible', 'kupalište': 'header label - always visible', 'ko': 'header label - always visible', 'vrsta obje': 'header label - always visible', 'odbija se/': 'header label - always visible', 'stav komis': 'header label - always visible', 'ivan opaž': 'header label - always visible', });
lyr_HercegNovi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});