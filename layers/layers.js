ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([1312920.689822, 9210140.310864, 1333588.469998, 9222319.107817]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Wahyuni_Lestari_Revisi_3 = new ol.format.GeoJSON();
var features_Wahyuni_Lestari_Revisi_3 = format_Wahyuni_Lestari_Revisi_3.readFeatures(json_Wahyuni_Lestari_Revisi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Wahyuni_Lestari_Revisi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wahyuni_Lestari_Revisi_3.addFeatures(features_Wahyuni_Lestari_Revisi_3);
var lyr_Wahyuni_Lestari_Revisi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wahyuni_Lestari_Revisi_3, 
                style: style_Wahyuni_Lestari_Revisi_3,
                popuplayertitle: 'Wahyuni_Lestari_Revisi',
                interactive: true,
    title: 'Wahyuni_Lestari_Revisi<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_0.png" /> 1<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_1.png" /> 2<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_2.png" /> 3<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_3.png" /> 4<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_4.png" /> 5<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_5.png" /> 6<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_6.png" /> 7<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_7.png" /> 8<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_8.png" /> 9<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_9.png" /> 10<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_10.png" /> 11<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_11.png" /> 12<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_12.png" /> 13<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_13.png" /> 14<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_14.png" /> 15<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_15.png" /> 16<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_16.png" /> 17<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_17.png" /> 18<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_18.png" /> 19<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_19.png" /> 20<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_20.png" /> 21<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_21.png" /> 22<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_22.png" /> 23<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_23.png" /> 24<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_24.png" /> 25<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_25.png" /> 26<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_26.png" /> 27<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_27.png" /> 28<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_28.png" /> 29<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_29.png" /> 30<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_30.png" /> 31<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_31.png" /> 32<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_32.png" /> 33<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_33.png" /> 34<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_34.png" /> 35<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_35.png" /> 36<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_36.png" /> 37<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_37.png" /> 38<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_38.png" /> 39<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_39.png" /> 40<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_40.png" /> 41<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_41.png" /> 42<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_42.png" /> 43<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_43.png" /> 44<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_44.png" /> 45<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_45.png" /> 46<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_46.png" /> 47<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_47.png" /> 48<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_48.png" /> 49<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_49.png" /> 50<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_50.png" /> 51<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_51.png" /> 52<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_52.png" /> 53<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_53.png" /> 54<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_54.png" /> 55<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_55.png" /> 56<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_56.png" /> 57<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_57.png" /> 58<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_58.png" /> 59<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_59.png" /> 60<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_60.png" /> 61<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_61.png" /> 62<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_62.png" /> 63<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_63.png" /> 64<br />\
    <img src="styles/legend/Wahyuni_Lestari_Revisi_3_64.png" /> 65<br />' });
var format_Jalan_Lamongan_OSM_Cut_4 = new ol.format.GeoJSON();
var features_Jalan_Lamongan_OSM_Cut_4 = format_Jalan_Lamongan_OSM_Cut_4.readFeatures(json_Jalan_Lamongan_OSM_Cut_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Jalan_Lamongan_OSM_Cut_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Lamongan_OSM_Cut_4.addFeatures(features_Jalan_Lamongan_OSM_Cut_4);
var lyr_Jalan_Lamongan_OSM_Cut_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Lamongan_OSM_Cut_4, 
                style: style_Jalan_Lamongan_OSM_Cut_4,
                popuplayertitle: 'Jalan_Lamongan_OSM_Cut',
                interactive: false,
    title: 'Jalan_Lamongan_OSM_Cut<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_4_0.png" /> Jalan Akses<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_4_1.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_4_2.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_4_3.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_4_4.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_4_5.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_4_6.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_Lamongan_OSM_Cut_4_7.png" /> <br />' });
var format_BatasDesadanKelurahan_5 = new ol.format.GeoJSON();
var features_BatasDesadanKelurahan_5 = format_BatasDesadanKelurahan_5.readFeatures(json_BatasDesadanKelurahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_BatasDesadanKelurahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesadanKelurahan_5.addFeatures(features_BatasDesadanKelurahan_5);
var lyr_BatasDesadanKelurahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesadanKelurahan_5, 
                style: style_BatasDesadanKelurahan_5,
                popuplayertitle: 'Batas Desa dan Kelurahan',
                interactive: false,
                title: '<img src="styles/legend/BatasDesadanKelurahan_5.png" /> Batas Desa dan Kelurahan'
            });
var format_BatasKecamatan_6 = new ol.format.GeoJSON();
var features_BatasKecamatan_6 = format_BatasKecamatan_6.readFeatures(json_BatasKecamatan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_BatasKecamatan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_6.addFeatures(features_BatasKecamatan_6);
var lyr_BatasKecamatan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_6, 
                style: style_BatasKecamatan_6,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_6.png" /> Batas Kecamatan'
            });
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_BatasDesadanKelurahan_5,lyr_BatasKecamatan_6,],
                                fold: 'close',
                                title: 'Batas Administrasi'});
var group_Jalan = new ol.layer.Group({
                                layers: [lyr_Jalan_Lamongan_OSM_Cut_4,],
                                fold: 'close',
                                title: 'Jalan'});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Base Maps'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_Wahyuni_Lestari_Revisi_3.setVisible(true);lyr_Jalan_Lamongan_OSM_Cut_4.setVisible(true);lyr_BatasDesadanKelurahan_5.setVisible(true);lyr_BatasKecamatan_6.setVisible(true);
var layersList = [group_BaseMaps,lyr_Wahyuni_Lestari_Revisi_3,group_Jalan,group_BatasAdministrasi];
lyr_Wahyuni_Lestari_Revisi_3.set('fieldAliases', {'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SKALA': 'SKALA', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'NOZN': 'NOZN', 'JNSZN': 'JNSZN', 'PENGGUNAAN': 'PENGGUNAAN', 'HISTZONE': 'HISTZONE', 'JMLSMPL': 'JMLSMPL', 'JENISSAMPE': 'JENISSAMPE', 'BEDA_ZONA': 'BEDA_ZONA', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'JMLNILAI': 'JMLNILAI', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'NILBULAT': 'NILBULAT', 'Luas_M2': 'Luas_M2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Surveyor': 'Surveyor', 'Keterangan': 'Keterangan', 'Kode Zona': 'Kode Zona', });
lyr_Jalan_Lamongan_OSM_Cut_4.set('fieldAliases', {'code': 'code', 'fclass': 'fclass', 'name': 'name', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'EditBy': 'EditBy', });
lyr_BatasDesadanKelurahan_5.set('fieldAliases', {'REGION': 'REGION', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'NEGARA': 'NEGARA', 'KODE_UNSUR': 'KODE_UNSUR', 'TOPONYM': 'TOPONYM', 'LUAS_DESA': 'LUAS_DESA', 'LUAS_KECA': 'LUAS_KECA', 'LUAS_KABU': 'LUAS_KABU', 'LUAS_PROV': 'LUAS_PROV', 'WEB_KABU': 'WEB_KABU', 'WEB_PROV': 'WEB_PROV', 'KODE_BPS': 'KODE_BPS', 'IBU_KABU': 'IBU_KABU', 'POPU_KABU': 'POPU_KABU', 'IBU_PROV': 'IBU_PROV', 'POPU_PROV': 'POPU_PROV', 'LUAS_UNSUR': 'LUAS_UNSUR', 'KET_KECA': 'KET_KECA', 'KET_KABU': 'KET_KABU', 'LuasSdr': 'LuasSdr', });
lyr_BatasKecamatan_6.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Operator': 'Operator', });
lyr_Wahyuni_Lestari_Revisi_3.set('fieldImages', {'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SKALA': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'NOZN': 'TextEdit', 'JNSZN': 'Range', 'PENGGUNAAN': 'TextEdit', 'HISTZONE': 'TextEdit', 'JMLSMPL': 'TextEdit', 'JENISSAMPE': 'TextEdit', 'BEDA_ZONA': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'JMLNILAI': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'NILBULAT': 'TextEdit', 'Luas_M2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Surveyor': 'TextEdit', 'Keterangan': 'TextEdit', 'Kode Zona': 'TextEdit', });
lyr_Jalan_Lamongan_OSM_Cut_4.set('fieldImages', {'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'EditBy': 'TextEdit', });
lyr_BatasDesadanKelurahan_5.set('fieldImages', {'REGION': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'NEGARA': 'TextEdit', 'KODE_UNSUR': 'TextEdit', 'TOPONYM': 'TextEdit', 'LUAS_DESA': 'TextEdit', 'LUAS_KECA': 'TextEdit', 'LUAS_KABU': 'TextEdit', 'LUAS_PROV': 'TextEdit', 'WEB_KABU': 'TextEdit', 'WEB_PROV': 'TextEdit', 'KODE_BPS': 'TextEdit', 'IBU_KABU': 'TextEdit', 'POPU_KABU': 'TextEdit', 'IBU_PROV': 'TextEdit', 'POPU_PROV': 'TextEdit', 'LUAS_UNSUR': 'TextEdit', 'KET_KECA': 'TextEdit', 'KET_KABU': 'TextEdit', 'LuasSdr': 'TextEdit', });
lyr_BatasKecamatan_6.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Operator': 'TextEdit', });
lyr_Wahyuni_Lestari_Revisi_3.set('fieldLabels', {'WADMPR': 'hidden field', 'WADMKK': 'hidden field', 'SKALA': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'NOZN': 'inline label - always visible', 'JNSZN': 'inline label - always visible', 'PENGGUNAAN': 'inline label - always visible', 'HISTZONE': 'hidden field', 'JMLSMPL': 'hidden field', 'JENISSAMPE': 'hidden field', 'BEDA_ZONA': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'JMLNILAI': 'hidden field', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'NILBULAT': 'hidden field', 'Luas_M2': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Surveyor': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Kode Zona': 'inline label - always visible', });
lyr_Jalan_Lamongan_OSM_Cut_4.set('fieldLabels', {'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'EditBy': 'no label', });
lyr_BatasDesadanKelurahan_5.set('fieldLabels', {'REGION': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROVINSI': 'no label', 'NEGARA': 'no label', 'KODE_UNSUR': 'no label', 'TOPONYM': 'no label', 'LUAS_DESA': 'no label', 'LUAS_KECA': 'no label', 'LUAS_KABU': 'no label', 'LUAS_PROV': 'no label', 'WEB_KABU': 'no label', 'WEB_PROV': 'no label', 'KODE_BPS': 'no label', 'IBU_KABU': 'no label', 'POPU_KABU': 'no label', 'IBU_PROV': 'no label', 'POPU_PROV': 'no label', 'LUAS_UNSUR': 'no label', 'KET_KECA': 'no label', 'KET_KABU': 'no label', 'LuasSdr': 'no label', });
lyr_BatasKecamatan_6.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Operator': 'no label', });
lyr_BatasKecamatan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});