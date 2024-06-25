ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:6566").setExtent([224112.883008, 247144.309913, 246766.270556, 258775.909700]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Votos_Unidades_1 = new ol.format.GeoJSON();
var features_Votos_Unidades_1 = format_Votos_Unidades_1.readFeatures(json_Votos_Unidades_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6566'});
var jsonSource_Votos_Unidades_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Votos_Unidades_1.addFeatures(features_Votos_Unidades_1);
var lyr_Votos_Unidades_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Votos_Unidades_1, 
                style: style_Votos_Unidades_1,
                interactive: true,
                title: 'Votos_Unidades'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Votos_Unidades_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Votos_Unidades_1];
lyr_Votos_Unidades_1.set('fieldAliases', {'Municipio': 'Municipio', 'Precinto': 'Precinto', 'Unidad': 'Unidad', 'Grupo': 'Grupo', 'DS': 'DS', 'DR': 'DR', 'Votos por': 'Votos por', 'Votos PNP': 'Votos PNP', 'Votos PPD': 'Votos PPD', 'Votos PIP': 'Votos PIP', 'Votos MVC': 'Votos MVC', 'votos PD': 'votos PD', });
lyr_Votos_Unidades_1.set('fieldImages', {'Municipio': 'TextEdit', 'Precinto': 'TextEdit', 'Unidad': 'TextEdit', 'Grupo': 'TextEdit', 'DS': 'TextEdit', 'DR': 'TextEdit', 'Votos por': 'TextEdit', 'Votos PNP': 'TextEdit', 'Votos PPD': 'TextEdit', 'Votos PIP': 'TextEdit', 'Votos MVC': 'TextEdit', 'votos PD': 'TextEdit', });
lyr_Votos_Unidades_1.set('fieldLabels', {'Municipio': 'inline label', 'Precinto': 'no label', 'Unidad': 'inline label', 'Grupo': 'no label', 'DS': 'no label', 'DR': 'no label', 'Votos por': 'inline label', 'Votos PNP': 'inline label', 'Votos PPD': 'inline label', 'Votos PIP': 'inline label', 'Votos MVC': 'inline label', 'votos PD': 'inline label', });
lyr_Votos_Unidades_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});